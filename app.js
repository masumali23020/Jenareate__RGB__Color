window.onload = () =>{
    main() 
}

function main(){

    const root = document.querySelector('#demo')
    const btn = document.querySelector('.change__btn')




    btn.addEventListener('click', function(){
        const bgColor = ganarateRGB__Color();
        root.style.backgroundColor = bgColor
    })

}

function ganarateRGB__Color (){
    const red  = Math.floor(Math.random() * 255)
    const green  = Math.floor(Math.random() * 255)
    const blue  = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}