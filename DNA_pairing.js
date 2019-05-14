function pairElement(str) {
     let newArr = [];
     let finalArr = [];
     str.split("").forEach((item)=> {
             switch(item){

                 case "A": 
                    newArr.push(item+"T");
                    break;
                 case "T":
                    newArr.push(item+ "A");  
                    break;
                 case "C":
                    newArr.push(item+ "G");
                    break;
                 case "G":
                    newArr.push(item+ "C");
                    break;
                 default: break;
            }
                                                                   
            return newArr;   
    });

    newArr.map((e)=> {
         let eArr = e.split("");
         finalArr.push(eArr)
         return finalArr; 
    });


    return  finalArr;
}
  