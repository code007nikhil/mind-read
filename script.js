var btn = document.querySelector(".mainbtn");
var notbtn = document.querySelector(".notbtn");
var text = document.querySelector(".commands");
var emoji = document.querySelector(".emojii");

function generateEvenNumber() {
    let number = Math.floor(Math.random() * 15) * 2; 
    return number;
}

var addnumber = generateEvenNumber();
var cmd = 0;

btn.addEventListener("click", () => {
    if (cmd === 0) {   
        emoji.setAttribute("src" , "images/2.png");
        text.textContent = "Now double the number you've chosen.";
        btn.textContent = "Done";
        cmd = 1;
    } else if (cmd === 1) {
        emoji.setAttribute("src" , "images/3.png");
        text.textContent = `Now add ${addnumber} to your chosen number.`;
        btn.textContent = "Done";
        cmd = 2;
    } else if (cmd === 2) {
        emoji.setAttribute("src" , "images/1.png");
        text.textContent = "Now halve the total value.";
        btn.textContent = "Done";
        cmd = 3;
    } else if (cmd === 3) {
        emoji.setAttribute("src" , "images/3.png");
        text.textContent = "Now subtract your chosen number from the value.";
        btn.textContent = "Done";
        cmd = 4;
    } else if (cmd === 4) {
        emoji.setAttribute("src" , "images/5.png");
        text.textContent = `Right now, the number in your mind is ${addnumber/2}.`;
        btn.textContent = "Yes";
        notbtn.style.display = 'block';
        cmd = 5;
    } else if (cmd === 5) {
        emoji.setAttribute("src" , "images/6.png");
        text.textContent = `Hahahah, I think I've read your mind.`;
        btn.textContent = "Play again";
        cmd = 6;
        notbtn.style.display = "none";
    } else if (cmd === 6) {
        location.reload();
    }
});

var cmd2 = 0;
notbtn.addEventListener("click", function() {
    if (cmd2 === 0) {
        emoji.setAttribute("src" , "images/4.png");
        text.textContent = "I think your calculation is incorrect.";
        notbtn.innerHTML = `Play again`;
        btn.style.display = "none";
        cmd2 = 1;
    } else if (cmd2 === 1) {
        location.reload();
    }
});
