from rest_framework import serializers
from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')
    created_by_id = serializers.ReadOnlyField(source='created_by.id')
    created_at = serializers.DateTimeField("%Y-%m-%d %H:%M:%S", read_only=True)
    is_following = serializers.SerializerMethodField()
    
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'ingredients', 'instructions', 'image', 'created_by', 'created_by_id', 'created_at', 'is_following']

    def get_is_following(self, obj):
        request = self.context.get('request')
        
        if request and request.user.is_authenticated:
            user_profile = request.user.userprofile
            following_ids = [profile.id for profile in user_profile.following.all()]
            return user_profile.following.filter(id=obj.created_by_id).exists()
        
        return False

