// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

window.onkeydown = function(e) {
    console.log(e.button);  //<- Error
};

// window.onmousedown = function(mouseEvent: any) {
//     console.log(mouseEvent.button);  //<- Now, no error is given
// };