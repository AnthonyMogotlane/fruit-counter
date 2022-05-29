const FruitCounter = counter => {
    let theCount = counter ? counter : 0;

    //function to increment the counter
    const increase = () => {
        theCount ++;
    }

    //function to increment the counter
    const decrease = () => {
        if (theCount > 0) theCount --;
    }
    //get the counter
    //function to increment the counter
    const count = () => theCount;

    return {
        increase,
        decrease,
        count
    }
 }