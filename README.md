# Overview

Notepad is a simple web app for creating and storing notes. It also contains support for multiple users.

I hope to create a fun and easy note taking experience that can be accessed anywhere.

To run this project on your own machine follow these instructions:
1. Install Python on your machine
2. Run ```pip install django``` (You may need to specify pip version ie. "pip3" if using pip 3)
3. Download the project files
4. Open up your command prompt in the directory you downloaded the files
5. Run ```python manage.py makemigrations``` (You may need to specify python version ie. "python3" if using Python 3)
6. Run ```python manage.py migrate```
7. Run ```python manage.py runserver```
(It should look similar to this)
```
System check identified no issues (0 silenced).
May 20, 2021 - 19:23:40
Django version 3.2.2, using settings 'module2.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```
8. Open the provided link in your web browser

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

This application has two main pages. The notes page and the user page. It also contains pages for
registering, logging in, and logging out, but these are inconsequential.

The notes page is a collection of all the user's current notes. Each note is pulled from a database which contains the notes title, content, and publish date.

The user page is meant for the user to manage their account. Right now, it simply displays the current user.

# Development Environment

* Django
* Visual Studio Code
* Google Chrome
* Python
* JavaScript
* HTML
* CSS
* Django auth forms

# Useful Websites

* [Django Docs](https://docs.djangoproject.com/en/3.2/)
* [w3Schools JavaScript](https://www.w3schools.com/js/default.asp)

# Future Work

* Add better user support (Functional user page)
* Expand note features (Images, click to edit (no popup edit form))
* Collaborative features
