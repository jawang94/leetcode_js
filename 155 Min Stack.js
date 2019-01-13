/**
 * @constructor
 */
var MinStack = function() {
  this.min = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  var min = this.getMin();

  this.stack.push(x);

  if (min === undefined || min >= x) {
    this.min.push(x);
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  var val = this.stack.pop();
  var min = this.getMin();

  if (val === min) {
    this.min.pop();
  }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};

// Solution 2. 132ms.
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min === undefined || x < this.min) this.min = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  let temp = this.stack[0];
  for (var i = 0; i < this.stack.length; i++) {
    if (this.stack[i] < temp) temp = this.stack[i];
  }
  this.min = temp;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
