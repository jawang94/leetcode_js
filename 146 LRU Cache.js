// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// Follow up:
// Could you do both operations in O(1) time complexity?

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

// 228ms Faster than ~62.79%
/**
 * @param {number} capacity
 */
var Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.next;
  this.prev;
};

var LRUCache = function(capacity) {
  this.max = capacity;
  this.cache = new Map();
  this.tail = new Node(0, 0);
  this.head = new Node(0, 0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    let node = this.cache.get(key);
    this._remove(node);
    this._add(node);
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this._remove(this.cache.get(key));
  }
  let node = new Node(key, value);
  this.cache.set(key, node);
  this._add(node);
  if (this.cache.size > this.max) {
    node = this.head.next;
    this._remove(node);
    this.cache.delete(node.key);
  }
};

LRUCache.prototype._remove = function(node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
};

LRUCache.prototype._add = function(node) {
  this.tail.prev.next = node;
  node.next = this.tail;
  node.prev = this.tail.prev;
  this.tail.prev = node;
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
