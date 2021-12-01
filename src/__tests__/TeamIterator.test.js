import Daemon from '../js/Daemon';
import Bowerman from '../js/Bowerman';
import Magician from '../js/Magician';
import Team from '../js/Team';

test('Testing iterator Team class', () => {
  const expected = [
    {
      name: 'Diablo',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Triss',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Hawkeye',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ];
  const diablo = new Daemon('Diablo', 'Daemon');
  const triss = new Magician('Triss', 'Magician');
  const hawkeye = new Bowerman('Hawkeye', 'Bowerman');
  const avengers = new Team();
  avengers.addAll(diablo, triss);
  avengers.add(hawkeye);
  const result = [];
  for (const character of avengers) {
    result.push(character);
  }

  expect(result).toEqual(expected);
});
