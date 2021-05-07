const Intern = require("../lib/Intern");

test("Can set School via constructor", () => {
    const int = new Intern('Simon Smith', '32', 'ssmith@gmail.com', 'Doonside Technology High');
    expect(int.school).toBe('Doonside Technology High');
});

test("getRole() should return “Intern”", () => {
    const int = new Intern('Simon Smith', '54', 'ssmith@gmail.com');
    expect(int.getRole()).toEqual(expect.stringContaining('Intern'));
  });


  test("Can get school via getSchool()", () => {
    const int = new Intern('Simon Smith', '54', 'ssmith@gmail.com', 'Doonside Technology High');
    expect(int.getSchool()).toEqual(expect.stringContaining('Doonside Technology High'));
  });




