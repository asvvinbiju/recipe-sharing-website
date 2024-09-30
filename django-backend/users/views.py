from django.shortcuts import render, get_object_or_404
from rest_framework import generics, permissions
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .models import UserProfile
from recipes.models import Recipe
from .serializers import UserProfileSerializer


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token':token.key, 'user_id': user.id }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
    

class UserProfileView(generics.RetrieveUpdateAPIView):
    queryset = UserProfile
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return UserProfile.objects.filter(user=user)
        return UserProfile.objects.none()
    
    def get_object(self):
        # Ensuring that only one profile is retrieved based on the authenticated user
        user = self.request.user
        return UserProfile.objects.get(user=user)
    

class FollowUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request, pk):
        user_profile = request.user.userprofile
        user_to_follow = get_object_or_404(UserProfile, pk=pk)
        
        if user_to_follow in user_profile.following.all():
            return Response({"detail": "you are already following this user."}, status=status.HTTP_400_BAD_REQUEST)

        user_profile.following.add(user_to_follow)
        return Response({"detail": "User followed successfully!"}, status=status.HTTP_200_OK)

    
    def delete(self, request, pk):
        user_profile = request.user.userprofile
        user_to_unfollow = get_object_or_404(UserProfile, pk=pk)
        
        if user_to_unfollow not in user_profile.following.all():
            return Response({"detail": "you are not following this user."}, status=status.HTTP_400_BAD_REQUEST) 

        user_profile.following.remove(user_to_unfollow)
        return Response({"detail": "User unfollowed successfully!"}, status=status.HTTP_200_OK)
        
    
class SaveRecipeView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request, recipe_id):
        user_profile = get_object_or_404(UserProfile, user=request.user)
        recipe = get_object_or_404(Recipe, id=recipe_id)
        
        if recipe in user_profile.saved_recipes.all():
            return Response({"message": "Recipe already saved."}, status=status.HTTP_400_BAD_REQUEST)
        
        user_profile.saved_recipes.add(recipe)
        user_profile.save()
        return Response({"message": "Recipe saved successfully."}, status=status.HTTP_200_OK)

    def delete(self, request, recipe_id):
        user_profile = get_object_or_404(UserProfile, user=request.user)
        recipe = get_object_or_404(Recipe, id=recipe_id)

        if recipe not in user_profile.saved_recipes.all():
            return Response({"message": "Recipe not found in saved list."}, status=status.HTTP_400_BAD_REQUEST)
        
        user_profile.saved_recipes.remove(recipe)
        user_profile.save()
        return Response({"message": "Recipe removed from saved list."}, status=status.HTTP_200_OK)