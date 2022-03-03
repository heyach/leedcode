var MinStack = function() {
    this.stack = new Array()
    this.min = -Infinity
};

MinStack.prototype.push = function(val) {
    this.stack.push(val)
    this.min = Math.min(...this.stack)
};

MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min = Math.min(...this.stack)
};
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
    return this.min
};

var obj = new MinStack()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.push(5)
obj.pop()
var p1 = obj.top()
var p2 = obj.getMin()