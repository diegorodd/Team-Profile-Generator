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
       .then()
   }
