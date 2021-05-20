from django import template
from django.http.request import HttpRequest
from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from .forms import NewNoteForm
from django.utils import timezone
from .models import Note

# Create your views here.
def index(request):
    """
    Simple index view
    """
    return HttpRequest("Hi, this is the index page.")

def notes(request):
    """
    View for the note page. 
    Creates the notes and the note form.
    """ 
    notes = Note.objects.all()
    form = NewNoteForm()
    return render(request, 'notepad/notes.html', {
        'form': form,
        'notes': notes
        })

def createNote(request):
    """
    View to create a new note.
    """
    if request.method == 'POST':
        form = NewNoteForm(request.POST)
        if form.is_valid():
            # Get the note content
            note = form.cleaned_data["note"]
            title = form.cleaned_data["title"]
            # Make a note and set the properties
            n = Note()
            n.note_text = note
            n.note_title = title
            n.pub_date = timezone.now()
            n.user = request.user
            n.save()

            return HttpResponseRedirect('/notepad/notes')

def deleteNote(request, note_id):
    """
    View to delete a note
    """
    if request.method == 'POST':
        # Find the note to delete and then delete it
        Note.objects.filter(id=note_id).delete()
        return HttpResponseRedirect('/notepad/notes')

def editNote(request, note_id):
    """
    View for the edit note form
    """
    if request.method == 'POST':
        form = NewNoteForm(request.POST)
        if form.is_valid():
            # Get the note content and title
            note = form.cleaned_data["note"]
            title = form.cleaned_data["title"]
            # Find the right note by id
            n = Note.objects.get(pk = note_id)
            n.note_text = note
            n.note_title = title
            n.pub_date = timezone.now()
            # Save the note
            n.save()

        return HttpResponseRedirect('/notepad/notes')