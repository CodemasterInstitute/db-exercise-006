
function main() {

    // REFERENCES
    // http://www.w3schools.com/js/js_scope.asp
    // http://www.sitepoint.com/javascript-closures-demystified/
    // http://www.w3schools.com/jquery/jquery_callback.asp
    // http://www.w3schools.com/js/js_loop_for.asp
    // http://www.w3schools.com/js/js_objects.asp
    
    
    // BEGINNER level...
    
    
    // Exercise #1a
    // Create and call a function that multiplies a parameter with a 'global' variable

    
    
    // Exercise #1b
    // Create and call a function that multiplies a parameter with a variable local to the 'main' function context
    
    
    
    // Exercise #1c
    // Create and call a function that multiplies a parameter with a variable local to the called function context
    
    
    // Exercise #2
    // Create a function that is attached to the onclick event of the #clickBtn button within index.html - inside the function place simply an: alert('Hello');. Think carefully about where this onclick function will need to be declared (ie. not necessarily below this exercise spec)
    
    
    // INTERMEDIATE level...
    
    
    // Exercise #3
    // Create a function add(value1, value2) and give it an inner function doAdd(). All that the 'add' function should do is return the result of a call to 'doAdd'. The 'doAdd' function should add the parent functions parameters together. The thing to note here is that inner functions (just like the 'main' function) have access to the other/parent functions variables. The opposite however is not true.
    
    
    // Exercise #4
    // Create a function that accepts the function defined below as a parameter, and then calls that function parameter within. Note here that we can pass functions into other functions. A common use for this is a callback function 
    var logProgress = function(progressMsg) {
        outputLine(progressMsg);
    }
    
    
    // Exercise #5
    // Complete the functions 'foo' and 'bar' so that the output of the call is 'This works!'.
    var foo = function() {
        
    };

    var bar = function(param) {
        
    };

    //bar(foo)();
    
    
    // Exercise #
    // Use a new type of loop, the For/In loop, to iterate over the properties of an object and output the values onto the screen
    // for (var prop in object) { }
    var person = {
        fname: "John", 
        lname: "Doe", 
        age:25
    }; 
        
    
    
    // Exercise #
    // Revise the w3schools exercise on 'object literals'. Recall that you can access a property of an object using the property name in string format, in this case we must use the square brackets as well (similar to when accessing items in an array)
    // Output the properties of the below object in this manner
    var person = { 
        name: 'Dave',
        age: 30,
    }
    
    
    
    // EXPERT level...
    
    
    // With the above 2 methods in mind, try think of an alternative way to storing items in an array, using an OBJECT instead
    var items = [
        { id: 1, name: 'Item 1', desc: 'This is item 1' },
        { id: 2, name: 'Item 2', desc: 'This is item 2' },
        { id: 3, name: 'Item 3', desc: 'This is item 3' }
    ]
    
    
    
}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}