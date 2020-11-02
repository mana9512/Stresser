from django.db import models
from django.contrib.auth.models import User

class Specialist(models.Model):
    specialist_name = models.CharField(max_length=100)
    specialist_contact = models.CharField(max_length=16)
    specialist_about = models.CharField(max_length=800)

class TimeSlot(models.Model):
    slot = models.TimeField()
    date = models.DateField()
    specialist=models.ForeignKey(Specialist,to_field='id',on_delete=models.CASCADE)
    availability=models.BooleanField(default=True)

    def __str__(self):
        return "%s Availability" % self.availability

# class Booking(models.Model):
#     timeslot = models.OneToOneField(
#         TimeSlot,
#         on_delete=models.CASCADE,
#     )
#     user = models.ForeignKeyField(
#         User,
#         on_delete=models.CASCADE,
#     )
#     timestamp = models.DateTimeField(auto_now_add=True)


