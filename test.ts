//Zadanie 1
let colors: string[] = ["niebieski", "różowy", "żółty", "czerwony"];

for(let x = 0; x < colors.length; x++) {
  console.log(colors[x]);
}

//Zadanie 2
enum colorsEnum {
  "blue" = "niebieski",
  "green" = "zielony",
  "red" = "czerwony"
}

console.log(colorsEnum.green);
console.log(colorsEnum.red);