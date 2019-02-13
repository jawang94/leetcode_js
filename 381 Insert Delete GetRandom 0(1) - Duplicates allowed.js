// Design a data structure that supports all following operations in average O(1) time.

// Note: Duplicate elements are allowed.
// insert(val): Inserts an item val to the collection.
// remove(val): Removes an item val from the collection if present.
// getRandom: Returns a random element from current collection of elements. The probability of each element being returned is linearly related to the number of same value the collection contains.
// Example:

// // Init an empty collection.
// RandomizedCollection collection = new RandomizedCollection();

// // Inserts 1 to the collection. Returns true as the collection did not contain 1.
// collection.insert(1);

// // Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
// collection.insert(1);

// // Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
// collection.insert(2);

// // getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
// collection.getRandom();

// // Removes 1 from the collection, returns true. Collection now contains [1,2].
// collection.remove(1);

// // getRandom should return 1 and 2 both equally likely.
// collection.getRandom();

// Insert in O(1), Remove & Retrieve in 0(n) in 172ms
/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.collection = [];
  this.record = new Map();
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  if (this.record.has(val)) {
    this.collection.push(val);
    this.record.set(val, this.record.get(val) + 1);
    return false;
  } else {
    this.collection.push(val);
    this.record.set(val, 1);
    return true;
  }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if (this.record.has(val) && this.record.get(val) > 0) {
    for (var i = 0; i < this.collection.length; i++) {
      if (this.collection[i] === val) {
        this.collection.splice(i, 1);
        this.record.set(val, this.record.get(val) - 1);
        return true;
      }
    }
  } else return false;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  let randIndex = Math.floor(Math.random() * this.collection.length);
  if (this.collection[randIndex]) return this.collection[randIndex];
  else return false;
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
