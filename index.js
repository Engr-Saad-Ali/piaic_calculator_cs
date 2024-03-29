import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Please enter number one"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Please enter number two"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator:"
    },
]);
const { numberone, numbertwo, operator } = answers;
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    else if (operator === "*") {
        result = numberone * numbertwo;
    }
    else if (operator === "/") {
        result = numberone / numbertwo;
    }
    console.log("Your result is", result);
}
else {
    console.log("Plese enter Valid Perator");
}
