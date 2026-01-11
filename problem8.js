// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");

  let result = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return result.join(" ");
}

console.log(capitalizeWords("hello world")); // Hello World
