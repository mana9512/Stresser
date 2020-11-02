from django.urls import path,include
from .views import SpecialistViewSet, TimeSlotViewSet
urlpatterns = [
    
    path('api/checkavailability/',TimeSlotViewSet.as_view()),
    path('api/specialist/',SpecialistViewSet.as_view()),
  

    

]