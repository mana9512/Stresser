from django.shortcuts import render

# Create your views here.
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
from .models import status,prediction
from .serializers import statusSerializers,predictionSerializers
import pickle
import json
import numpy as np
from sklearn import preprocessing
import pandas as pd
import joblib
#from sklearn.externals import joblib


# Create your views here.
def index(request):
    return HttpResponse("<h1>Hello index page.</h1>")

def aboutus(request):
    return HttpResponse("<h1>Hello about us page.</h1>")

class StatusView(viewsets.ModelViewSet):
    queryset=status.objects.all()
    serializer_class=statusSerializers

@api_view(['POST'])
def score(request):
        mdl=joblib.load("C:/Users/manas/OneDrive/Desktop/knoxsdp/StresserWeb2.0/Stresser-Website/personalitypickle.pkl")
        mydata=request.data
        scoreobjserialize=statusSerializers(data=request.data)
        if scoreobjserialize.is_valid():
            scoreobjserialize.save()
            
        print(mydata)
        unit=np.array(list(mydata.values())) 
        #print(unit)
        if unit[0]=="Male":
            unit[0]=1
        else:
            unit[0]=0
        #print(unit)
        
        
        df=pd.DataFrame(unit)
        df_tr=df.transpose()
        print(df_tr)
        
        y_pred = mdl.predict(df_tr)
        for i in range(len(y_pred)) :
	        y_pred[i]=str((y_pred[i]))
        # print(y_pred[0])
        # print(type(json.dumps(y_pred[0])))

        x = {'ypred' : y_pred[0],'user':request.user}

        predictionobjserialize=predictionSerializers(data=x)
        if predictionobjserialize.is_valid():
            predictionobjserialize.save()
        

        return Response(y_pred[0])
      
    

