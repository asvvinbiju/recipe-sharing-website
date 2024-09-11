from django.shortcuts import render
from .models import Recipe
from users.models import UserProfile
from .serializers import RecipeSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response


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
