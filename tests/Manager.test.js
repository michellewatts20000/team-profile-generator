const Manager = require("../lib/Manager");

test("Can set office number via constructor", () => {
    const man = new Manager('Simon Smith', '32', 'ssmith@gmail.com', '0452210917');
    expect(man.officeNumber).toBe('0452210917');
});

test("getRole() should return “Manager”", () => {
    const man = new Manager('Simon Smith', '54', 'ssmith@gmail.com');
    expect(man.getRole()).toEqual(expect.stringContaining('Manager'));
  });

  test("Can get office number via getPhone()", () => {
    const man = new Manager('Simon Smith', '54', 'ssmith@gmail.com', '0452210917');
    expect(man.getPhone()).toEqual(expect.stringContaining('0452210917'));
  });


