//Nick Brazda 2021- custom js
//Subscribe button will change the next on the button from subscribe to subscribed! when a user clicks the button.

// function buttonClick gets the html element by id called "myButton". using innerHTML subscribed will post to the screen
function buttonClick() {
  document.getElementById("myButton").innerHTML = "Subscribed!"
}

// id = not null
let id = 0;
function nicksAnimation() {
  let elem = document.getElementById("myAnimation");
  // switch the number for position and it will make the square start at a certain position if set to 0 it will start top left
  let pos = 50;
  // this clears the previous position of id and allows the square to restart by clicking click me multiple times, without clearInterval(id) the square will not restart
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    // you can edit the pos to change when the square will stop
    if (pos == 150) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}