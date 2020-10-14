from django.urls import path,include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('personalitypred',views.StatusView)

urlpatterns=[
  
    path('api/',include(router.urls)),
    path('api/personalityscore/',views.score),
    #path('form/',views.cxncontact,name='cxform'),
]