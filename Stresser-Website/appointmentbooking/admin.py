from django.contrib import admin
from .models import Specialist, TimeSlot, Booking
# Register your models here.
# admin.site.register(TimeSlot)
# admin.site.register(Booking)
admin.site.register(Specialist)
admin.site.register(TimeSlot)
admin.site.register(Booking)