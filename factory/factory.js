class C {
    getParams() {
        return {
            a: this.a,
            b: this.b
        }
    }
}

class A extends C {
    constructor(a, b) {
        super();
        console.log('created A ')
        this.a = a;
        this.b = b
    }

    getA() {
        return this.a
    }
}

class B extends C {
    constructor(a, b) {
        super();
        console.log('created B ');
        this.a = a;
        this.b = b
    }

    getB() {
        return this.b
    }
}


class Factory {
    create(type, a, b) {
        switch (type) {
            case 'B':
                return new B(a, b);
            case 'A':
                return new A(a, b);
            default:
                return null;
        }
    }
}

const factory = new Factory();
const b = factory.create('B', 10, 20);
console.log(b.getParams(), b.getB());
