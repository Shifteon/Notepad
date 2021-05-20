/**
*   The following is a function to change the header color of all notes to a 
*   random color from the colors array. 
*   Also change the border color of the delete button to the same color
*/
function changeColors() {
    let colors = ['#F25F5C', '#FFE066', '#247BA0', '#70C1B3', '#00A878', '#6DAEDB', '#A09EBB', '#8338EC'];
    let headers = document.querySelectorAll('.card header');
    let deleteBtn = document.querySelectorAll('.note-btn');
    let btnNum = 0;
    for (header of headers) {
        let color = Math.floor(Math.random() * (8 - 0) + 0);
        header.style.backgroundColor = colors[color];
        deleteBtn[btnNum].style.borderColor = colors[color]; // Delete btn
        btnNum++;
        deleteBtn[btnNum].style.borderColor = colors[color]; // Edit btn
        btnNum++;
    }

}

/**
*   The following is a function to display the edit note form
*   when the edit button is cliked. 
*/
function edit() {
    // Display the edit note form when the edit button is pressed
    let editBtn = document.querySelectorAll(".edit-btn");
    let forms = document.querySelectorAll('#edit-form');
    for (btn of editBtn) {
        let note_num = btn.id;
        btn.addEventListener('click', () => {
            forms[note_num].style.display = "block";

            // Close the form when we click off the form
            window.onclick = (event) => {
                if (event.target == forms[note_num]) {
                    forms[note_num].style.display = "none";
                }
            }
        });
    }
}

/**
*   The following is a function to add an id to every edit
*   button so they correspond with the correct note.
*/
function createid() {
    // Add an incremented unique id to every edit button
    // This is so we know which form to display in edit()
    let editBtn = document.querySelectorAll(".edit-btn");
    let btnNum = 0;
    for (btn of editBtn) {
        btn.id = btnNum;
        btnNum++;
    }
}

/**
*   The following is a function to display the new note form
*   when the new note button is cliked.
*/
function createNote() {
    // Code to open up the note creator
    notebtn = document.querySelector('#new-note');
    notebtn.addEventListener('click', () => {
        form = document.querySelector('#new-note-form');
        form.style.display = "block";

        // Lets us close the form
        closebtn = document.querySelector('#close');
        closebtn.addEventListener('click', () => {
            form.style.display = "none";
        });

        // Close the form when we click off the form
        window.onclick = (event) => {
            if (event.target == form) {
                form.style.display = "none";
            }
        }
    });
}

/**
*   The following is a function to prefill the edit form for each note.
*   It uses the values from the note being edited.
*/
function fillEditForm() {
    // Get the forms and the notes
    let forms = document.querySelectorAll('#edit-form form');
    let notes = document.querySelectorAll('.note');
    let num = 0; // The note we are on
    for (form of forms) {
        // These will make it easier to access specific properties
        let title = 4; // The form title input
        let text = 7; // The form text input
        let noteText = 3; // The note's text content
        let noteTitle = 1; // The note's title
        // We need the children
        let formChildren = form.childNodes;
        let noteChildren = notes[num].childNodes;
        // Change the input values
        formChildren[title].value = noteChildren[noteTitle].childNodes[noteTitle].innerText;
        formChildren[text].value = noteChildren[noteText].innerText;
        num++;
    }
}

/**
*   Called when the window is loaded.
*   Basically our 'main' function.
*/
window.addEventListener('load', () => {
    createNote();
    createid();
    edit();
    fillEditForm();
    changeColors();
});