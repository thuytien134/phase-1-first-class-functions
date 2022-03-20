function receivesAFunction (a){
    console.log(a())
}
function returnsANamedFunction(){return function activity(){}}
function returnsAnAnonymousFunction(){return function(){console.log("hello")}}
