// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;
// if(seat === AISLE){
// }
var seatChoice;
(function (seatChoice) {
    // AISLE = 10,
    // MIDDLE = 22,
    // WINDOW,
    // FOURTH = 44
    //or 
    // AISLE = "aisle",
    // MIDDLE = "middle",
    // WINDOW = "window",
    // FOURTH = 0
    seatChoice["AISLE"] = "aisle";
    seatChoice[seatChoice["MIDDLE"] = 3] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 4] = "WINDOW";
    seatChoice[seatChoice["FOURTH"] = 5] = "FOURTH";
})(seatChoice || (seatChoice = {}));
var himSeat = seatChoice.AISLE;
