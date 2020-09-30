const { GraphNode } = require("./graph_node");

function maxValue(node, visited = new Set()) {
    if (visited.has(node.val)) return -Infinity;
    let nums = [node.val];
    visited.add(node.val);
    node.neighbors.forEach( neighbor => {
        let neighborVal = maxValue(neighbor, visited);
        nums.push(neighborVal);

    });

    // return nums.reduce(function (max, num) {
    //     if (num > max) {
    //         return num;
    //     } else {
    //         return max;
    //     }
    // });
    return Math.max(...nums);
}

let five = new GraphNode(5);
let three = new GraphNode(3);
let two = new GraphNode(2);
let four = new GraphNode(4);
let ten = new GraphNode(10);
let seven = new GraphNode(7);
let six = new GraphNode(6);
five.neighbors = [three, two, four];
two.neighbors = [seven, ten];
four.neighbors = [six];
console.log(maxValue(five));

module.exports = {
    maxValue,
};

/**
 * use recursion
 * if visited has has node return() but add to visited
 *
 * want to get the biggest value of each subvalue and set is as value then do it again
 * make an array of the of the current and neighbors
 * choose highest between current value and neighbor max
 *
 *
 * for cycle return -inifity
 *
 * */
