var MinStack = function() {
    this.stack = new Array()
};

MinStack.prototype.push = function(val) {
    this.stack.push(val)
};

MinStack.prototype.pop = function() {
    this.stack.pop()
};
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
    return Math.min(...this.stack)
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