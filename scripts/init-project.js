const readline = require('readline');
const replace = require('replace-in-file');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

initRename();

function initRename() {
    rl.question('Enter the name of your project:\n', handleAnswer);
}

function handleAnswer(answer) {
    var formattedName = answer.replace(/_/g, ' ').replace(/-/g, ' ').trim().toLowerCase().replace(/\s\s+/g, ' ').replace(/ /g, '-');

    if (!(/[a-z]/.test(formattedName))) {
        console.log('Error, enter a valid name.\n');
        initRename();
        return;
    }

    if (!formattedName.endsWith('front')) {
        rl.question(`Your project\'s name does not end with \'front\', do you want to rename it \'${formattedName}-front\' ? (y/n)`, (frontAnswer) => {
            frontAnswer = frontAnswer.trim().toLowerCase();
            if (frontAnswer === 'y' || frontAnswer === 'yes') {
                formattedName += '-front';
            } else {
                console.log('Skip');
            }
            execRename(formattedName);
        });
    } else {
        execRename(formattedName);
    }
}

function execRename(formattedName) {
    console.log(`Renaming your project: ${formattedName} ...`);

    var filesToRemove = [ 'CHANGELOG.md', 'BUILT_WITH.md', 'CODE_OF_CONDUCT.md', 'CONTRIBUTING.md', '.all-contributors-html.js', '.all-contributorsrc' ];
    filesToRemove.forEach((elt) => {
        if (fs.existsSync(elt)) {
            fs.unlinkSync(elt);
        }
    });

    var targets = [ 'projects/**', '*.json', 'Dockerfile', '*.sh', 'README-base.md', '.travis.yml' ];
    targets.forEach(elt => {
        replace.sync({
            files: elt,
            from: /angular-ngrx-material-starter/g,
            to: formattedName
        });
        replace.sync({
            files: elt,
            from: /angular_ngrx_material_starter/g,
            to: formattedName.replace(/-/g, '_')
        });
    });

    fs.renameSync('./projects/angular-ngrx-material-starter', './projects/' + formattedName);
    fs.unlinkSync('README.md');
    fs.renameSync('README-base.md', 'README.md');

    console.log('Done !');
    console.log('Don\'t forget to update .travis.yml for CI/CD configuration');
    rl.close();
}