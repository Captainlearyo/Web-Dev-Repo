const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
   // console.log(this.data);
  }

  hash(key) {
    // Your code here
   // console.log( parseInt(sha256(key).slice(0,8),16));
    return parseInt(sha256(key).slice(0,8),16)
  }

  hashMod(key) {
    // Your code here
    //console.log(this.hash(key) % this.capacity);
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    const newPair = new KeyValuePair(key, value)
    const index = this.hashMod(key)


      if(this.data[index]) throw new Error('hash collision or same key/value pair already exists!');
      this.data[index] = newPair;
      this.count ++

  }

  insertWithHashCollisions(key, value) {
    const newPair = new KeyValuePair(key, value)
    const index = this.hashMod(key)




      if(this.data[index]) newPair.next = this.data[index]
       this.data[index] = newPair;
      this.count ++
      console.log(this.data);

  }

  insert(key, value) {
    const index = this.hashMod(key)
    let currentPair = this.data[index] // could be null

     // hashTable.insert("key-1", "val-1");
     // hashTable.insert("key-2", "val-2");
     // hashTable.insert("key-3", "val-3");
     // hashTable.insert("key-1", "val-100000");

   while (currentPair && currentPair.key !== key) {
    currentPair = currentPair.next;
  }

   if (currentPair) {
    currentPair.value = value;
    // return;
  } else {
    this.insertWithHashCollisions(key, value);
  }
}

}


module.exports = HashTable;
