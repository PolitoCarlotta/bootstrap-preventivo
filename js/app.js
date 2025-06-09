// option della select
const selectOptions = [
    {
        text: 'Backend Development',
        value: 'back'
    },
    {
        text: 'Frontend Development',
        value:'front'
    },
    {
        text:'Project Analysis',
        value: 'project'
    }
    ]
    selectOptions.forEach(item => {
        const elementOption = document.createElement('option')
        elementOption.value = item.value
        elementOption.textContent = item.text
        document.getElementById('job').appendChild(elementOption)
    })



const formPreventivo = document.getElementById('form-preventivo')
const formJob = document.querySelector('.job-select')
const inputCode = document.querySelector('.promo-code')

const validCodes= ['YHDNU32', 'JANJC63','PWKCN25','SJDPO96','POCIE24',]

function isPromo (array){
    return array.includes(inputCode.value.toUpperCase());
}

// Submit del form
     formPreventivo.addEventListener('submit', function(e){
        e.preventDefault()

        const havePromo= isPromo(validCodes)

       if (havePromo === false && inputCode.value !== ''){
        alert(' Il codice inserito non è valido, perciò il prezzo finale verrà calcolato senza applicare sconti')
        document.getElementById('promo').classList.add('is-invalid')
       }
       else if(havePromo === true){
        document.getElementById('promo').classList.add('is-valid')
       }

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
        let promo = 0
        if (havePromo === true){
            promo= (fullPrice * 25)/100
        }
        
        const userPrice= (fullPrice - promo)

        console.log(havePromo,costPerHour, fullPrice, promo, userPrice)

        const parts = new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
            }).formatToParts(userPrice)

            const currencyPart = parts.find(p => p.type === 'currency')
            const filteredParts = parts.filter(p => p.type !== 'currency')

        const priceHtml = []
        priceHtml.push(`<span>${currencyPart.value}</span>`);
        filteredParts.forEach(part=>{
            if (part.type === 'decimal' || part.type === 'fraction'){
                priceHtml.push(`<span class='text-secondary'>${part.value}`)
            }
            else{
                priceHtml.push(part.value)
            }
        })

        document.getElementById('final-price').innerHTML= priceHtml.join('')

        setTimeout(() => {
            document.getElementById('promo').classList.remove('is-invalid')
            document.getElementById('promo').classList.remove('is-valid')
        }, 3000);
    })