type Book = [title: string, isBorrowed: boolean];


const library: Book[] = [
  ["The Great Gatsby", true],
  ["To Kill a Mockingbird", false],
  ["1984", true],
  ["Pride and Prejudice", false],
  ["The Catcher in the Rye", false],
];


let totalAvailable = 0;
let totalBorrowed = 0;

for (const [title, isBorrowed] of library) {
  if (isBorrowed) {
    console.log(`${title} - Status: Borrowed`);
    totalBorrowed++;
  } else {
    console.log(`${title} - Status: Available`);
    totalAvailable++;
  }
}


console.log(`Total Available Books: ${totalAvailable}`);
console.log(`Total Borrowed Books: ${totalBorrowed}`);