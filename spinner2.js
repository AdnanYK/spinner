const spins = "|/-\\|/-\\|".split("");

const spinning = function(array) {
  let counter = 0;
  for (let element of array) {
    setTimeout(() => {
      process.stdout.write(`\r${element}   `);
    }, 100 + (200 * counter));
    counter ++;
  }
};
spinning(spins);
