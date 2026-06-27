
type Student = [name: string, score: number];


const students: Student[] = [
  ["Alice", 92],
  ["Bob", 75],
  ["Charlie", 58],
  ["Diana", 88],
  ["Eve", 45],
];


function getGrade(score: number): string {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}


for (const [name, score] of students) {
  const grade = getGrade(score);
  console.log(`${name} received ${score} and grade ${grade}`);
}