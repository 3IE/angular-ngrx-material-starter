const { exec } = require('child_process');

if (process.argv.length !== 3) {
  console.log('1 single argument must be provided');
  process.exit(1);
}

exec(`ng generate service core/data-access/data/${process.argv[2]}-data`, res => {
  if (res) {
    console.log(res.message);
  }
});
exec(`ng generate service core/data-access/business/${process.argv[2]}-business`, res => {
  if (res) {
    console.log(res.message);
  }
});
