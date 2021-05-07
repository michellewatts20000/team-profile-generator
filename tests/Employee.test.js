const Employee = require("../lib/Employee");
test("Can instantiate Employee instance", () => {
  const eng = new Employee();
  expect(typeof (eng)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const emp = new Employee('Simon Smith');
  expect(emp.getName()).toEqual(expect.stringContaining('Simon Smith'));
});


test("Can set ID via constructor arguments", () => {
  const emp = new Employee('Simon Smith', '54');
  expect(emp.getId()).toEqual(expect.stringContaining('54'));
});


test("Can set email via constructor arguments", () => {
  const emp = new Employee('Simon Smith', '54', 'ssmith@gmail.com');
  expect(emp.getEmail()).toEqual(expect.stringContaining('ssmith@gmail.com'));
});


test("Can get name via getName()", () => {
  const emp = new Employee('Simon Smith', '54', 'ssmith@gmail.com');
  expect(emp.getName()).toEqual(expect.stringContaining(emp.name));
});

test("Can get name via getId()", () => {
  const emp = new Employee('Simon Smith', '54', 'ssmith@gmail.com');
  expect(emp.getId()).toEqual(expect.stringContaining(emp.id));
});


test("Can get name via getEmail()", () => {
  const emp = new Employee('Simon Smith', '54', 'ssmith@gmail.com');
  expect(emp.getEmail()).toEqual(expect.stringContaining(emp.email));
});


test("getRole() should return “Employee”", () => {
  const emp = new Employee('Simon Smith', '54', 'ssmith@gmail.com');
  expect(emp.getRole()).toBe('Employee');
});








