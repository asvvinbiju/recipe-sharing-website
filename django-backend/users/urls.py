from django.urls import path
from .views import *

urlpatterns = [
    path('register/', UserCreateView.as_view(), name='user-register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/<int:pk>', UserProfileView.as_view(), name='user-profile'),
    path('follow/<int:pk>/', FollowUserView.as_view(), name='follow-user')
]
