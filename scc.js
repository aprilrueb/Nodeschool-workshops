// Problem 1: Scopes
function foo(){
  var bar;
}

// Problem 2: Scope Chains
function foo(){
  var bar;
  function zip(){
    var quux;
  }
}

// Problem 3: Global Scope & Shadowing
function foo(){
  var bar;
  quux = 5;
  function zip(){
    var quux = 10;
  }
}

// Problem 4: Closures
function foo(){
  var bar;
  quux = 5;
  function zip(){
    var quux = 10;
    bar = true;
  }
  return zip;
}

