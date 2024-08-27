// This is a JavaScript file
document.getElementById("demo_display").innerHTML = "Hello JavaScript!";

//recap of variables and operators
var x = 5;
var y = 6;
var z = x + y;
// document.getElementById("demo_display").innerHTML += "<br>Value of Z :"+z;
var a = x - y;
// document.getElementById("demo_display").innerHTML += "<br>Value of A :"+a;
var b = x * y;
// document.getElementById("demo_display").innerHTML += "<br>Value of B :"+b;
var c = x / y;
// document.getElementById("demo_display").innerHTML += "<br>Value of C :"+c;
var d = x % y;
// document.getElementById("demo_display").innerHTML += "<br>Value of D :"+d;
var e = x ** y;
// document.getElementById("demo_display").innerHTML += "<br>Value of E :"+e;

// how to use Math object
var f = Math.pow(x,y); //power of x to y
// document.getElementById("demo_display").innerHTML += "<br>Value of F :"+f;
var g = Math.sqrt(x); //square root of x
// document.getElementById("demo_display").innerHTML += "<br>Value of G :"+g;
var h = Math.abs(-5); //absolute value of -5
// document.getElementById("demo_display").innerHTML += "<br>Value of H :"+h;
var i = Math.round(4.7); //round off 4.7
// document.getElementById("demo_display").innerHTML += "<br>Value of I :"+i;
var j = Math.ceil(4.4); //round up 4.4
// document.getElementById("demo_display").innerHTML += "<br>Value of J :"+j;
var k = Math.floor(4.7); //round down 4.7
// document.getElementById("demo_display").innerHTML += "<br>Value of K :"+k;
var l = Math.min(0, 150, 30, 20, -8, -200); //find minimum value
// document.getElementById("demo_display").innerHTML += "<br>Value of L :"+l;
var m = Math.max(0, 150, 30, 20, -8, -200); //find maximum value
// document.getElementById("demo_display").innerHTML += "<br>Value of M :"+m;
var n = Math.random(); //generate random number
// document.getElementById("demo_display").innerHTML += "<br>Value of N :"+n;
var o = Math.floor(Math.random() * 11); //generate random number between 0 and 10
// document.getElementById("demo_display").innerHTML += "<br>Value of O :"+o;


function myFunction() {
    let x_value = document.querySelector("#input_X").value;
    let y_value = document.querySelector("#input_Y").value;

    let z= parseInt(x_value) + parseInt(y_value);

    document.getElementById("demo_display").innerHTML = "Sum of x and y is : "+z;
}