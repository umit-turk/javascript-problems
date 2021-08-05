let names = [
  "smith, james",
  "Peterson, Alyssa",
  "Johnson, Lynette",
  "Lopez, Tony",
];

let newNames = names.map((name) => {
    return name.replace(/(\w+), (\w+)/, "$2 $1");
} )