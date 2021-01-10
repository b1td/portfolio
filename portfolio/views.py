from django.shortcuts import render
from .models import *
from order.models import *
from order.forms import *

def projectList(request):
    projects = Project.objects.published()

    context = {
        'projects': projects,
        }
#    return render(request, 'portfolio.html', context)
    return {"project_list": projects}
