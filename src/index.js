/**
 * @type {string[]}
 */

const names = [];

while (true) {
  const answer = prompt(`Enter whatever you want. ('stop' to end)`);

  if (answer === 'stop') {
    break;
  }

  names.push(answer);
}

alert(names.join('\n'));
