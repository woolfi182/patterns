const Singleton = (function (props){
    let instance = null;

    function _Singleton(_props){
        if(instance) return instance;
        instance = this;

        this.a = _props;
    }

    return _Singleton
}());

const a = new Singleton(10);
console.log(a);

const b = new Singleton(15);
console.log(b);
