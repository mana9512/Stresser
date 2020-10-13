from django.urls import path,include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('MyAPI',views.StatusView)

urlpatterns=[
    path('index/',views.index,name='index'),
    path('about-us/',views.aboutus,name='about-us'),
    path('api/',include(router.urls)),
    path('score/',views.score),
    #path('form/',views.cxncontact,name='cxform'),
]