function Singleton (a) {
    if (Singleton.instance) {
        return;
    }

    this.a = a;

    Singleton.instance = this;
}
Singleton.getInstance = function () {
    return Singleton.instance || new Singleton();
};

new Singleton(10);

console.log(Singleton.getInstance());
console.log(Singleton.getInstance());
