let skill = "JavaScript";
let stringLength = skill.length;
let reverseString = "";
let i;

for(i=stringLength-1;i>=0;i--){
    extractedChar = skill.charAt(i);
    reverseString = reverseString+extractedChar;
}

console.log(reverseString);