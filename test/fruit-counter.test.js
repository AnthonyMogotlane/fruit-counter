describe("The FruitCounter Function", () => {
    it("should be able to increase the counter", () => {
        let fruitCounter = FruitCounter();
        
        assert.equal(fruitCounter.count(), 0);
        
        fruitCounter.increase();
        
        assert.equal(fruitCounter.count(), 1);
    })

    it("should be able to increase the counter 4 time", () => {
        let fruitCounter = FruitCounter();
        
        assert.equal(fruitCounter.count(), 0);
        
        fruitCounter.increase();
        fruitCounter.increase();
        fruitCounter.increase();
        fruitCounter.increase();
        
        assert.equal(fruitCounter.count(), 4);
    })


    it("should be able to increase the counter 4 times and decrease 3 times", () => {
        let fruitCounter = FruitCounter();
        
        assert.equal(fruitCounter.count(), 0);
        
        fruitCounter.increase();
        fruitCounter.increase();
        fruitCounter.increase();
        fruitCounter.increase();
        fruitCounter.decrease();
        fruitCounter.decrease();
        fruitCounter.decrease();
        
        assert.equal(fruitCounter.count(), 1);
    })

    it("should not be able to decrease the counter if the counter is 0", () => {
        let fruitCounter = FruitCounter();
        
        assert.equal(fruitCounter.count(), 0);
        
        fruitCounter.decrease();
        fruitCounter.decrease();
        
        assert.equal(fruitCounter.count(), 0);
    })

    it("should be able to increase & decrease correctly in any order", () => {
        let fruitCounter = FruitCounter();
        
        assert.equal(fruitCounter.count(), 0);
        
        fruitCounter.increase();
        fruitCounter.decrease();
        fruitCounter.increase();
        fruitCounter.decrease();
        
        assert.equal(fruitCounter.count(), 0);
    })
})