const fs = require('fs');
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

/*
fs.mkdir('project', () => {
    fs.writeFile('project/index.js', 'This is the index file', () => {});
    fs.mkdir('project/spec', () => {
        fs.writeFile('project/spec/index.spec.js', 'the tests', ()=> {});
    })
    fs.writeFile('project/package.json', 'the dependencies', () => {});
    fs.writeFile('project/README.md', 'Please read me', ()=>{});
    fs.writeFile('project/.gitignore', 'please ignore me', ()=>{});
    fs.writeFile('project/.eslintrc', 'the linting code', ()=>{});
});
*/
