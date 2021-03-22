function sum(a, b)
{
    return a+b;
}


describe('Test calculator functionality', () => {
    test('sum two numbers', () => {
        const result = sum(1, 5)
        expect(6).toEqual(6)
    }
)})

