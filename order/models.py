from django.db import models


class Order(models.Model):
    name = models.CharField(blank=False, null=False, max_length=255)
    phone = models.CharField(blank=False, null=False, max_length=30)
    email = models.CharField(blank=True, null=True, max_length=255)
    description = models.TextField('Description', blank = True, null = True)
    # upload_file = models.FileField(upload_to='uploads/%Y/%m/%d/', blank = True, null= True)
    created_at = models.DateTimeField(auto_now_add=True, blank = True, null = True)

    def __str__(self):
        return self.name
