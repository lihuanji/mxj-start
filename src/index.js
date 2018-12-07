const shell = require('shelljs');
const chalk = require('chalk');

async function init(argv) {
    shell.rm('-rf', './package-lock.json');
    console.log(chalk.green('删除package-lock.json成功'));

    const path = argv.all ? './node_modules' : './node_modules/@business'

    console.log(chalk.yellow(`当前选项为删除${path}目录`));

    shell.rm('-rf', path);

    console.log(chalk.green(`删除${path}成功`));

    shell.exec('npm install').stdout;

    shell.exec('npm run serve').stdout;
}

module.exports = init;
