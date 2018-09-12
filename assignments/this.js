/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" references the window object by default. That's basically never a good thing.
* 2. When used inside a function called as a method of an object, "this" references that object.
* 3. When used inside a constructor that has been invoked using the "new" keyword, "this" references a newly created object.
* 4. Functions objects can be invoked with an explicite reference for "this", supplied by the methods call & apply.
* 4a. Also, the function method "bind" generates a new function where "this" is always bound to the argument supplied to "bind".
*
* write out a code example of each explanation above
*/

// Principle 1

function alertCODEPEN(){
    this.alert(this.name);
}
alertCODEPEN();

// Principle 2
let derpyBurb = {
    derpy: true,
    song: null, // Derpy birds are usually silent.
    sing: function (){
        if(this.derpy || !this.song){
            console.log("...");
        } else{
            console.log(this.song)
        }
    }
};
derpyBurb.sing();

// Principle 3

function Burb(propertiesObject){
    this.derpy = propertiesObject.derpy;
    this.song = propertiesObject.song;
    this.sing = derpyBurb.sing;
}
var regularBurb = new Burb({
    song: "cherpaderp"
})
regularBurb.sing();

// Principle 4

// code example for Explicit Binding

function derpify(){
    this.derpy = true;
}
derpify.call(regularBurb); // Oh no!
regularBurb.sing()
