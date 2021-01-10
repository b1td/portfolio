from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.order, name='order'),
    path('order/', views.FeedBackView.as_view(), name='feedback'),
    # path('po1/', views.po1, name='feedback')
]