const Engineer = require("../lib/Engineer");

test("Can set Git Hub account via constructor", () => {
    const eng = new Engineer('Simon Smith', '32', 'ssmith@gmail.com', "simon123");
    expect(eng.github).toBe("simon123");
});

test("getRole() should return “Engineer”", () => {
    const eng = new Engineer('Simon Smith', '54', 'ssmith@gmail.com');
    expect(eng.getRole()).toEqual(expect.stringContaining('Engineer'));
  });

test("Can get GitHub username via getGithub()", () => {
    const eng = new Engineer('Simon Smith', '54', 'ssmith@gmail.com', 'simon123');
  expect(eng.getGithub()).toEqual(expect.stringContaining('simon123'));
});




