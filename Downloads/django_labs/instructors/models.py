from django.db import models

# Create your models here.
class Instructor(models.Model):
    name = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)

    def __str__(self):
        return self.name