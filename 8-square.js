const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}

node 8-square.js
# Missing size

node 8-square.js School
# Missing size

node 8-square.js 2
# XX
# XX

node 8-square.js 6
# XXXXXX
# XXXXXX
# XXXXXX
# XXXXXX
# XXXXXX
# XXXXXX

node 8-square.js -3
# (prints nothing — accepted)
