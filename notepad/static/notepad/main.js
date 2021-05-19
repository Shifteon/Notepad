function changeColors() {
    // Change the header color of all notes to a random color from the colors array
    // Also change the border color of the delete button to the same color
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

function edit() {
    // Display the edit note form when the edit button is pressed
    let editBtn = document.querySelectorAll(".edit-btn");
    let forms = document.querySelectorAll('.edit-form');
    let p = document.querySelectorAll('.card p');
    let h1 = document.querySelectorAll('.card h1');
    for (btn of editBtn) {
        let note_num = btn.id;
        btn.addEventListener('click', () => {
            forms[note_num].style.display = "block";
            p[note_num].style.display = "none";
            h1[note_num].style.display = "none";
        });
    }
}

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

// Basically the main function
window.addEventListener('load', () => {
    // Code to open up the note creator
    notebtn = document.querySelector('#new-note');
    notebtn.addEventListener('click', () => {
        form = document.querySelector('.note-form');
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
    createid();
    edit();
    changeColors();
});