from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

# Create your views here.
def register(request):
    """
    View to register a new user
    """
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            # Create a message that their account was created
            username = form.cleaned_data['username']
            messages.success(request, f'Account created for {username}! Please login')
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', {'form': form})

def user(request):
    return render(request, 'users/user.html')