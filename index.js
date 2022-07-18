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
            // id 12
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
            // b2
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
                    // 01
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
   }
