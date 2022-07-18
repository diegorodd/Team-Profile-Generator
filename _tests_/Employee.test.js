const Employee = require('../lib/Employee');
     
     test('creates an employee object', () => {
         const employee = new Employee('miguel', '1', 'dieegoa@icloud.com');
     
         expect(employee.name).toBe('miguel');
         expect(employee.id).toBe('1');
         expect(employee.email).toBe('dieegoa@icloud.com');
     });
     
     test("gets employee's name", () => {
         const employee = new Employee('miguel');
     
         expect(employee.getName()).toBe('miguel');
     });
     
     test("gets employee's id", () => {
         const employee = new Employee('miguel', '1', 'dieegoa@icloud.com');
     
         expect(employee.getId()).toBe('1');
     });
     
     test("gets employee's email", () => {
         const employee = new Employee('miguel', '1', 'dieegoa@icloud.com');
     
         expect(employee.getEmail()).toBe('dieegoa@icloud.com');
     });
     
     test("gets employee's role", () => {
         const employee = new Employee('miguel', '1', 'dieegoa@icloud.com');
     
         expect(employee.getRole()).toBe('Employee');
     });