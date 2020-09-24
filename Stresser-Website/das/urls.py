from rest_framework import routers
from .views import DASSViewSet
from django.urls import path,include



urlpatterns = [
    path('api/dasscore/',DASSViewSet.as_view())
#     path('api/dasscore/',DASSAPIView.as_view()),
#     path('api/dasscore/<int:user_id>',DASSDetailAPIView.as_view()),
]