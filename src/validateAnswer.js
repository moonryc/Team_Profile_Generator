const validateAnswer =(answer)=>{

    if(answer.trim()){
        return true
    }else{
        console.log("please enter a valid response")
        return false
    }
}

module.exports = validateAnswer