"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.flatpages import views


urlpatterns = [
    # path('', include(('portfolio.urls', 'portfolio'), namespace = 'portfolio')),
    # path('', include(('order.urls', 'order'), namespace = 'order')),
    path('cp/', admin.site.urls),
    re_path(r'^(?P<url>.*)$/', views.flatpage),
    path('', include(('main.urls', 'main'), namespace = 'main')),
    path('', include(('portfolio.urls', 'portfolio'), namespace = 'portfolio')),
    path('', include(('order.urls', 'order'), namespace = 'order')),
    path('summernote/', include('django_summernote.urls')),
]


admin.site.site_header = settings.ADMIN_SITE_HEADER

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
