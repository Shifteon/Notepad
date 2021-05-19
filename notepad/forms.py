from django import forms

class NewNoteForm(forms.Form):
    title = forms.CharField(label='Title', max_length=50)
    note = forms.CharField(label='Note', max_length=500, widget=forms.Textarea)