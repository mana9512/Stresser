from rest_framework import serializers
from . models import pclass,prediction

class pclassSerializers(serializers.ModelSerializer):
    class Meta:
        model=pclass
        fields='__all__'
        
class predictionSerializers(serializers.ModelSerializer):
    class Meta:
        model=prediction
        fields='__all__'