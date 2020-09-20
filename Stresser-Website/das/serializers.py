from rest_framework import serializers
from  das.models import DASScore

class DASScoreSerializers(serializers.ModelSerializer):
    class Meta:
        model = DASScore
        fields = '__all__'
