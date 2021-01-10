from django.shortcuts import render, get_object_or_404
from .models import *
from order.models import *
from order.forms import *

def postList(request):
    posts = Post.objects.published().order_by("-id")

    context = {
        'posts': posts,
        }
    return render(request, 'blog-list.html', context)


def postDetail(request, post_id, slug):
    posts = Post.objects.published()
    post = get_object_or_404(posts, id=post_id, slug=slug)
    categories = Category.objects.all()


    context = {
        'posts': posts,
        'post': post,
        'categories': categories,
        }
    return render(request, 'blog-post.html', context)

