const { exec } = require('child_process');

if (process.argv.length !== 3) {
  console.log('1 single argument must be provided');
  process.exit(1);
}

exec(`ng generate pipe core/pipes/${process.argv[2]}`, res => {
  if (res) {
    console.log(res.message);
  }
});
