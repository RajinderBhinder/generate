const fs = require('fs');
const {exec} = require('child_process')
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

exec('npm init -y', () => {
    exec('npm install', () => {
    });
});


fs.copyFile('project/index.js', 'index.js', (err) => {
    if (err) throw err;
    fs.copyFile('project/.eslintrc', '.eslintrc', (err) => {
        if (err) throw err;
        fs.copyFile('project/README.md', 'README.md', (err) => {
            if (err) throw err;
            fs.copyFile('project/.gitignore', '.gitignore', (err) => {
                if (err) throw err;
                fs.copyFile('project/spec', 'spec', (err) => {
                    if (err) throw err;
                    fs.copyFile('project/spec/index.spec.js', 'spec/index.spec.js', (err) => {
                        if (err) throw err;
                        exec('git init', () => {
                            exec('git add .', () => {
                                exec('git commit -m \'Basic project created\'', () => {
                                    
                                })
                            })
                        })
                    });
                });
            })
        })
    })
})






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

    /*exec('eslint', () => {
    
        });
  exec('./node_modules/.bin/eslint --init', () => {})*/