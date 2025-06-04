const img = document.querySelectorAll('.add-img')
const img2 = document.querySelectorAll('.add-img2')
const img3 = document.querySelectorAll('.add-img3')
const img4 = document.querySelectorAll('.add-img4')
const img5 = document.querySelectorAll('.add-img5')
const img6 = document.querySelectorAll('.add-img6')
const img7 = document.querySelectorAll('.add-img7')
const img8 = document.querySelectorAll('.add-img8')
const img9 = document.querySelectorAll('.add-img9')
const img10 = document.querySelectorAll('.add-img10')
const img11 = document.querySelectorAll('.add-img11')
const img12 = document.querySelectorAll('.add-img12')
const buttons = document.querySelectorAll('.btn')
const price = document.querySelectorAll('.price')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.container-card')
        const setName = card.querySelector('h2').textContent
        const priceElement = card.querySelector('.price')
        const narx = parseInt(priceElement.getAttribute('data-price'))
        let soni = prompt(`${setName} nechta zakaz qilmoqchisiz?`)
        let message = ''

        if (soni !== null && soni > 0) {
            soni = parseInt(soni);
            const umumiyNarx = narx * soni;
            switch (soni) {
                case 1:
                    message = `${soni} ta ${setName}ni umumiy narxi ${umumiyNarx.toLocaleString('uz-UZ')} so'm`
                    break;
                case 2:
                    message = `${soni} ta ${setName}ni umumiy narxi ${umumiyNarx.toLocaleString('uz-UZ')} so'm`
                    break;
                case 3:
                    message = `${soni} ta ${setName}ni umumiy narxi ${umumiyNarx.toLocaleString('uz-UZ')} so'm`
                    break;
                default:
                    message = `${soni} ta ${setName}ni umumiy narxi ${umumiyNarx.toLocaleString('uz-UZ')} so'm`
                    break;
            }

            let confirmOrder = confirm(`${message} qilmoqchisiz?`)
            if (confirmOrder) {
                alert('Zakaz qabul qilindi.')
            } else {
                alert('Zakaz bekor qilindi.')
            }
        } else {
            alert('Iltimos, haqiqiy sonini kiriting.')
        }
    });
});