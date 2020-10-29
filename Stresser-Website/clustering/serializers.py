from rest_framework import serializers
from . models import pclass

class pclassSerializers(serializers.ModelSerializer):
    class Meta:
        model=pclass
        fields='__all__'