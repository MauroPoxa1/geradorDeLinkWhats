var navBox = document.querySelector('#navBox');
var navListaURL = document.querySelector('.nav__lista');
var fechar = document.querySelector('.fechar');
var el;

fechar.addEventListener('click', function() {
    modalAbrirModal();
});

navBox.addEventListener('click', function() {
    navListaURL.classList.toggle('ativo');
});

var btnClick = document.getElementById("botaoGerador");
btnClick.addEventListener('click',  function()  {
    var mensagem = document.getElementById("sms").value;
    var numero = document.getElementById("numero").value;
    if (numero.length<9){
        var el = document.getElementById("inf-erro");
        el.innerHTML="Número acima está faltando "+ (9 - numero.length)+" digitos";
        el.classList.add('inf-erro-ativo');
        el.focus;
    }else{
    linkGarar(numero,mensagem);
    }
});



function linkGarar(a,b){
if (b==0){
    b = "";
}else {
    b = '&text='+b;
}
var mensagemCompleta = 'https://api.whatsapp.com/send?phone=55'+a+b;
console.log(mensagemCompleta );
var valor = mensagemCompleta;
$.getJSON( " https://is.gd/create.php?callback=", {
url:  valor,
format: "json"
}).done(function(  data ) {
let novolink = "https://go.ppoxa.com/?w=" + data.shorturl;
novolink = novolink.replace("https://is.gd/", "" );
novolink = novolink.replace("https://go.ppoxa.com/?w=3uqj8S", "Erro campo vazio" );
modalAbrirModal(novolink,mensagemCompleta);
});
}

function modalAbrirModal(a,b){
        linkCurto.innerHTML=a;
        linkCompleto.innerHTML=b;
        el = document.querySelector('.modal');
        el.classList.toggle('modal-ativo');
}

window.onkeyup = function(a){
    if (a.key==="Escape" && el.classList.contains('modal-ativo')){
        modalAbrirModal();
    }
}

document.querySelector("#btnLinkCurto").onclick= function() {copy('#linkCurto');}
document.querySelector("#btnLinkCompleto").onclick= function() {copy('#linkCompleto');}

// document.querySelector('#linkCompleto').select;
// document.execCommand('copy')

function copy(a){
    document.querySelector(a).select();
    document.execCommand('copy');
    var info = document.querySelector('#inf-modal');
    info.classList.add('inf-modal-copy');
    info.inf-modal.focus();
}
