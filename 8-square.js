const arg = parseInt(process.argv[2]);

if (isNaN(arg) || arg < 0) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  while (i < arg) {
    console.log('C is fun');
    i++;
  }
}
