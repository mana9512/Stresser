from django.db import models

# Create your models here.
class status(models.Model):
    
    gender=models.CharField(max_length=10)
    age=models.IntegerField()
    openness=models.IntegerField()
    neuroticism=models.IntegerField()
    conscientiousness=models.IntegerField()
    agreeableness=models.IntegerField()
    extraversion=models.IntegerField()

    def __str__(self):
        return self.gender

class prediction(models.Model):
    ypred=models.CharField(max_length=15)