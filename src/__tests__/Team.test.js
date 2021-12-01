import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Team from '../js/Team';
import TeamIterator from '../js/TeamIterator';

test('Test constructor class Team & Team add', () => {
  const character1 = new Daemon('Azmodan', 'Daemon');
  // const character2 = new Character('Triss', 'Magician');

  const result = new Team();
  result.add(character1);
  const characterList = new Set();
  characterList.add(character1);
  const expected = {
    members: characterList,
  };
  expected[Symbol.iterator] = TeamIterator;

  expect(result.members).toEqual(expected.members);
});

test('Test constructor class Team & Team error', () => {
  const character1 = new Daemon('Azmodan', 'Daemon');

  expect(() => { const result = new Team(); result.add(character1); result.add(character1); }).toThrowError(new Error('Team already has this character'));
});

test('Test addAll (several characters)', () => {
  const character1 = new Daemon('Azmodan', 'Daemon');
  const character2 = new Magician('Triss', 'Magician');
  const result = new Team();
  result.addAll(character1, character2);

  const listOfCharacters = new Set();
  listOfCharacters.add(character1);
  listOfCharacters.add(character2);
  const expected = {
    members: listOfCharacters,
  };
  expected[Symbol.iterator] = TeamIterator;

  expect(result.members).toEqual(expected.members);
});

test('Test convert Set-collection to Array', () => {
  const character1 = new Daemon('Azmodan', 'Daemon');
  const character2 = new Magician('Triss', 'Magician');
  const resultTeam = new Team();
  resultTeam.addAll(character1, character2);
  const result = resultTeam.toArray();

  const expected = [{
    name: 'Azmodan', type: 'Daemon', level: 1, health: 100, _attack: 10, defence: 40, distance: undefined,
  }, {
    name: 'Triss', type: 'Magician', level: 1, health: 100, _attack: 10, defence: 40, distance: undefined,
  }];

  expect(result).toEqual(expected);
});
