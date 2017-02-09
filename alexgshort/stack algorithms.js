var arrayStack = function(){
    var stack = [];
    this.push = function(val){
        stack.push(val);
        return this;
    }
    this.pop = function(){
        if(stack.length > 0){
            return stack.pop();
        }
        return false;
    }
    this.top = function(){
        if(stack.length > 0){
            return stack[stack.length-1];
        }
        return false;
    }
    this.contains = function(val){
        for(var i = 0; i < stack.length; i++){
            if(stack[i] === val){
                return true;
            }
        }
        return false;
    }
    this.empty = function(){
        if(stack.length === 0){
            return true;
        }
        return false;
    }
    this.size = function(){
        return stack.length;
    }
}

var Node = function(val){
    this.val = val;
    this.next = null;
}

var SLL = function(){
    var head = null;

    this.push = function(val){
        if(!head){
            head = new Node(val);
        }
        var node = new Node(val);
        node.next = head;
        head = node;
        return this;
    }
    this.pop = function(){
        if(!head){
            return false;
        }
        var temp = head.val;
        this.head = head.next;
        return temp;
    }
    this.top = function(){
        if(!head){
            return false;
        }
        return head.val;
    }
    this.contains = function(val){
        if(!head) return false;
        var runner = head;
        while(runner){
            if(runner.val === val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    this. empty = function(){
        if(!head) return true;
        return false;
    }
    this.size = function(){
        if(!head) return 0;
        var count = 0;
        var runner = head;
        while(runner){
            count++;
            runner = runner.next;
        }
        return count;
    }
}
