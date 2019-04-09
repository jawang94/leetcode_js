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

// 112ms faster than ~80.85% and 44.2MB less than ~74.44%
var MinStack = function() {
  this.min = Infinity;
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x < this.min) this.min = x;
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let newMin = Infinity;
  this.stack.pop();
  this.stack.forEach(e => {
    if (e < newMin) newMin = e;
  });
  this.min = newMin;
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
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
