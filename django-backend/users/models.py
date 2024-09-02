from django.db import models
from django.contrib.auth.models import User
from recipes.models import Recipe


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    followers = models.ManyToManyField('self', symmetrical=False, related_name='following', blank=True)
    saved_recipes = models.ManyToManyField(Recipe, related_name='saved_by', blank=True)
    your_recipes = models.ManyToManyField(Recipe, related_name='created_recipe', blank=True)

    def __str__(self):
        return self.user.username