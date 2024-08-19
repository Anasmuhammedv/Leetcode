function counter(n) {

    return function(){
        console.log(n++);
           
    }
    
}

const count = counter(10)

count()
count()