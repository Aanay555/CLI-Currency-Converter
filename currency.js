#! /usr/bin/env node
//PROJECT NAME (Currency Converter)
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    CNY: 6.96,
    EUR: 0.91,
    JPY: 113.5,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "CNY", "EUR", "JPY", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "CNY", "EUR", "JPY", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your amount",
        type: "number"
    },
]);
let FromAmount = currency[user_input.from]; // exchange rate
let ToAmount = currency[user_input.to];
let Amount = user_input.amount;
let BaseAmount = Amount / FromAmount;
let result = Math.round(BaseAmount * ToAmount);
console.log(chalk.yellow.bold(`\n******\tYour Converted Amount is = ${result}\t******`));
