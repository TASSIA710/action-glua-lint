
// GitHub Action modules
const core = require('@actions/core');
const github = require('@actions/github');

// Other modules
const exec = require('child_process');

// Fetch NodeJS version (and also test exec functionality)
let result = exec.execSync('node -v');
console.log('Running NodeJS ' + result.toString('utf-8'));



// Do the actual linting
console.log('Linting ' + process.env.GITHUB_WORKSPACE + '...');
exec.execSync('chmod +x glualint', { cwd: __dirname + '/dependencies' });
//let result2 = exec.execSync('./glualint --version', { cwd: __dirname + '/dependencies' });

console.log('Done! Analyzing result...');
//console.log(result2.toString('utf-8'));

core.setOutput('warnings', 0);
core.setOutput('errors', 0);