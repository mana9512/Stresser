from django.urls import path,include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('clustering',views.pclassView)

urlpatterns=[
    
   
    path('api/calculate_score/',views.calculate_score),
    #path('form/',views.cxncontact,name='cxform'),
]