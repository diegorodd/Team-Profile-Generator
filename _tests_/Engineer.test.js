const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('miguel', '1', 'dieegoa@icloud.com', 'diegorodd');

    expect(engineer.name).toBe('miguel');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('dieegoa@icloud.com');
    expect(engineer.github).toBe('diegorodd');
});

test("gets engineer's name", () => {
    const engineer = new Engineer('miguel', '1', 'dieegoa@icloud.com', 'diegorodd');

    expect(engineer.getName()).toBe('miguel');
});

test("gets engineer's id", () => {
    const engineer = new Engineer('miguel', '1', 'dieegoa@icloud.com', 'diegorodd');

    expect(engineer.getId()).toBe('1');
});

test("gets engineer's email", () => {
    const engineer = new Engineer('miguel', '1', 'dieegoa@icloud.com', 'diegorodd');

    expect(engineer.getEmail()).toBe('dieegoa@icloud.com');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('miguel', '1', 'dieegoa@icloud.com', 'diegorodd');

    expect(engineer.getRole()).toBe('Engineer');
});

test("gets engineer's github username", () => {
    const engineer = new Engineer('miguel', '1', 'dieegoa@icloud.com', 'diegorodd');

    expect(engineer.getGithub()).toBe('diegorodd');
});