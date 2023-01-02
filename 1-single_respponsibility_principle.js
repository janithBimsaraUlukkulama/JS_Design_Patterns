// Class should have a single primary responsibility.
// Group functionalities by classes.
// https://www.udemy.com/course/design-patterns-javascript/learn/lecture/14401040

const fs = require('fs');
class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }
}

// use different classes for another responsibilities
class PersistenceManager{
    saveToFile(journal, fileName){
        fs.writeFileSync(filename, journal.toString())
    }
}

Journal.count = 0;

let j = new Journal();
j.addEntry('First entry.');
j.addEntry('Second entry.');
console.log(j.toString());

let p = new PersistenceManager();
let filename = './journal.txt';
p.saveToFile(j, filename);
