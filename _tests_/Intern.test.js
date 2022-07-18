const Intern = require('../lib/Intern');

     test('creates an intern object', () => {
         const intern = new Intern('miguel', '1', 'dieegoa@icloud.com', 'uncc');
     
         expect(intern.name).toBe('miguel');
         expect(intern.id).toBe('1');
         expect(intern.email).toBe('dieegoa@icloud.com');
         expect(intern.school).toBe('uncc');
     });
     
     test("gets intern's name", () => {
         const intern = new Intern('miguel', '1', 'dieegoa@icloud.com', 'uncc');
     
         expect(intern.getName()).toBe('miguel');
     });
     
     test("gets intern's id", () => {
         const intern = new Intern('miguel', '1', 'dieegoa@icloud.com', 'uncc');
     
         expect(intern.getId()).toBe('1');
     });
     
     test("gets intern's email", () => {
         const intern = new Intern('miguel', '1', 'dieegoa@icloud.com', 'uncc');
     
         expect(intern.getEmail()).toBe('dieegoa@icloud.com');
     });
     
     test("gets intern's role", () => {
         const intern = new Intern('miguel', '1', 'dieegoa@icloud.com', 'uncc');
     
         expect(intern.getRole()).toBe('Intern');
     });
     
     test("gets name of intern's school", () => {
         const intern = new Intern('miguel', '1', 'dieegoa@icloud.com', 'Uncc');
     
         expect(intern.getSchool()).toBe('Uncc');
     });