// const chalk = require('chalk')

import color from 'chalk';
import {passed, failed, flaky} from './constants.js'
import testsList from "./testTitles.js";

console.log(color.blue('Test run has finished'));
console.log(color.green('Passed: ', passed));
console.log(color.red('Failed:', failed));
console.log(color.yellow('Flaky: ', flaky));
console.log(testsList.test1)
console.log(testsList.test2)



// import * as stats from './constants.js'
//
// console.log(color.blue('Test run has finished'));
// console.log(color.green('Passed: ', stats.passed));
// console.log(color.red('Failed:', stats.failed));
// console.log(color.yellow('Flaky: ', stats.flaky));


