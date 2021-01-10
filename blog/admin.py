from django.contrib import admin
from imagekit.admin import AdminThumbnail
from django_summernote.admin import SummernoteModelAdmin
from .models import *


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ['title']

    class Meta:
        model = Category




@admin.register(Post)
#class PostAdmin(admin.ModelAdmin):
class PostAdmin(SummernoteModelAdmin):
    fields = ('title', 'slug', 'meta_title', 'meta_keywords', 'meta_description', 'category', 'short_description', 'description',
              'image', 'admin_thumbnail', 'published', 'link', 'created_at', 'updated_at')
    #form = ProdForm
    summernote_fields = ('short_description', 'description')
    admin_thumbnail = AdminThumbnail(image_field='image_thumbnail')
    readonly_fields = ['admin_thumbnail', 'updated_at']
    #list_editable = ['price']
    list_display = ['title',  'admin_thumbnail', 'published']
    #list_display = ['game', 'num_fixture_metas_count']
    #list_display_links = ['name', 'game']
    # list_filter = ['game', 'typeGame', 'hot', 'buyNow', 'payment', 'created_date']
    search_fields = ['title']
    filter_horizontal = ('category',)
    #raw_id_fields = ('region',)
    prepopulated_fields = {'slug': ('title',)}
    #autocomplete_fields = ['region']
#    ordering = ('-id_url',)

    class Meta:
        model = Post
