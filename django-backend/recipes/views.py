from django.shortcuts import render
from .models import Recipe
from users.models import UserProfile
from .serializers import RecipeSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action



class RecipeListCreateView(generics.CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        recipe = serializer.save(created_by=self.request.user)
        
        user_profile = UserProfile.objects.get(user=self.request.user)
        
        user_profile.your_recipes.add(recipe)
        user_profile.save()
    
class UserRecipeView(generics.ListAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user_profile = UserProfile.objects.get(user=self.request.user)
        
        return user_profile.your_recipes.all()
    
    
    
class UserSavedRecipeView(generics.ListAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user_profile = UserProfile.objects.get(user=self.request.user)
        
        return user_profile.saved_recipes.all()
    

class AllRecipeView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
    
    def get_serializer_context(self):
        return {'request' : self.request }
    
    # @action(detail=True, methods=['post'])
    # def like(self, request, pk=None):
    #     recipe = self.get_object()
    #     user = request.user
    #     if recipe.likes.filter(id=user.id).exists():
    #         recipe.likes.remove(user)
    #     else:
    #         recipe.likes.add(user)
    #     return Response({'likes_count': recipe.likes.count()})

    # @action(detail=True, methods=['post'])
    # def comment(self, request, pk=None):
    #     recipe = self.get_object()
    #     serializer = CommentSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save(recipe=recipe, user=request.user)
    #         return Response(serializer.data, status=201)
    #     return Response(serializer.errors, status=400)
