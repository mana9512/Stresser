from django.db import models

class TimeSlot(models.Model):
    slot = models.TimeField()
    date = models.DateField()
    availability=models.BooleanField(default=True)

    def __str__(self):
        return "%s Availability" % self.availability

class Booking(models.Model):
    timeslot = models.OneToOneField(
        TimeSlot,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    user_id = models.IntegerField()
    user_name = models.CharField(max_length=100)
    user_email = models.EmailField(max_length=100)
    user_contact = models.IntegerField(max_length=10)


