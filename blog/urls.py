from django.urls import path
from blog import views

urlpatterns = [
    path('', views.postList, name='postList'),
    path('<slug:slug>-<int:post_id>/', views.postDetail, name='postDetail'),

]
