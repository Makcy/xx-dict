const ora = require('ora');
const cliSpinners = require('cli-spinners');
const spinner = ora(cliSpinners.dots.frames);

function lookup() {
  // setTimeout(() => {
  //   spinner.color = 'red';
  //   spinner.text = 'Hello World';
  // }, 10)

  console.log(spinner)
}
module.exports = lookup;
