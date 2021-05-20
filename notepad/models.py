from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Note(models.Model):
    note_title = models.CharField(max_length=50)
    note_text = models.CharField(max_length=500)
    pub_date = models.DateTimeField()
    # Connect notes to a user. Delete all the user's notes when user is deleted.
    user = models.ForeignKey(User, on_delete=models.CASCADE) 