class Foo {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        const ownProps = Object.getOwnPropertyNames(proto);
        console.log(ownProps);
    }

    x() {}
    bar(){ }
    baz(){ }
}

class Boo extends Foo {}

new Boo();
