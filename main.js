const btn = $('.btn')
const main = $('.main').get(0)
btn.get(0).addEventListener('click', () => {
    $('.modal').show('slow')
    $('.container').addClass('event')
    $('.text').get(0).value = ''
    $('.text').focus()

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape'){
            $('.container').removeClass('event')
            $('.modal').hide('slow')
        }
    })
})

$('#add').get(0).addEventListener('click', () => {
    const ask = document.querySelector('.text').value
    if(ask === '' || ask === null || ask.length < 4){
        return
    }else if(ask.length > 57){
        alert('слишком длинная строка')
        return
    }

    const newList = document.createElement('div')
    newList.className = 'div-li'
    newList.innerHTML = `<li class="li"><input type="checkbox" class="check">${ask}</li> 
          <span class="delete-span">
            <div class="delete-btn">
              <img src="./img/vedro.png" alt="" class="delete" />
            </div>
          </span>`
    main.append(newList)
    $('.container').removeClass('event')
    $('.modal').hide('slow')
    console.log(ask)
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        const ask = document.querySelector('.text').value
        if(ask === '' || ask === null || ask.length < 4){
            return
        }else if(ask.length > 57){
            alert('слишком длинная строка')
            return
        }
    
        const newList = document.createElement('div')
        newList.className = 'div-li'
        newList.innerHTML = `<li class="li"><input type="checkbox" class="check">${ask}</li> 
              <span class="delete-span">
                <div class="delete-btn">
                  <img src="./img/vedro.png" alt="" class="delete" />
                </div>
              </span>`
        main.append(newList)
        $('.container').removeClass('event')
        $('.modal').hide('slow')
    }
})

$('#cansel').on('click', () => {
    $('.container').removeClass('event')
    $('.modal').hide('slow')
})

    btn.on({
        'mouseenter': () => {
            $('.span').animate({
                width: '120px',
                fontSize: '20px',
                fontWeight: '600',
                paddingTop: '5px',
                opacity: '1',
                paddingLeft: '10px'
            }, 250
            )
        },
       'mouseleave': () => {
           setTimeout(() => {
            $('.span').animate({
                width: '0px',
                opacity: '0',
                paddingLeft: '0px'
            },250
        )
           }, 0)
        }
    })

$('.main').on('click', '.delete-btn', function(event){
    event.target.closest('.div-li').remove()
})
