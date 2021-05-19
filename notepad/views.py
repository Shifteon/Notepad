from django import template
from django.http.request import HttpRequest
from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .forms import NewNoteForm
from django.utils import timezone
from .models import Note
import datetime

# Create your views here.
def index(request):
    return HttpRequest("Hi, this is the index page.")

def notes(request):
    if request.method == 'POST':
        form = NewNoteForm(request.POST)
        if form.is_valid():
            note = form.cleaned_data["note"]
            title = form.cleaned_data["title"]
            n = Note()
            n.note_text = note
            n.note_title = title
            n.pub_date = timezone.now()
            n.save()
            notes = Note.objects.all()

            return HttpResponseRedirect('.') 
    else:
        form = NewNoteForm()
        notes = Note.objects.all()
    return render(request, 'notepad/notes.html', {
        'form': form,
        'notes': notes
        })

def deleteNote(request, note_id):
    if request.method == 'POST':
        # Find the note to delete and then delete it
        Note.objects.filter(id=note_id).delete()
        return HttpResponseRedirect('/notepad/notes')

def editNote(request, note_id):
    if request.method == 'POST':
        form = NewNoteForm(request.POST)
        if form.is_valid():
            note = form.cleaned_data["note"]
            title = form.cleaned_data["title"]
            n = Note.objects.get(pk = note_id)
            n.note_text = note
            n.note_title = title
            n.pub_date = timezone.now()
            n.save()

        return HttpResponseRedirect('/notepad/notes')