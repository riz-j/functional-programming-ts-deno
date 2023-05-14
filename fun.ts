const names: string[] = ["Joey", "McCarthy", "O'Neill", "K"];

const lowercase = (input: string): string => input.toLowerCase();
const firstThreeLetters = (input: string): string => input.substring(0,3)
const uppercase = (input: string): string => input.toUpperCase();

const result = names
    .map(firstThreeLetters)
    .map(uppercase)
    .map(lowercase);

console.log(result);