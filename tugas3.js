function divideAndSort(num){
    let result = '';
    if(typeof num === "number"){
        let item = num.toString().split('0');
    item.forEach( item => {
      result = result + item.split('').sort().join('')
    });
    console.log(result);
    }else {
        console.log("Error : masukan deret angka")
    }
    
  }
  divideAndSort(5956560159466056);
  //divideAndSort('bansjdbakjsd');