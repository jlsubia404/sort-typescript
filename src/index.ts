import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

import { Sorter } from "./Sorter";
const numberCol = new NumbersCollection([10,3, -5, 0]);
const sorter = new Sorter(numberCol );
sorter.sort()
console.log(numberCol.data);

const chraCol = new CharactersCollection('XaaabY');
const charcterSorter = new Sorter( chraCol
);
charcterSorter.sort()
console.log(chraCol.data);

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(-1);
linkedList.add(500);
linkedList.add(4);

const sorterLL = new Sorter( linkedList );
sorterLL.sort();
linkedList.print();