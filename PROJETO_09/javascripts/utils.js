function $(elemento, contexto) {
    if(contexto){
        return contexto.querySelector(elemento);
    } else {
        return document.querySelector(elemento);
    }
}