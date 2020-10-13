from rest_framework import serializers
from .models import status,prediction

class statusSerializers(serializers.ModelSerializer):
    class Meta:
        model=status
        fields='__all__'


class predictionSerializers(serializers.ModelSerializer):
    class Meta:
        model=prediction
        fields='__all__'