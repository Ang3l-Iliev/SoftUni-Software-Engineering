function attachGradientEvents() {
    let gradientElement=document.getElementById('gradient')
    let resultElement = document.getElementById('result')

    const gradientMouseOverHandler = (e) =>{
        let percent = Math.floor((e.offsetwidth /e.target.offsetWithd)*100)
        resultElement.textContent=percent
    }
    gradientElement.addEventListener('mousemove',gradientMouseOverHandler)
}