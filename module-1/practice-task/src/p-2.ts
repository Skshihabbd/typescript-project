function data(
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
): { name: string; age: number; role?: string } {
  return { name, age, role };
}
const output = data("shihab", 23, "user");
console.log(output);
