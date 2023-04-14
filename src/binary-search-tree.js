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

      if (node.data < data) {
        node.right = addNode(data, node.right);
      } else if (node.data > data) {
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

      if (node.data < data) {
        return searchData(data, node.right);
      } else if (node.data > data) {
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

      if (node.data < data) {
        return findNode(data, node.right);
      } else if (node.data > data) {
        return findNode(data, node.left);
      }

      return node;
    }
  }

  remove(data) {
    this.nodeRoot = removeNode(data, this.nodeRoot);
    
    function removeNode(data, node) {
      if (!node) {
        return null;
      }

      if (node.data < data) {
        node.right = removeNode(data, node.right);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(data, node.left);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(maxFromLeft.data, node.left);

        return node;
      }
    }
  }

  min() {
    if (!this.nodeRoot) {
      return false;
    }

    let node = this.nodeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.nodeRoot) {
      return false;
    }

    let node = this.nodeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};