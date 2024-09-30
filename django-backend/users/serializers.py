from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile
from recipes.models import Recipe
from recipes.serializers import RecipeSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only':True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        
        return user
    
    
class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    following = serializers.PrimaryKeyRelatedField(many=True, queryset=UserProfile.objects.all())
    # saved_recipe = RecipeSerializer(many=True, read_only=True)
    saved_recipes = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Recipe.objects.all()
    )
    your_recipe = RecipeSerializer(many=True, read_only=True)

    class Meta:
        model = UserProfile
        fields = ['user', 'following', 'saved_recipes', 'your_recipe']
