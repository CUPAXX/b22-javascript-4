const cek = (text) =>{
    let data = text
    let reverse = data.split('').reverse().join('')
    if(reverse === data){
        console.log('Palindrom')
    }else{
        console.log(data)
    }
   }
   
   cek('kodok')