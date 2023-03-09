const agregarQuitarBorde = () => {
    foto = document.querySelector('#img11')
    if (foto.style.border === '2px solid red') {
        foto.style.border = '0px';
    }else{
        foto.style.border = '2px solid red';
    }
}
const contadorConLimite = () => {
    const sk1 = document.querySelector('#sticker1').value;
    const sk2 = document.querySelector('#sticker2').value;
    const sk3 = document.querySelector('#sticker3').value;
    const total = parseInt(sk1) +parseInt(sk2) + parseInt(sk3)
    
    if (total <= 10){
        respt = document.querySelector('#respuesta')
        respt.innerHTML = 'Llevas ' + total + ' stickers.'
    }else{
        resf = document.querySelector('#respuesta')
        resf.innerHTML = 'Llevas demasiados stickers. (Max 10)'
    } 
}
const VerificadorDeContraceña = () => {
    const element1 = document.querySelector('#selector1').value;
    const element2 = document.querySelector('#selector2').value;
    const element3 = document.querySelector('#selector3').value;
    let vali = element1 + element2 + element3
    
    console.log(vali)
    if (vali == 911){
        val = document.querySelector('#pass')
        val.innerHTML = 'Password 1 correcto.'
    }else if(vali == 714) {
        val2 = document.querySelector('#pass')
        val2.innerHTML = 'Password 2 correcto.'
    }else{
        valw = document.querySelector('#pass')
        valw.innerHTML = 'Password incorrecto.'
    }
}
