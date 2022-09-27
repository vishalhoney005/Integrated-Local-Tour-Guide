from django.urls import path
from . import views

urlpatterns = [
    path('api/login/', views.login, name='login'),
    path('api/signup/', views.signup, name='signup'),
    path('api/place/:id', views.place, name='place'),
    path('api/place/all', views.getplaces, name='places'),
    path('api/view/place', views.viewplaces, name='places')

    
]
