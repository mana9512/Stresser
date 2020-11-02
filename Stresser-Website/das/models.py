from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class DASScore(models.Model):
   user = models.ForeignKey(User,on_delete=models.CASCADE)
   Dscore = models.IntegerField()
   Ascore = models.IntegerField()
   Sscore = models.IntegerField()



