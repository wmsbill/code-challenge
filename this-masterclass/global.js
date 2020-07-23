/*
* Walmart Labs (UI)
* Given a JS object,
*  let obj = {a: 1, getA: function() { return this.a } };
*  let get = obj.getA;
*  console.log(get());
*
*  What will it print?
*  How can you change the code to prevent any faults?
* */

function foo() {
    "use strict";
    console.log(arguments);
}

foo(1,2,3,4,5);
