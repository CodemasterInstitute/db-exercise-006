var globalMultiplier = 2;

var clickBtnOnClick = function () {
    alert('Hello');
}

function main() {
    
    var mainMultiplier = 4;
    
    // REFERENCES
    // http://www.w3schools.com/js/js_scope.asp
    // http://www.sitepoint.com/javascript-closures-demystified/
    // http://www.w3schools.com/jquery/jquery_callback.asp
    // http://www.w3schools.com/js/js_loop_for.asp
    // http://www.w3schools.com/js/js_objects.asp
    
    
    // BEGINNER level...
    
    
    // Exercise #1a
    // Create and call a function that multiplies a parameter with a 'global' variable
    function multiplyGlobal(value) {
        return value * globalMultiplier;
    }
    
    var result = multiplyGlobal(22);
    outputLine(result); // 44
    
    
    // Exercise #1b
    // Create and call a function that multiplies a parameter with a variable local to the 'main' function context
    function multiplyMain(value) {
        return value * mainMultiplier;
    }
    
    var result = multiplyMain(10);
    outputLine(result); // 40
    
    
    // Exercise #1c
    // Create and call a function that multiplies a parameter with a variable local to the called function context
    function multiplyLocal(value) {
        var localMultiplier = 6
        
        return value * mainMultiplier;
    }
    
    var result = multiplyLocal(2);
    outputLine(result); // 12
    
    
    // Exercise #2
    // Create a function that is attached to the onclick event of the #clickBtn button within index.html - inside the function place simply an: alert('Hello');. Think carefully about where this onclick function will need to be declared (ie. not necessarily below this exercise spec)
    
    
    // INTERMEDIATE level...
    
    
    // Exercise #3
    // Create a function add(value1, value2) and give it an inner function doAdd(). All that the 'add' function should do is return the result of a call to 'doAdd'. The 'doAdd' function should add the parent functions parameters together. The thing to note here is that inner functions (just like the 'main' function) have access to the other/parent functions variables. The opposite however is not true.
    function add(value1, value2) {
        
        function doAdd() {
            return value1 + value2;
        }

        return doAdd();
    }

    var result = add(1, 2);
    outputLine(result); // 3
    
    // Exercise #4
    // Create a function that accepts the function defined below as a parameter, and then calls that function parameter within. Note here that we can pass functions into other functions. A common use for this is a callback function 
    var logProgress = function(progressMsg) {
        outputLine(progressMsg);
    }
    
    function doSomething(onDoneSomething) {
        var a = 1 + 1;
        
        onDoneSomething('I did something!');
    }
    
    doSomething(logProgress);
    
    
    // Exercise #5
    // Complete the functions 'foo' and 'bar' so that the output of the call is 'This works!'.
    var foo = function() {
      outputLine('This works!');
    };

    var bar = function(param) {
      return param;
    };

    bar(foo)();
    
    
    // Exercise #6
    // Use a new type of loop, the For/In loop, to iterate over the properties of an object and output the values onto the screen
    // for (var prop in object) { }
    var person = {
        fname: "John", 
        lname: "Doe", 
        age:25
    }; 
        
    for (var prop in person) {
        outputLine(person[prop]);
    }
    
    // Exercise #7
    // Revise the w3schools exercise on 'object literals'. Recall that you can access a property of an object using the property name in string format, in this case we must use the square brackets as well (similar to when accessing items in an array)
    // Output the properties of the below object in this manner
    var person = { 
        name: 'Dave',
        age: 30,
    }
    
    outputLine(person['name']);
    outputLine(person['age']);
    
    
    // EXPERT level...
    
    // Exercise #8
    // With the above 2 methods in mind, try think of an alternative way to storing items in an array, using an OBJECT instead
    var items = [
        { id: 1, name: 'Item 1', desc: 'This is item 1' },
        { id: 2, name: 'Item 2', desc: 'This is item 2' },
        { id: 3, name: 'Item 3', desc: 'This is item 3' }
    ]
    
    var items = {
        1: { name: 'Item 1', desc: 'This is item 1' },
        2: { name: 'Item 2', desc: 'This is item 2' },
        3: { name: 'Item 3', desc: 'This is item 3' },
    }
    
    for (var prop in items) {
        outputLine(items[prop].name);
    }
    

    // Exercise #9
    // Now, apply the same method in exercise 8 to this array, so that you have an OBJECT, then proceed to output the name and desc of each item using the provided function
    var items = [
        { id: 1, name: 'Item 1', desc: 'This is item 1', nameAndDesc: function() { return this.name + ' ' + this.desc; } },
        { id: 2, name: 'Item 2', desc: 'This is item 2', nameAndDesc: function() { return this.name + ' ' + this.desc; } },
        { id: 3, name: 'Item 3', desc: 'This is item 3', nameAndDesc: function() { return this.name + ' ' + this.desc; } }
    ]
    
    var items = {
        1: { name: 'Item 1', desc: 'This is item 1', nameAndDesc: function() { return this.name + ' ' + this.desc; } },
        2: { name: 'Item 2', desc: 'This is item 2', nameAndDesc: function() { return this.name + ' ' + this.desc; } },
        3: { name: 'Item 3', desc: 'This is item 3', nameAndDesc: function() { return this.name + ' ' + this.desc; } },
    }

    for (var prop in items) {
        outputLine(items[prop].nameAndDesc());
    }


    // Exercise #10
    // And now produce the same result as in exercise 9 using a callback method
    var items = [
        { id: 1, name: 'Item 1', desc: 'This is item 1', nameAndDesc: function(logFunc) { /* complete me! */ } },
        { id: 2, name: 'Item 2', desc: 'This is item 2', nameAndDesc: function(logFunc) { /* complete me! */ } },
        { id: 3, name: 'Item 3', desc: 'This is item 3', nameAndDesc: function(logFunc) { /* complete me! */ } }
    ]

    var items = {
        1: { name: 'Item 1', desc: 'This is item 1', nameAndDesc: function(logFunc) { logFunc(this.name + ' ' + this.desc); } },
        2: { name: 'Item 2', desc: 'This is item 2', nameAndDesc: function(logFunc) { logFunc(this.name + ' ' + this.desc); } },
        3: { name: 'Item 3', desc: 'This is item 3', nameAndDesc: function(logFunc) { logFunc(this.name + ' ' + this.desc); } },
    }
    
    for (var prop in items) {
        items[prop].nameAndDesc(outputLine);
    }

}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}