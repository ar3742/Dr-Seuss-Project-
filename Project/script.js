// Code goes here
//change text color on click
function changecolor(element){
    if (element.innerHTML == "am"){
        element.innerHTML = "am";
        element.style.color = "green";
    } else {
        element.innerHTML = "am";
        element.style.color = "red";
    }
    return false;
}



//___________________________________________
//___________________________________________
//change illustrations
//FOR ONE IMAGE- save incase necessary
//function changeImage() {
//var imgEl = document.querySelector('#whitespace');
//imgEl.src = "http://images.clipartpanda.com/green-eggs-and-ham-clip-art-suess.jpg";
//}

//code tried for array--was not working
//var images = ['http://images.clipartpanda.com/green-eggs-and-ham-clip-art-suess.jpg', 'https://userscontent2.emaze.com/images/bc35f5b9-31f4-49a9-9611-03be248393c2/702c55698967f5a6d6f8c7d9deacfb41.jpg', 'http://ww2.valdosta.edu/~mbsecor/DRSEUSSY.bmp'],
//i = 1;
//document.getElementById('#whitespace').addEventListener('click', function() {
//this.src = images[i >= images.length - 1 ? i = 0 : ++i];
//}, false);

//FOR MULTIPLE IMAGES--works!
function changeImage() {
  var imgEl = document.querySelector('#whitespace');
  var random = Math.floor(Math.random() * 4);
  if (random === 0) {
    imgEl.src = "http://images.clipartpanda.com/green-eggs-and-ham-clip-art-suess.jpg";
  } else if (random === 1) {
    imgEl.src = "https://userscontent2.emaze.com/images/bc35f5b9-31f4-49a9-9611-03be248393c2/702c55698967f5a6d6f8c7d9deacfb41.jpg";
  } else if (random === 2) {
    imgEl.src = "http://ww2.valdosta.edu/~mbsecor/DRSEUSSY.bmp";
  } else {
    imgEl.src = "https://s-media-cache-ak0.pinimg.com/originals/23/fa/f3/23faf3d130f2dc0f70eaa2ef530cc0fc.jpg";
  }
}
//___________________________________________________
//___________________________________________________
//automated response to submit

function ShowMessage() {
                var result = confirm("You're off to Great Places, Today is Your Day! We can't wait to read your story!");
                if (result) {
                    return true;
                } else {
                    return false;
                }
            }



