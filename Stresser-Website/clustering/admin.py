from django.contrib import admin

# Register your models here.
from .models import pclass,prediction

admin.site.register(pclass)
admin.site.register(prediction)