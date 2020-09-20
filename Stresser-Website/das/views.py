from django.shortcuts import render

# Create your views here.
from das.models import DASScore
from rest_framework import viewsets, permissions,status
from .serializers import DASScoreSerializers
from rest_framework.views import APIView
from rest_framework.response import Response

# Lead Viewset


class DASSViewSet(APIView):
    def get(self, request):
        scoreobj=DASScore.objects.all()
        scoreobjserialize=DASScoreSerializers(scoreobj,many=True)
        return Response(scoreobjserialize.data)

    def post(self, request):
        scoreobjserialize=DASScoreSerializers(data=request.data)
        if scoreobjserialize.is_valid():
            scoreobjserialize.save()
            return Response(scoreobjserialize.data,status=status.HTTP_201_CREATED)
        return Response(scoreobjserialize.errors,status=status.HTTP_400_BAD_REQUEST)


    