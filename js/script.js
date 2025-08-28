// Level 2 (completed)

let clear_text = "";
let greeting = " HELLO WORLD!";
let i = 0;
let speed = 80;

function greeting_message() {
    if (i <= clear_text.length) {
        document.getElementById("text__script").innerHTML = clear_text.charAt(i);
        i++;
        setTimeout(greeting_message, speed);
    }

    if (i < greeting.length) {
        document.getElementById("text__script").innerHTML += greeting.charAt(i);
        i++;
        setTimeout(greeting_message, speed);
    }
}

function refresh() {
    location.reload();
}

