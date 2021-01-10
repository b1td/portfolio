# Generated by Django 3.1 on 2020-08-24 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('phone', models.CharField(max_length=30)),
                ('email', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField(blank=True, null=True, verbose_name='Description')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
    ]