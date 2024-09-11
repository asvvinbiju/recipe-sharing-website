from rest_framework import serializers
from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')
    created_at = serializers.DateTimeField("%Y-%m-%d %H:%M:%S", read_only=True)
    
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'ingredients', 'instructions', 'image', 'created_by', 'created_at']

