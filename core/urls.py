from django.urls import path
from django.apps import AppConfig
from .views import home, contact, about, blog

class CoreConfig(AppConfig):
    namespace = 'core'



urlpatterns = [
    path('', home),
    path('home', home),
    path('contact', contact),
    path('about', about),
    path('blog', blog),
]