    let array = [-3,5,1,3,2,10];

    for (let i = 0; i < (array.length)/2; i++) {
        let x = array[i];
        array[i] = array[array.length-i-1];
        array[array.length-i-1] = x;
        
    }

    array.forEach(function(item){
        console.log(item);
    });


