from django.views import generic
from django.shortcuts import render
from django.http import HttpResponse
from .models import Product

def home(request):
    return render(request, 'core/home.html', context)



def contact(request):
    return HttpResponse('contact')



def about(request):
    return render(request, 'core/about.html')


def blog(request):
     return HttpResponse('blog')
