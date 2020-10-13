from django.contrib import admin

# Register your models here.
from .models import status,prediction

admin.site.register(status)
admin.site.register(prediction)