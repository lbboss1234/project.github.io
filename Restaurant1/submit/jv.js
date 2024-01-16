const appetizers={"falafel":3,"fattoush":4,"frenchfries":2,"hummus":2,"mutabbal":3,"samosa":3,"tabbouleh":4,"warak3nab":5,"":0};
const main={"burger":4,"cheese burger":4,"chicken burger":4,"sandwich":3,"fajita":4,"fish":5,"hot dog":4,"lasagna":5,"suchi":20,"pizza":4,"":0};
const drinks={"cappuccino":3,"coca cola":2,"coffee":2,"hot choclate":3,"ice cream":2,"juice":1,"milkshake":5,"pepsi":2,"":0};
const dessert={"baklawa":20,"cake":12,"cookies":8,"cupcake":4,"paincake":5,"strawberry":4,"oreo crepe":6,"narjila":3,"":0}; 
var prices=0;
var appet=Object.keys(appetizers); // here we take the names of food
var mai=Object.keys(main);
var drin=Object.keys(drinks);
var dess=Object.keys(dessert);

function print(){
  var a,m,dr,de;
  let text="<option>" //since we cannot add html element we add it as a text
  let text2 = "</option>"
for (i=0;i<appet.length;i++){
  a+=text+appet[i]+text2;
  m+=text+mai[i]+text2;
  dr+=text+drin[i]+text2;
  de+=text+dess[i]+text2;
  document.getElementById("api").innerHTML=a;
  document.getElementById("main").innerHTML=m;
  document.getElementById("drinks").innerHTML=dr;
  document.getElementById("dessert").innerHTML=de;
}
document.getElementById("visibl").style.visibility="visible"; //make visible after adding food to menue
}

function newElement() {
var li1 = document.createElement("li"); //create html element called list1 
var li2= document.createElement("li");
var li3= document.createElement("li");
var li4= document.createElement("li");
var element1 = document.getElementById("api").value; //create element which carries the value of chosen food (key) in option in html for each kind
var element2 = document.getElementById("main").value;
var element3 = document.getElementById("drinks").value;
var element4 = document.getElementById("dessert").value;

if (element1!="") { //if food is chosen (for appetizer)
  var a = document.createTextNode(element1); //create text shows the name of food of chosen element 
  li1.appendChild(a); // append it to the list created
  document.getElementById("myUL").appendChild(li1); // append the list to the zone(div) in the html that is corresponded to show the chosen food of different type in the menu
  prices+=appetizers[element1]; // update price for each add by accessing the structure by . or [] here we chose appetizers[element1] which go to appetizers and access the element1 name (key) to get its value
} 
if(element2!="") { //here the element2 is for another type (main food)
  var b = document.createTextNode(element2);
  li2.appendChild(b);
  document.getElementById("myUL").appendChild(li2);
  prices+=main[element2];
    }
if(element3!=""){
  var c = document.createTextNode(element3);
  li3.appendChild(c);
  document.getElementById("myUL").appendChild(li3);
  prices+=drinks[element3];
}
if (element4!=""){
  var d = document.createTextNode(element4);
  li4.appendChild(d);
  document.getElementById("myUL").appendChild(li4); //"myUL" is the div were to show all chosen food types 
  prices+=dessert[element4];
}
var button1=document.createElement("button"); //create an element button in html file 
var button2=document.createElement("button");
var button3=document.createElement("button");
var button4=document.createElement("button");
button1.className="close"; // give them a class to access them all at once 
button1.innerHTML="Remove"; // we write inside the button remove which its the name of its roll
button2.className="close";
button2.innerHTML="Remove";
button3.className="close";
button3.innerHTML="Remove";
button4.className="close";
button4.innerHTML="Remove";
li1.appendChild(button1); //we append the button for each element chosen in the list 
li2.appendChild(button2);
li3.appendChild(button3);
li4.appendChild(button4);
var rmv=document.getElementsByClassName("close"); //we declare a variable by var to manage changes
for (i=0;i<rmv.length;i++){ // the length is the number of food plates chosen (number of buttons which have class "close" which are presented in each plate chosen)
rmv[i].onclick = function() { // for the chosen plate button onclick the function starts
  var div = this.parentElement; //this reffers to the button .parentElement reffers to whom it was appended to which is the chosen food list
  div.style.display = "none"; // we make the list disappear
  var decrease=div.textContent.slice(0,div.textContent.length-6); //here we want to know the element to decrease the price after removing the plate so we apply slice method that takes the length of the list content which is the name of food and (remove word) which is made up of 6 letters we want to take only the name to remove its price
  for (i=0;i<mai.length;i++){ //we search the food to be removed in food types
    if(appet[i]==decrease){
      prices-=appetizers[decrease];
      price(prices); //we update price if found
      break;} // we break the loop if found
    if (mai[i]==decrease){
      prices-=main[decrease];
      price(prices);
      break;}
    if (drin[i]==decrease){
      prices-=drinks[decrease];
      price(prices);
      break;}
    if (dess[i]==decrease){
      prices-=dessert[decrease];
      price(prices); // note that price is another function that displays the price
      break;}
    }
  }
  }
price(prices); }


function price(prices){
  document.getElementById("prices").innerHTML=prices+"$"; 
}

function submit(){
  window.location.reload();//after clicking on submit the page is reloaded as if the plates are submitted
}