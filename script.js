const byteSize = (str) => {
  // write your code herefunction byteSize(str) {
          function byteSize(str) {
    const blob = new Blob([str]); // Create a new Blob object with the input string
    return blob.size; // Return the size of the Blob in bytes
}
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
