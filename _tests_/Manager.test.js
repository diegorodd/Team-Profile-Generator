const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('miguel', '1', 'dieegoa@icloud.com', '2');

    expect(manager.name).toBe('miguel');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('dieegoa@icloud.com');
    expect(manager.officeNumber).toBe('2');
});

test("gets manager's name", () => {
    const manager = new Manager('miguel');

    expect(manager.getName()).toBe('miguel');
});

test("gets manager's id", () => {
    const manager = new Manager('miguel', '1', 'dieegoa@icloud.com');

    expect(manager.getId()).toBe('1');
});

test("gets manager's email", () => {
    const manager = new Manager('miguel', '1', 'dieegoa@icloud.com');

    expect(manager.getEmail()).toBe('dieegoa@icloud.com');
});

test("gets manager's role", () => {
    const manager = new Manager('miguel', '1', 'dieegoa@icloud.com');

    expect(manager.getRole()).toBe('Manager');
});
