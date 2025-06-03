const formPreventivo = document.getElementById('form-preventivo')
const formJob = document.querySelector('.job-select')
const inputCode = document.querySelector('.promo-code')
const finalPrice= document.querySelector('.final-price')

formPreventivo.addEventListener('submit', function(e){
    e.preventDefault()
    
    const typeOfJob= formJob.value
    const promoCode= inputCode.value.toUpperCase()
    const validCodes= ['YHDNU32', 'JANJC63','PWKCN25','SJDPO96','POCIE24']
    console.log(validCodes)
    console.log(typeOfJob)
    console.log(promoCode.toUpperCase())


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
    console.log(costPerHour, fullPrice)
    
    let promo = 0

    for( let i=0; i<validCodes.length; i++){
        const code= validCodes[i]
        // console.log(code)
        if(promoCode === code){
            promo= (fullPrice*25)/100
        }
        // else if(  promoCode !== code && promoCode !== ''){
        // alert ('Il codice promozionale non è valido, quindi verrà fornito il prezzo finale senza sconti applicati')
        // }
        console.log(promo)

    }
})