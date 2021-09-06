import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";

const numberCol = new NumbersCollection([10, 3, -5, 0]);
numberCol.sort();
console.log(numberCol.data);

const chraCol = new CharactersCollection("XaaabY");

chraCol.sort();
console.log(chraCol.data);

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(-1);
linkedList.add(500);
linkedList.add(4);

linkedList.sort();
linkedList.print();
