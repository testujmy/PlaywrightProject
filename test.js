//Zadanie 1
var colors = ["niebieski", "różowy", "żółty", "czerwony"];
for (var x = 0; x < colors.length; x++) {
    console.log(colors[x]);
}
//Zadanie 2
var colorsEnum;
(function (colorsEnum) {
    colorsEnum["blue"] = "niebieski";
    colorsEnum["green"] = "zielony";
    colorsEnum["red"] = "czerwony";
})(colorsEnum || (colorsEnum = {}));
console.log(colorsEnum.green);
console.log(colorsEnum.red);
