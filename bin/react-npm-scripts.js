'use strict';

const script = process.argv[2];
const path = process.argv[1];
const spawn = require('cross-spawn');
const chalk = require('chalk');

switch (script) {
    case '-s':
    case 'start':
        console.log(chalk.green.inverse('starting...'));
        spawn('webpack', ['--config', path + '/webpack.config.js', '-w'], { stdio: 'inherit' });
        break;
    case '-t':
        console.log(chalk.green('testing...'));
    case 'test':
        break;
    case '-b':
        console.log(chalk.green.inverse('building...'));
        spawn('webpack', ['--config', path + '/webpack.config.js', '-p'], { stdio: 'inherit' });        
    case 'build':
        break;
    case '-d':
        console.log(chalk.green('deploying...'));
    case 'deploy':
        break;
    default:
        console.log(chalk.red.inverse('There is no script named: "' + script + '"'));
        console.log(chalk.red('Try: [-s]start, [-t]test, [-b]build, [-d]deploy'));
        break;
}