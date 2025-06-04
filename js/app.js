const formPreventivo = document.getElementById('form-preventivo')
const formJob = document.querySelector('.job-select')
const inputCode = document.querySelector('.promo-code')
// console.log(finalPrice)

formPreventivo.addEventListener('submit', function(e){
    e.preventDefault()


    const validCodes= ['YHDNU32', 'JANJC63','PWKCN25','SJDPO96','POCIE24']
    // console.log(validCodes)
    // console.log(typeOfJob)
    // console.log(promoCode)

    let costPerHour = 0 

    if(formJob.value === 'back'){
        costPerHour = 20.50
    }
    else if(formJob.value === 'front'){
        costPerHour = 15.30
    }
    else if( formJob.value === 'project'){
        costPerHour = 33.60
    }

    const fullPrice = 10 * costPerHour
    // console.log(costPerHour, fullPrice)
    
    let promo = 0
    function isPromo (array){
        for ( let i= 0; i< array.length; i++){
            const isPromo = array[i]
            if ( inputCode.value.toUpperCase() === isPromo){
                return promo = (fullPrice*25)/100
            } 
        }
    }
    isPromo(validCodes)
    console.log(promo)
    const userPrice= (fullPrice - promo)

    console.log(userPrice)
    document.querySelector('#final-price').innerHTML= new Intl.NumberFormat('it-IT', {
		style: 'currency',
		currency: 'EUR',
	}).format(userPrice)

})