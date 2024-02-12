let menu = {
    width:200,
    height:300,
    title:"My Menu",
};

multiplyNumeric(menu);


function multiplyNumeric(obj){
    for (let key in obj){
        if(!isNaN(obj[key])){
            obj[key] = obj[key]*2
            alert (obj[key])
        }
    }
    
}


// alert(menu)