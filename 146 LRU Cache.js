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

// 200ms faster than ~95.00% and 59.5MB less than ~28.57%
var Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev;
  this.next;
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.head = new Node(0);
  this.tail = new Node(0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    let node = this.map.get(key);
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
  if (this.map.has(key)) this._remove(this.map.get(key));

  let node = new Node(key, value);
  this.map.set(key, node);
  this._add(node);

  if (this.map.size > this.capacity) {
    node = this.head.next;
    this.head.next = node.next;
    node.prev = this.head;
    this._remove(node);
    this.map.delete(node.key);
  }
};

LRUCache.prototype._add = function(node) {
  node.next = this.tail;
  node.prev = this.tail.prev;
  this.tail.prev.next = node;
  this.tail.prev = node;
};

LRUCache.prototype._remove = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
