
class Stack {
    constructor() {
        this.top = -1;
        this.item = {};
    }
}

describe('My stack', () => {

    // todo makes sure that this method passes while you figure things out
    it('is created empty', () => {
        const stack = new Stack();

        //we are expecting that the actual value is -1. So we use toBe to ensure that. toBe is our matcher
        expect(stack.top).toBe(-1);
        //expect that the stack is empty
        expect(stack.item).toEqual({});
    }); 
})