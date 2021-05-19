from django.db import models

# Create your models here.
class Note(models.Model):
    note_title = models.CharField(max_length=50)
    note_text = models.CharField(max_length=500)
    pub_date = models.DateTimeField()

class User(models.Model):
    pass