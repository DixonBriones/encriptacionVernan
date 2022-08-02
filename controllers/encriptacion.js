
const encriptar = async(req, res, next)=>{
    const {texto,clave}=req.body;
    let textoBinario= toBinario(texto);
    let claveBinaria=toBinario(clave);
    let ArrayXOR=ObtenerXOR(textoBinario,claveBinaria);
    let textoEcriptado=toString(ArrayXOR);
    let textoAscii=AsciitoString(textoEcriptado)
    res.status(200).json({"Resultado":textoEcriptado,"Caracteres":textoAscii});
}
const desencriptar = async(req, res, next)=>{
    const {texto,clave}=req.body;
    let textoBinario= toBinarioDes(texto);
    let claveBinaria=toBinario(clave);
    let ArrayXOR=ObtenerXOR(textoBinario,claveBinaria);
    let textoEcriptado=toStringDes(ArrayXOR);
    res.status(200).json({"Resultado":textoEcriptado});
}


const AsciitoString =(cadena)=>{
    let cadenaEcriptada="";
    for (let i = 0; i < cadena.length; i++) {
        //console.log(String.fromCharCode(element+8));
        cadenaEcriptada=cadenaEcriptada+String.fromCharCode(cadena[i]+8)
    }
    return cadenaEcriptada;
}

const toString =(cadena)=>{
    let arrayTexto=[];
    let cadenaEcriptada="";
    for (let i = 0; i < cadena.length; i++) {
        const element = parseInt(cadena[i], 2);
        arrayTexto.push(element)  
        //console.log(String.fromCharCode(element+8));
        //cadenaEcriptada=cadenaEcriptada+String.fromCharCode(element+8)
    }
    return arrayTexto;
}

const toStringDes =(cadena)=>{
    let arrayTexto=[];
    let cadenaEcriptada="";
    
    for (let i = 0; i < cadena.length; i++) {
        const element = parseInt(cadena[i], 2);
        arrayTexto.push(element)  
        //console.log(String.fromCharCode(element+8));
        cadenaEcriptada=cadenaEcriptada+String.fromCharCode(element)
    }
    
    return cadenaEcriptada;
}

const toBinarioDes =(cadena)=>{
    let cadenasep=cadena.split(",")
    //console.log(cadenasep)
    let arrayTexto=[];
    for (let i = 0; i < cadenasep.length; i++) {
        const element = parseInt(cadenasep[i]);
        arrayTexto.push(zfill(element.toString(2),7))
    }
    //console.log(arrayTexto)
    return arrayTexto;
}


const toBinario =(cadena)=>{
    let arrayTexto=[];
    for (let i = 0; i < cadena.length; i++) {
        const element = cadena.charCodeAt(i);
        arrayTexto.push(zfill(element.toString(2),7))
    }
    //console.log(arrayTexto)
    return arrayTexto;
}

const ObtenerXOR =(arraytexto,arrayclave)=>{
    let arrayXOR=[];
    let binarioXOR=[];

    arraytexto.forEach((element,index) => {
        const clavebin= arrayclave[index]
        //console.log(element)
        //console.log(clavebin)
        for (let i = 0; i < element.length; i++) {
            //binariotexto[i]=element[i] 
            //binarioclave[i]=clavebin[i] 
            if(element[i] != clavebin[i] ){
                binarioXOR[i]=1
            }else{
                binarioXOR[i]=0
            }
        }
        //console.log(binarioXOR)
        arrayXOR[index]=binarioXOR.join("") 
       // console.log[arrayXOR[index]]
    });
    //console.log(arrayXOR)
    return arrayXOR;
}



function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}



module.exports={
    encriptar,
    desencriptar
}