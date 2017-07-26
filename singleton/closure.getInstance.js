const Singleton = (function(){
    let instance;

    function SingletonClass(a) {
        this.a = a
    }

    return {
        getInstance: function(a){
            if (instance == null) {
                instance = new SingletonClass(a);
            }
            return instance;
        }
    };
})();

console.log(Singleton.getInstance(10));
console.log(Singleton.getInstance(12));