function findLongestWord(string = "") {
  const words = string.trim().split(/\W+/);
  let longestWord = [0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  // TODO: виводиться найдовше слово в речені. та виводить їх всіх з великої літери
  // return (longestWord = longestWord.slice(0).toUpperCase());
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
