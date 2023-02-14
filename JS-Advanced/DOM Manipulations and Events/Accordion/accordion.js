function toggle() {

    let button = document.querySelector('.button')
    let text = document.querySelector('#extra')
    if(button.textContent=== 'More' ){
        text.style.display = 'block'
            button.textContent="Less"

    }else{
        button.textContent = 'More'
        text.style.display='none'
    }
}