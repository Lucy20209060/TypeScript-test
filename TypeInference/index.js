// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;
var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Error
};
// window.onmousedown = function(mouseEvent: any) {
//     console.log(mouseEvent.button);  //<- Now, no error is given
// };
