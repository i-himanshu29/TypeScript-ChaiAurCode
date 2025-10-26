var score = 33;
score = 44;
score = "55";
var himanshu = { name: "himanshu", id: 334 };
himanshu = { username: "him", id: 334 };
function getDbId(id) {
    // making some API calls
    console.log("DB id is:".concat(id));
}
getDbId(3);
getDbId("3");
function getDbIdA(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// arrays ------------------
// const data:number[]=[1,2,3]
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
