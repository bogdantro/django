from django.conf import settings
from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=300)
    category = models.CharField(max_length=300, default='Products', blank=False)
    price = models.FloatField(max_length=300, default=0)
    slug = models.SlugField(max_length=150)
    description = models.TextField()
    image = models.ImageField(blank=True)

    def __str__(self):
        return self.name

    
  