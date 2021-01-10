from django.urls import path
from main import views

from django.contrib.flatpages.sitemaps import FlatPageSitemap
from django.contrib.sitemaps.views import sitemap
from django.contrib.sitemaps import GenericSitemap


sitemaps = {
    'flatpages': FlatPageSitemap,
}



urlpatterns = [
    path("robots.txt", views.robots_txt),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap')
]


