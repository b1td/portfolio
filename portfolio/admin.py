from django.contrib import admin
from django.contrib.admin.models import LogEntry

from imagekit.admin import AdminThumbnail
from .models import *

# Register your models here.
class LogEntryAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'action_time', 'user', 'content_type', 'object_id', 'object_repr', 'action_flag', 'change_message')
    list_filter = ('content_type',)
    search_fields = ['user__username', 'object_repr', 'object_id']
    date_hierarchy = 'action_time'


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ['title']

    class Meta:
        model = Category


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    fields = ('title', 'slug', 'category', 
              'image', 'admin_thumbnail', 'published', 'link')
    #form = ProdForm
    admin_thumbnail = AdminThumbnail(image_field='image_thumbnail')
    readonly_fields = ['admin_thumbnail']
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
        model = Project


admin.site.register(LogEntry, LogEntryAdmin)

