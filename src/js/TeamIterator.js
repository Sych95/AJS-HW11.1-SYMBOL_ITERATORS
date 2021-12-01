import Person from './Person';

export default function iterator() {
  let current = 0;
  const last = this.members.size;
  const teamList = this.toArray();
  return {
    next() {
      if (current < last) {
        return {
          value: new Person(teamList[current++]),
          done: false,
        };
      }
      return {
        done: true,
      };
    },
  };
}
