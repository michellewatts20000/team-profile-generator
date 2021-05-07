const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const eng = new Employee();
  expect(typeof (eng)).toBe("object");
});