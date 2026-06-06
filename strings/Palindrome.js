let name = "dad";
let stringLength = name.length;
let reverseString = "";
let i;

for(i=stringLength-1;i>=0;i--){
    extractedChar = name.charAt(i);
    reverseString = reverseString+extractedChar;
}

console.log(reverseString);

if ( name === reverseString ){
    console.log(name + " is a palindrome");
}else{
    console.log(name + " is not a palindrome");
}