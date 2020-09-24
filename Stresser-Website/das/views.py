from django.shortcuts import render

# # Create your views here.
from das.models import DASScore
from rest_framework import viewsets, permissions,status,generics
from .serializers import DASScoreSerializers
from rest_framework.views import APIView
from rest_framework.response import Response



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

    # def update(self, request):
    #     data = request.data
    #     qs = DASScore.objects.filter(user_id=data['user_id'])
    #     serializer = DASScoreSerializers(qs, data=data, many=True)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data,status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    #     return Response(serializer.data)
    # def create(self, validated_data):
    #     answer, created = DASScore.objects.get_or_create(
    #         question=validated_data.get(request.data['user_id'], None),
    #         defaults={'answer': validated_data.get('answer', None)})

    #     return answer

# class DASSViewSet(generics.ListCreateAPIView):
#     queryset = DASScore.objects.all()
#     serializer_class = DASScoreSerializers
#     # permission_classes = (permissions.IsAuthenticated,)

#     def create(self, request, *args, **kwargs):
#         myMode, created = DASScore.objects.update_or_create(user_id=request.data['user_id'],None)

#         # require context={'request': request} because i'm using HyperlinkModelSerializer
#         serializer = DASScoreSerializers(DASScore, data=request.data, context={'request': request})
#         if serializer.is_valid():
#             serializer.save()

#         if created:
#             return Response(serializer.data, status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.data, status.HTTP_200_OK)

# import json
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.authentication import SessionAuthentication
# from .models import DASScore
# from .serializers import DASScoreSerializers
# from rest_framework import generics,mixins,permissions
# from django.shortcuts import get_object_or_404

# def is_json(json_data):
#     try:
#         real_json=json.loads(json_data)
#         is_valid=True
#     except ValueError:
#         is_valid=False
#     return is_valid

# class DASSDetailAPIView(mixins.UpdateModelMixin,generics.RetrieveAPIView):
#     # permission_classes=[permissions.IsAuthenticatedOrReadOnly]
#     # authentication_classes=[]
#     serializer_class=DASScoreSerializers
#     queryset= DASScore.objects.all()
#     lookup_field='user_id'

#     def put(self,request,*args,**kwargs):
#         return self.update(request,*args,**kwargs)

#     def patch(self,request,*args,**kwargs):
#         return self.update(request,*args,**kwargs)

#     def delete(self,request,*args,**kwargs):
#         return self.destroy(request,*args,**kwargs)
    


# class DASSAPIView(mixins.CreateModelMixin,generics.ListAPIView):
#     # permission_classes=[permissions.IsAuthenticatedOrReadOnly]
#     # authentication_classes=[SessionAuthentication]
#     serializer_class=DASScoreSerializers
#     passed_id=None
#     def get_queryset(self):
#         request=self.request
#         print(request.user)
#         qs=DASScore.objects.all()
#         query=self.request.GET.get('q')
#         if query is not None:
#             qs=qs.filter(content__icontains=query)
#         return qs

#     def post(self,request,*args,**kwargs):
#         return self.create(request,*args,**kwargs) 

#     def perform_create(self,serializer):
#         serializer.save(user=self.request.user)
   # obj=scoreobjserialize.validated_data.get(user_id=request.data['user_id'])
            # print(obj)   
            # if obj:
            #     print(obj)

            # if scoreobjserialize.validated_data.get(request.data['user_id'],None):
            #     newobj=DASScoreSerializers(data={ 'user_id':request.data['user_id'] })
            #     print(newobj)
            #     if newobj.is_valid():
            #         newobj.save()
            #         return Response(newobj.data,status=status.HTTP_201_CREATED)
            #     else:
            #         return Response(newobj.errors,status=status.HTTP_400_BAD_REQUEST)