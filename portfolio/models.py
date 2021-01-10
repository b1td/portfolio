from django.db import models
from django.urls import reverse
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
# from django.utils.html import format_html



# Модель категории продукта
class Category(models.Model):
    # Название категории  
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, default='' )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ('title',)
        index_together = (('id', 'slug'),)


# Наборы проектов
class ProjectQuerySet(models.QuerySet):
    # Опубликованные проекты
    def published(self):
        return self.filter(published=True)
    # Проекты на главной странице
    # def inCatalog(self):
        # return self.filter(published=True, status=1, payment=False, typeGame__type__name='Account').order_by('type', '-order')

class Project(models.Model):
    title = models.CharField(blank=False, null=False, max_length=255)
    category = models.ManyToManyField(Category, blank = True)
    slug = models.SlugField(max_length=200, default='')
    image = models.ImageField(blank=True, help_text='70x70px', upload_to='images/portfolio/%Y/%m/%d', verbose_name='Image')
    image_thumbnail = ImageSpecField(source='image',
                                      processors=[ResizeToFill(100, 100)],
                                      format='JPEG',
                                      options={'quality': 100})

    description = models.TextField('Description', blank = True, null = True)
    # upload_file = models.FileField(upload_to='uploads/%Y/%m/%d/', blank = True, null= True)
    link = models.URLField(blank = True, null = True)
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, blank = True, null = True)
    updated_at = models.DateTimeField(auto_now=True, blank = True, null = True)
    objects = ProjectQuerySet.as_manager()

    def __str__(self):
        return self.title
    def image_img(self):
        if self.image_thumbnail:
            return format_html('<a href="' + self.image_thumbnail.url + '" target="_blank"><img src="' + self.image_thumbnail.url + '"/></a>')
        else:
            return '(Нет изображения)'
        image_img.short_description = 'Картинка'
        image_img.allow_tags = True
        
    # def get_absolute_url(self):
    #     return reverse('shop:projectDetail', args=[self.slug, self.id_url])

