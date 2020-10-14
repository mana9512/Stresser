from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class status(models.Model):
    # user = models.OneToOneField(
    #     User,
    #     on_delete=models.CASCADE,
    # )
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
    # user = models.OneToOneField(
    #     User,
    #     on_delete=models.CASCADE,
    # )
    ypred=models.CharField(max_length=15)