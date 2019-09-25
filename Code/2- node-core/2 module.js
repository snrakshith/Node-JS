/*
----
1. Node follows modularity at its core.
2. Every function or variable defined in a module is private to itself,
    it is not defultly added to the global scope.
3. In order to add it to global space, we have to export it and make it
    public explictly.
4. Any Single file in Node with a JavaScript is a Module.
5. In a real project we have so many number of Module's,
    but one being a `Main Module`.
----
*/

console.log(module);