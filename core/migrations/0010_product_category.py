# Generated by Django 3.1.5 on 2021-02-13 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_auto_20210213_1426'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(default='Products', max_length=300),
        ),
    ]
