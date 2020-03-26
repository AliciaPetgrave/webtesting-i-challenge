const {repair, succeed, fail, get} = require('./enhancer.js');

// test away!
it("should run the tests", function() {
    expect(true).toBe(true);
  });

describe('enhancer.js', function(){

    //repair
    describe('.repair()', () => {
        it("should increase durability to 100", () => {
            expect(repair({ durability: 10 }).durability).toBe(100)
            expect(repair({ durability: 19 }).durability).toBe(100)
            expect(repair({ durability: 100 }).durability).toBe(100)
        })
    })

    //succeed
    describe('.succeed()', () => {
        it('should increase enhancement by 1', () => {
            expect(succeed({ enhancement: 10 }).enhancement).toBe(11)
            expect(succeed({ enhancement: 19 }).enhancement).toBe(20)
            expect(succeed({ enhancement: 20 }).enhancement).toBe(20)
        })
    })

    //fail
    describe('.fail()', () => {
        it('should change enhancement', () => {
            expect(fail({ enhancement: 10, durability: 10 }).durability).toBe(5)
            expect(fail({ enhancement: 15, durability: 20 }).durability).toBe(10)
            expect(fail({ enhancement: 20, durability: 20 }).durability).toBe(19)
        })
    })


})