const cek = (text) =>{
    let reverse = text.split('').reverse().join('')
    if(reverse === text){
        console.log('Palindrom')
    }else{
        console.log('Bukan Palindrom')
    }
   }
   
   cek('lodok')