from django.contrib import admin
from .models import *

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    fields = ('name', 'phone', 'email', 
              'description', 'created_at')
    readonly_fields = ['created_at']
    list_display = ['name',  'phone', 'email', 'description', 'created_at']
    # list_filter = ['game', 'typeGame', 'hot', 'buyNow', 'payment', 'created_date']
    search_fields = ['name', 'phone', 'email']
    #raw_id_fields = ('region',)
    #autocomplete_fields = ['region']
#    ordering = ('-id_url',)

    class Meta:
        model = Order