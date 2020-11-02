from django.shortcuts import render
#from . forms import StatusForm
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.core import serializers
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from . models import pclass
from . serializers import pclassSerializers
import pickle
import json
import numpy as np
from sklearn import preprocessing
import pandas as pd
import joblib
#from sklearn.externals import joblib

class pclassView(viewsets.ModelViewSet):
    queryset=pclass.objects.all()
    serializer_class=pclassSerializers

@api_view(['POST'])
def calculate_score(request):
    #try:
        mdl=joblib.load("C:/Users/manas/OneDrive/Desktop/knoxsdp/StresserWeb2.0/Stresser-Website/personalityclusteringpickel.pkl")
        mydata=request.data

        pclassobjserialize=pclassSerializers(data=request.data)
        if pclassobjserialize.is_valid():
            pclassobjserialize.save()
            
        print(mydata)
        unit=np.array(list(mydata.values())) 
         
        
        df=pd.DataFrame(unit)
        df_tr=df.transpose()
        print(df_tr)
        
        y_pred = mdl.predict(df_tr)
        x = {'ypred' : y_pred}

        predictionobjserialize=predictionSerializers(data=x)
        if predictionobjserialize.is_valid():
            predictionobjserialize.save()
        
        
        return Response(y_pred)
        #return Response(scoreobjserialize.errors,status=status.HTTP_400_BAD_REQUEST)
        #return HttpResponse('Your personality is {}'.format(y_pred))
    #except ValueError as e:
        #return Response(e.args[0],status.HTTP_400_BAD_REQUEST)