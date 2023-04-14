const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.nodeRoot = null;
  }

  root() {
    return this.nodeRoot;
  }

  add(data) {
    this.nodeRoot = addNode(data, this.nodeRoot);

    function addNode(data, node) {
      if (!node) {
        return new Node(data);
      }

      if (node.value < data) {
        node.right = addNode(data, node.right);
      } else if (node.value > data) {
        node.left = addNode(data, node.left);
      }

      return node;
    }
  }

  has(data) {
    return searchData(data, this.nodeRoot) 
    
    function searchData(data, node) {
      if (!node) {
        return false;
      }

      if (node.value < data) {
        return searchData(data, node.right);
      } else if (node.value > data) {
        return searchData(data, node.left);
      }

      return true;
    }
  }

  find(data) {
    return findNode(data, this.nodeRoot);

    function findNode(data, node) {
      if (!node) {
        return null;
      }

      if (node.value < data) {
        return searchNode(data, node.right);
      } else if (node.value > data) {
        return searchNode(data, node.left);
      }

      return node;
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};