function spinalCase(str) {
    let result = str.replace(/\s+|_+/g, '-').toLowerCase();
    return result;
}
console.log(
  spinalCase('This Is Spinal Tap')
);