from django.urls import path
from . import views

app = 'notepad'
urlpatterns = [
    path('', views.index, name='index'),
    path('notes/', views.notes, name='notes'),
    path('notes/delete/<int:note_id>', views.deleteNote, name='delete'),
    path('notes/edit/<int:note_id>', views.editNote, name='edit')
]