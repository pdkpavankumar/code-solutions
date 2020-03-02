//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function deleteFromBST(t, queries) {
    if(!queries) return t;
    for(var i=0; i<queries.length; i++) {
        t = removeFromBST(t, queries[i]);
    }
    return t;
}

function removeFromBST(t, query) {
    if(t === null) { return null;}
    if(t.value === query) {
        if(t.left === null && t.right === null) {return null;}
        if(t.left === null) {return t.right;}
        if(t.right === null) {return t.left;}
        var temp = t.left;
        while(temp.right !== null) {
            temp = temp.right;
        }
        t.value = temp.value;
        t.left = removeFromBST(t.left, temp.value);
        return t;
    } else if(t.value < query) {
        t.right = removeFromBST(t.right, query);
        return t;
    } else {
        t.left = removeFromBST(t.left, query);
        return t;
    }
    return t;
}
