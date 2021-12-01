import Daemon from './js/Daemon';
import Bowerman from './js/Bowerman';
import Magician from './js/Magician';
import Team from './js/Team';
import Character from './js/Character';

const diablo = new Daemon('Diablo', 'Daemon');
const triss = new Magician('Triss', 'Magician');
const hawkeye = new Bowerman('Hawkeye', 'Bowerman');
const avengers = new Team();

avengers.addAll(diablo, triss, hawkeye);
const array = [];
for (const char of avengers) {
  array.push(char);
}

console.log(array);
