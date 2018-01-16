'use strict';

const script = process.argv[2];
const path = process.argv[1];
const spawn = require('react-dev-utils/crossSpawn')
const chalk = require('chalk');

switch (script) {
    case '-s':
        console.log(chalk.green.inverse('starting...'));
    case 'start':
        spawn('webpack', ['--config', path + '/webpack.config.js', '-w'], { stdio: 'inherit' });
        break;
    case '-t':
        console.log(chalk.green('testing...'));
    case 'test':
        console.log(chalk.green('tested!'));
        break;
    case '-b':
        console.log(chalk.green.inverse('building...'));
    case 'build':
        spawn('webpack', ['--config', path + '/webpack.config.js', '-p'], { stdio: 'inherit' });        
        console.log(chalk.green.inverse('builded!'));
        break;
    case '-d':
        console.log(chalk.green('deploying...'));
    case 'deploy':
        console.log(chalk.green('deployed!'));
        break;
    default:
        console.log(chalk.red.inverse('There is no script named: "' + script + '"'));
        console.log(chalk.red('Try: [-s]start, [-t]test, [-b]build, [-d]deploy'));
        break;
}