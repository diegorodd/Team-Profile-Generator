const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-Template');
const fs = require('fs');

const employeesArray = [];

const promptManagerInfo = () => {
    return inquirer.prompt([
        {
            //  name miguel
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",

            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("please enter the teams manager's name");
                }
            }
        },
        {
            // id 1
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?",

            validate: managerIdInput => {
                if (managerIdInput){
                    return true;
                } else {
                    console.log("please enter the team manager ID");

                }
            }

        },
        {
            // dieegoa@icloud.com
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email",   

            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("please enter the team managers email");
                }
            }
        },
        {
            // 2
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office #?",  

            validate: managerOfficeInput => {
                if (managerOfficeInput) {
                    return true;
                } else {
                    console.log("please enter the team managers offcie #");
                }
            }
        },
    ])
}


   const promptTeamChoices = () => {
       inquirer.prompt({
           type: 'list',
           name: 'teamChoices',
           message: 'which type of team member would you like to add',
           choices: ['engineer', 'Intern', 'None']
       })
       .then(({ teamChoices }) => {
        if (teamChoices === "Engineer") {
            inquirer.prompt([
                {    
                    // david
                    type: 'input',
                    name: 'engineerName',
                    message: "What is your engineer's name?",
                    validate: engineerNameInput => {
                        if (engineerNameInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's name!");
                        }
                    }
                },
                {    
                    // 02
                    type: 'input',
                    name: 'engineerId',
                    message: "What is your engineer's ID?",
                    validate: engineerIdInput => {
                        if (engineerIdInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's ID");
                        }
                    }
                },
                {    
                    // dieegoa@icloud.com
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is your engineer's email?",
                    validate: engineerEmailInput => {
                        if (enginereEmailInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's email");
                        }
                    }
                },
                {    
                    // diegorodd
                    type: 'input',
                    name: 'engineerGithub',
                    message: "What is your engineer's github?",
                    validate: engineerGithubInput => {
                        if (engineerGithubInput) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's Github");
                        }
                    }
                }
            ])

            .then((data) => {
                const newEngineer = new Engineer(data.engName, data.engId, data.engEmail, data.engGithub);
                employeesArray.push(newEngineer);
                promptTeamChoices();
            });
        } else if (teamChoices === "Intern") {
            inquirer.prompt([
                {     //christian
                    type: 'input',
                    name: 'intName',
                    message: "What is your intern's name?",
                   
                    validate: intNameInput => {
                        if (intNameInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's name!");
                        }
                    }
                },
                {       //03
                    type: 'input',
                    name: 'intId',
                    message: "What is your intern's ID?",
                   
                    validate: intIdInput => {
                        if (intIdInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's ID!");
                        }
                    }
                },
                {        //dieegoa@icloud.com
                    type: 'input',
                    name: 'intEmail',
                    message: "What is your intern's email?",
                   
                    validate: intEmailInput => {
                        if (intEmailInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's email address!");
                        }
                    }
                },
                {        //uncc
                    type: 'input',
                    name: 'intSchool',
                    message: "What school does your intern go to?",
                    
                    validate: intSchoolInput => {
                        if (intSchoolInput) {
                            return true;
                        } else {
                            console.log("Please enter your intern's school!");
                        }
                    }
                }
            ])

            .then((data) => {
                const newIntern = new Intern(data.intName, data.intId, data.intEmail, data.intSchool);
                employeesArray.push(newIntern);
                promptTeamChoices();
            });
        } else {
            
            const myPage = generatePage(employeesArray);
            writeFile(myPage)
            .then(writeFileResponse => {
                console.log(writeFileResponse.message);
                return;
            })
            .catch(err => {
                console.log(err);
                return;
            });
        }
    });
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: `
HTML file created! 
`
            });   
        });
    });
};


init();