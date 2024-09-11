from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("recipes/", RecipeListCreateView.as_view(), name='recipe-list-create'),
    path("user-recipes/", UserRecipeView.as_view(), name='user-recipes'),
    path("saved-recipes/", UserSavedRecipeView.as_view(), name='saved-recipes'),
    path("all-recipes/", AllRecipeView.as_view(), name="all-recipes"),
    path("recipe-view/<int:pk>", RecipeView.as_view(), name='recipe-view')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)