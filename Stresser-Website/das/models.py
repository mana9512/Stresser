from django.db import models

# Create your models here.
class DASScore(models.Model):
   user_id = models.IntegerField()
   Dscore = models.IntegerField()
   Ascore = models.IntegerField()
   Sscore = models.IntegerField()



