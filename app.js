function createRandomKey({ max }){
    if(typeof max === 'string'){
        console.error("Please input on Number type!");
    }

    if(!max){
        return Math.floor(Math.random() * 10);
    }

    return Math.floor(Math.random() * max);        
}