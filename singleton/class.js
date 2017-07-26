class Singleton{
    constructor(a){
        if(Singleton.instance) return Singleton.instance;

        this.a = a;

        Singleton.instance = this;
    }
}

const a = new Singleton(10);
console.log(a);

const b = new Singleton(15);
console.log(b);

