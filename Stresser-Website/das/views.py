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

    # def post(self, request):
    #     scoreobjserialize=DASScoreSerializers(data=request.data)
    #     if scoreobjserialize.is_valid():
    #         print(scoreobjserialize.validated_data.get(request.data['user_id'],None))
    #         # if scoreobjserialize.validated_data.get(request.data['user_id'],None):
    #         #     newobj=DASScoreSerializers(data={ 'user_id':request.data['user_id'] })
    #         #     print(newobj)
    #         #     if newobj.is_valid():
    #         #         newobj.save()
    #         #         return Response(newobj.data,status=status.HTTP_201_CREATED)
    #         #     else:
    #         #         return Response(newobj.errors,status=status.HTTP_400_BAD_REQUEST)
    #         scoreobjserialize.save()
    #         return Response(scoreobjserialize.data,status=status.HTTP_201_CREATED)
    #     return Response(scoreobjserialize.errors,status=status.HTTP_400_BAD_REQUEST)

    # def update(self, request):
    #     data = request.data
    #     qs = DASScore.objects.filter(user_id=data['user_id'])
    #     serializer = DASScoreSerializers(qs, data=data, many=True)

    #     if serializer.is_valid():
    #         serializer.save()

    #     return Response(serializer.data)
    def create(self, validated_data):
        answer, created = DASScore.objects.get_or_create(
            question=validated_data.get(request.data['user_id'], None),
            defaults={'answer': validated_data.get('answer', None)})

        return answer

