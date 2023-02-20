// left side bar

let tasks = 0 , index = 0;

function CreateNote(text){

    // make a note
    let note = document.createElement("div"); // parent div
    note.id = `note${index}`;
    index++;
    note.classList.add("note");
    
    // date 
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let Note_date = document.createElement("div"); //div child 1
    Note_date.id = "note_date";
    Note_date.innerHTML = `${day}/${month} <br> ${hour}:${minutes}:${seconds}`;

    // content of the text 
    let noteText = document.createElement("div");
    noteText.id = "content_note";
    noteText.innerHTML = text;

    // check box

    let checkBox = document.createElement("div");
    checkBox.id = "check_box";
    checkBox.innerHTML = '<i class="fa-solid fa-square-check"></i>';

    note.appendChild(Note_date);
    note.appendChild(noteText);
    note.appendChild(checkBox);
    tasks += 1;
    document.getElementById("tasks").innerHTML = `${tasks} tasks`;

    return note ;
}

// left bar

document.getElementById("left_bar_icon").onclick = () => {
    document.getElementById("left_bar").classList.toggle("active");
}

document.getElementById("close_left_bar").onclick = () =>{
    document.getElementById("left_bar").classList.toggle("active");
}

// date

function GetDate(){
    const time = new Date();
    const day = time.getDate() ;
    const month = time.getMonth() + 1;

    const Months = {
        1:"January",
        2:"February",
        3:"March",
        4:"April" ,
        5:"May",
        6:"June",
        7:"July",
        8:"August",
        9:"September",
        10:"October" ,
        11:"November",
        12:"December"
    };

    let result = Months[month] ?? 'Unknown';
    document.getElementById("the_date").innerHTML = `${day}.${result} `;
}

GetDate()
// right side bar 

document.getElementById("right_bar_icon").onclick = () => {
    document.getElementById("right_bar").classList.toggle("active");
}

document.getElementById("close_right_bar").onclick = () =>{
    document.getElementById("right_bar").classList.toggle("active");
}

document.getElementById("add_icon").onclick = () => {
    document.getElementById("inputs").classList.add("input_on");
    document.getElementById("inputs").classList.remove("input_off");

    document.getElementById("done").onclick = () => {

        document.getElementById("inputs").classList.remove("input_on");
        document.getElementById("inputs").classList.add("input_off");

        let text = document.getElementById("text").value ;

        document.getElementById("text").value = "";

        if( text != '' ){
            let note = CreateNote(text);
            document.getElementById("notes").appendChild(note);
        }
    }
}

// Add event listener for deleting notes
document.getElementById("notes").addEventListener("click", (event) => {
    event.target.remove();
    tasks -= 1;
    document.getElementById("tasks").innerHTML = `${tasks} tasks`;
  });