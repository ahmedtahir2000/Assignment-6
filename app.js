//Chapter 21-25

/*Question 1 
var firstName=prompt("Enter your first name?", 'First name');
var lastName=prompt("Enter your Last name?", 'Last name');
var fullName=firstName+" "+lastName;
alert("Hello "+fullName);*/

/*Question 2
var phone=prompt("Enter your fav mobile phone model?", 'Samsung S6 Galaxy Edge');
var n=phone.length;
document.write("My favorite phone is: "+phone+"<br>");
document.write("Length of String: "+n);
*/

/*Question 3
var country="Pakistan";
country.indexOf("n")
*/

/*Question 4
var str="Hello World";
var ind=0;
for(i=str.length-1;i>=0;i--){
    if(str[i]=="l"){
        ind=i;
        break;
    }
}
document.write("String: "+str+"<br>");
document.write("Last Index of 'l': "+ind);
*/

/*Question 5
var str="Pakistan";
var ind=str[3];
document.write("String: "+str+"<br>");
document.write("Character at index 3: "+ind);
*/

/*Question 6
var firstName=prompt("Enter your first name?", 'First name');
var lastName=prompt("Enter your Last name?", 'Last name');
var fullName="";


function concat(firstName, lastName){
    fullName=firstName+" "+lastName;
    alert("Hello "+fullName);
}

concat(firstName, lastName);
*/

/*Question 7
var city="Hyderabad";
var rep=city.slice(5,city.length+1);

alert("Islam"+rep);
*/

/*Question 8
var text="Ali and Sami are best friends. They play cricket and football together.";
for(i=0; i<text.length; i++){
    if(text.slice(i,i+3)==="and"){
     text=text.slice(0,i)+"&"+text.slice(i+3)
	}
}

document.write(text);*/

/*Question 8
var text="472";
document.write("Value= "+text+"<br>");
document.write("Type of= "+typeof(text)+"<br>");
var num=Number(text);
document.write("Value= "+num+"<br>");
document.write("Type of= "+typeof(num)+"<br>");

*/


 