
//var arr = new Array[];
var arr = [1,2,3,4];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

arr.reverse();
console.log(arr);

arr = arr.map(function(elem){
	elem *= 2;
	return elem;
});

console.log(arr);

arr = arr.map(Math.sqrt);
console.log(arr);

arr = arr.join("|");
console.log(arr);

arr = arr.split("|");
console.log(arr);

arr.push("5");
console.log(arr);

arr.unshift("0");
console.log(arr);

console.log(arr.toString());

var elimine = arr.pop();
console.log(arr,elimine);

arr.splice(1,1,"10","20","30");
console.log(arr);

arr = arr.slice(0,3);
console.log(arr);


var ar = [true,false,true,{
	nombre: "Victor",
	apellido: "Arroyo"
},
function(){
	console.log("Vivo en un arreglo");
},
function(persona){
	console.log(persona.nombre + " " + persona.apellido);
},
[1,2,3,4,5,
	["Victor","Alonso"]
]
];


console.log(ar);
console.log(ar.length);
ar[4]();
ar[5](ar[3]);
console.log(ar[6][3]);
console.log(ar[6][5][1]);

var arreglo2 = ar[6][5];
arreglo2[1] = "Hector";

console.log(arreglo2);

