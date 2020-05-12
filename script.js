function mostrar(){

    var Num = document.getElementById('Num')
    Num = Number(Num.value)
    var result = document.getElementById('result')
    var tab = document.getElementById('tabuada')

    if(Num <= 0){

        alert('Error, digite um inteiro positivo')
        result.innerHTML = 'Impossível Contar'

    }else {
        
       tab.innerHTML =''
       var i = Num
       var lista = [ '1 x '+i+' = '+ i*1,
     
       '2 x '+i+' = '+ i*2,
       '3 x '+i+' = '+ i*3,
       '4 x '+i+' = '+ i*4,
       '5 x '+i+' = '+ i*5,
       '6 x '+i+' = '+ i*6,
       '7 x '+i+' = '+ i*7,
       '8 x '+i+' = '+ i*8,
       '9 x '+i+' = '+ i*9,
       '10 x '+i+' = '+ i*10,
                                     ]
        
        let item = document.createElement('option')
        item.text = ''+ lista
        tab.appendChild(item)
        
        
        

                                
        
    }


}