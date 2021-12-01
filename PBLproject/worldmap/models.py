from django.db import models

# Create your models here.

class todouhuken(models.Model):
    id = models.TextField(null=False, blank=False, primary_key=True)