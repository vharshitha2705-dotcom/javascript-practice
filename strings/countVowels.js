let name = "Javascript";
let stringLength = name.length;
let vowelsCount = 0;
let i;

for(i=stringLength-1;i>=0;i--){
    extractedChar = name.charAt(i);
    if(extractedChar == 'a' || extractedChar == 'A' || extractedChar == 'e' || extractedChar == 'E' || extractedChar == 'i' || extractedChar == 'I' || extractedChar == 'o' || extractedChar == 'O' || extractedChar == 'u' || extractedChar == 'U'){
        vowelsCount = vowelsCount + 1;
    }

}

console.log("Vowels Count in " + name + " is " + vowelsCount);