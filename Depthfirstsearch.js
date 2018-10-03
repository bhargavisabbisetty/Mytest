
/*Depth First Search is implemented using JavaScript.*/
/**
 *To implement DFS we need BST. BST is a data structure which help us to store values in tree such that all left children values are less
 * than node parent and right children value greater than node parent.   
 * So, when we approach for a value the search area is reduced by comparing with root value and leaving sub child.
 */
function BinarySearchTree() {
    
    this._root = null;
}

BinarySearchTree.prototype = {


    add: function (value){
    
        //create a new item object, place data in
        var node = { 
                value: value, 
                left: null,
                right: null 
            },
            
            //used to traverse the structure
            current;
    
        //special case: no items in the tree yet
        if (this._root === null){
            this._root = node;
            console.log(value+" is inserted as root node");
        } else {
            current = this._root;
            
            while(true){
                
                //if the new value is less than this node's value, go left
                if (value < current.value){
                
                    //if there's no left, then the new node belongs there
                    if (current.left === null){
                        current.left = node;
                        console.log(value+" is inserted as left child to "+ current.value);
                        break;
                    } else {                    
                        current = current.left;
                    }
                    
                //if the new value is greater than this node's value, go right
                } else if (value > current.value){
                
                    //if there's no right, then the new node belongs there
                    if (current.right === null){
                        current.right = node;
                        console.log(value+" is inserted as right child to "+current.value);
                        break;
                    } else {                    
                        current = current.right;
                    }       
 
                //if the new value is equal to the current one, just ignore
                } else {
                    break;
                }
            }        
        }
    },
    
  
    contains: function(value){
    
        var found       = false,
            current     = this._root
            
        //make sure there's a node to search
        while(!found && current){
        
            //if the value is less than the current node's, go left
            if (value < current.value){
                current = current.left;
                
            //if the value is greater than the current node's, go right
            } else if (value > current.value){
                current = current.right;
                
            //values are equal, found it!
            } else {
                found = true;
                console.log(value+" is found.");
            }
        }
        if(found==false)
        console.log(value+" is not found.");
        //only proceed if the node was found
        return found;

    },
    
    /**
     * Returns the number of items in the tree. To do this, a traversal
     * must be executed.
     * @return {int} The number of items in the tree.
     * @method size
     */
    size: function(){
        var length = 0;
        
        this.traverse1(function(node){
            length++;
        });
        
        return length;
    },
    
    /**
     * Converts the tree into an array.
     * @return {Array} An array containing all of the data in the tree.
     * @method toArray
     */
    toArray: function(){
        var result1 = [];
        var result2 = [];
        var result3 = [];
        
        this.traverse1(function(node){
            result1.push(node.value);
        });

        this.traverse2(function(node){
            result2.push(node.value);
        });

        this.traverse3(function(node){
            result3.push(node.value);
        });

        console.log("Inorder sequence: "+result1);
        console.log("Preorder sequence: "+result2);
        console.log("Postorder sequence: "+result3);


        
        //return result;
    },
    
    /**
     * Converts the list into a string representation.
     * @return {String} A string representation of the list.
     * @method toString
     */
    toString: function(){
        return this.toArray().toString();
    },
    
    /**
     * Traverses the tree and runs the given method on each node it comes
     * across while doing an in-order traversal.
     * @param {Function} process The function to run on each node.
     * @return {void}
     * @method traverse
     */
    traverse1: function(process){
        
        //helper function
        function inOrder(node){
            if (node){
                
                //traverse the left subtree
                if (node.left !== null){
                    inOrder(node.left);
                }            
                
                //call the process method on this node
                process.call(this, node);
                
            
                //traverse the right subtree
                if (node.right !== null){
                    inOrder(node.right);
                }
            }        
        }
        
        //start with the root
        inOrder(this._root);    
    },

traverse2: function(process){
        
    //helper function
    function preOrder(node){
        if (node){
            

            //call the process method on this node
            process.call(this, node);

            //traverse the left subtree
            if (node.left !== null){
                preOrder(node.left);
            }            
              
        
            //traverse the right subtree
            if (node.right !== null){
                preOrder(node.right);
            }
        }        
    }
    
    //start with the root
    preOrder(this._root);    
},
traverse3: function(process){
        
    //helper function
    function postOrder(node){
        if (node){
            

            

            //traverse the left subtree
            if (node.left !== null){
                postOrder(node.left);
            }            
              
        
            //traverse the right subtree
            if (node.right !== null){
                postOrder(node.right);
            }

            //call the process method on this node
            process.call(this, node);
        }        
    }
    
    //start with the root
    postOrder(this._root);    
},


};
var b=new BinarySearchTree();
//b._root=null;
b.add(5);
b.add(2);
b.add(4);
b.add(10);
b.contains(10);
b.contains(5);
b.toArray();

