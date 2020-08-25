function formatString(string, maxLength = 40) {
  // Write code under this line
  if (string.length < maxLength) {
    return string;
  }
  if (string.length > maxLength) {
    return string.slice(0, -(string.length - maxLength)) + "...";
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'

// TODO: 2 variant
function formatString(string, maxLength = 40) {
  // Write code under this line
  const stringLength = string.split("");
  if (stringLength.length > maxLength) {
    stringLength.length = maxLength;
    return stringLength.join("") + "...";
  } else if (
    (stringLength.length = maxLength || stringLength.length < maxLength)
  ) {
    return stringLength.join("");
  }
}
