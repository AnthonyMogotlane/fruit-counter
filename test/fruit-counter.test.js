describe("The FruitCounter Function", () => {
    it("should be able to increase the counter", () => {
        let fruitCounter = FruitCounter();
        
        assert.equal(fruitCounter.count(), 0);
        
        fruitCounter.increase();
        
        assert.equal(fruitCounter.count(), 1);
    })

    it("should be able to initialize the counter to a specific value and increase the counter/increment", () => {
        let fruitCounter = FruitCounter(7);
        
        assert.equal(fruitCounter.count(), 7);
        
        fruitCounter.increase();
        
        assert.equal(fruitCounter.count(), 8);
    })

    it("should be able to increase the counter 4 times", () => {
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


    it("should be able to decrease the counter from the initiated counter value", () => {
        let fruitCounter = FruitCounter(7);
        
        assert.equal(fruitCounter.count(), 7);
        
        fruitCounter.decrease();
        
        assert.equal(fruitCounter.count(), 6);
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

    it("should be able to count apples, oranges and pears independently from each other", () => {
        let appleCounter = FruitCounter();
        let orangeCounter = FruitCounter();
        let pearCounter = FruitCounter();
        
        appleCounter.increase();
        appleCounter.increase();
        appleCounter.increase();

        orangeCounter.increase();
        orangeCounter.increase();
        orangeCounter.increase();
        orangeCounter.increase();       
        
        pearCounter.increase();
        pearCounter.increase();
        pearCounter.increase();
        pearCounter.increase();        
        pearCounter.increase();        

      
        assert.equal(appleCounter.count(), 3);
        assert.equal(orangeCounter.count(), 4);
        assert.equal(pearCounter.count(), 5);

    })
})