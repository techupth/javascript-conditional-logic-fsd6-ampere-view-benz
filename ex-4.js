//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
lightBulbStatus = "Broken";
switch (lightBulbStatus === "Broken") {
  case "Broken":
    console.log("Light bulb is Broken.");
    break;
  default:
    console.log("Please choose the correct input (On/Off/Broken)");
}
