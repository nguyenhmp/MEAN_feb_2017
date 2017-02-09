function Queue(){
    var Q = [];

    this.enqueue = function(val){
        Q.push(val);
    }

    this.dequeue = function(){
        var temp = Q[0];
        for(var i = 0; i < Q.length; i++){
            Q[i] = Q[i+1];
        }
        Q.length -= 1;
        return temp;
    }

    this.front = function(){
        return Q[0];
    }

    this.empty = function(){
        if Q.length === 0{
            return true;
        } else {
            return false;
        }
    }

    this.contains = function(val){
        for(var i=0; i < Q.length; i++){
            if(Q[i] === val){
                return true;
            }
        }
        return false;
    }

    this.size = function(){
        return Q.length;
    }
}
