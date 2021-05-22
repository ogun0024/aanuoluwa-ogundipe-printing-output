/*
Declare three variables, a and b and c.
If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):
*/

let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\nlet b = 5;\nlet c;\n---------';

output = output + '\na + b = ' + (a + b);
alert(output);

output  = output + '\na - b = ' + (a - b);
alert(output);

output  = output + '\na * b = ' + (a * b);
alert(output);

output  = output + '\na / b = ' + (a / b);
alert(output);

output  = output + '\na % b = ' + (a % b);
alert(output);

output  = output + '\na + = b = '+ (a += b);
alert(output);

output  = output + '\na - = b = '+ (a -= b);
alert(output);

output  = output + '\na * = b = '+ (a *= b);
alert(output);

output  = output + '\na / = b = '+ (a /= b);
alert(output);

output  = output + '\na % = b = '+ (a %= b);
alert(output);

output  = output + '\na = = b: '+ (a == b);
alert(output);

output  = output + '\na ! = b: '+ (a != b);
alert(output);

output  = output + '\na > b: '+ (a > b);
alert(output);

output  = output + '\na < b: '+ (a < b);
alert(output);

output  = output + '\n!a && !c: '+ (!a && !c);
alert(output);

output  = output + '\n!a || !c: '+ (!a || !c);
alert(output);




$first_name = "Aanu ";
$last_name = "Ogundipe. ";
$email = "ogun0024@algonquinlive.com";
$output1 = "My name is ";
$output2 = "You can contact me at ";

alert ($output1 + $first_name + $last_name + $output2 + $email);