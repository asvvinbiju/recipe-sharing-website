from django.urls import path
from .views import UserCreateView, LoginView, UserProfileView

urlpatterns = [
    path('register/', UserCreateView.as_view(), name='user-register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/<int:pk>', UserProfileView.as_view(), name='user-profile'),
]
