from django.urls import path
from main import views

from django.contrib.flatpages.sitemaps import FlatPageSitemap
from django.contrib.sitemaps.views import sitemap
from django.contrib.sitemaps import GenericSitemap
from blog.models import Post

post_dict = {
    'queryset': Post.objects.published(),
    'date_field': 'created_at',
}

sitemaps = {
    'flatpages': FlatPageSitemap,
    'blog': GenericSitemap(post_dict, priority=0.6),
}



urlpatterns = [
    path("robots.txt", views.robots_txt),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap')
]


