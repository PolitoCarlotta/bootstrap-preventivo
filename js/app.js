const formPreventivo = document.getElementById('form-preventivo')
const formJob = document.querySelector('.job-select')
const inputCode = document.querySelector('.promo-code')
const finalPrice= document.querySelector('#final-price')
// console.log(finalPrice)

formPreventivo.addEventListener('submit', function(e){
    e.preventDefault()
    
    const typeOfJob= formJob.value
    const promoCode= inputCode.value.toUpperCase()
    const validCodes= ['YHDNU32', 'JANJC63','PWKCN25','SJDPO96','POCIE24']
    // console.log(validCodes)
    // console.log(typeOfJob)
    // console.log(promoCode)

    let costPerHour = 0

    if(typeOfJob === 'back'){
        costPerHour = 20.50
    }
    else if(typeOfJob === 'front'){
        costPerHour = 15.30
    }
    else if( typeOfJob === 'project'){
        costPerHour = 33.60
    }

    const fullPrice = 10 * costPerHour
    // console.log(costPerHour, fullPrice)
    
    let promo = 0
    function isPromo (array){
        for ( let i= 0; i< array.length; i++){
            const isPromo = array[i]
            if ( promoCode === isPromo){
                return promo = (fullPrice*25)/100
            } 
        }
    }
    isPromo(validCodes)
    console.log(promo)
    const userPrice= (fullPrice - promo).toFixed(2)

    console.log(userPrice)
    finalPrice.innerHTML= (userPrice)

})