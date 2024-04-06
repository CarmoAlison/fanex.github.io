function ClickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function Calcular() {
    var unidadeI = Number(document.getElementById('calAdmU1').value);
    var unidadeII = Number(document.getElementById('calAdmU2').value);
    var unidadeIII = Number(document.getElementById('calAdmU3').value);
    var unidadeIV = Number(document.getElementById('calAdmU4').value);

    var aula1 = Number(document.getElementById('aula1').value);
    var aula2 = Number(document.getElementById('aula2').value);
    var aula3 = Number(document.getElementById('aula3').value);
    var aula4 = Number(document.getElementById('aula4').value);

    var provaN2 = Number(document.getElementById('provaN2').value);

    var mediaUnidade = (Number(unidadeI) + Number(unidadeII) + Number(unidadeIII) + Number(unidadeIV)) / 4;
    var mediaFinalUnidade = mediaUnidade * 0.4;

    var mediaAula = (Number(aula1) + Number(aula2) + Number(aula3) + Number(aula4)) / 4;
    var mediaFinalAula = mediaAula * 0.1;

    var mediaProvaN2 = provaN2 * 0.6;

    var mediafinalAdm = Number(mediaFinalUnidade) + Number(mediaFinalAula) + Number(mediaProvaN2);

    var faltaNota = 6 - Number(mediafinalAdm);

    document.getElementById("resultadoMedia").innerHTML = mediafinalAdm.toFixed(0);
    console.log(mediafinalAdm)
    document.getElementById("faltaNota").innerHTML = faltaNota.toFixed(0);
    console.log(mediafinalAdm)


}
function CalcularEnf() {
    var unidadeI = Number(document.getElementById('calenfU1').value);
    var unidadeII = Number(document.getElementById('calenfU2').value);
    var unidadeIII = Number(document.getElementById('calenfU3').value);
    var unidadeIV = Number(document.getElementById('calenfU4').value);

    var provaN2 = Number(document.getElementById('enfProvaN2').value);

    var mediaUnidade = (Number(unidadeI) + Number(unidadeII) + Number(unidadeIII) + Number(unidadeIV)) / 4;
    var mediaFinalUnidade = mediaUnidade * 0.4;

    var mediaProvaN2 = provaN2 * 0.6;

    var mediafinalEnf = Number(mediaFinalUnidade) + Number(mediaProvaN2);

    var faltaNotaEnf = 6 - Number(mediafinalEnf);

    document.getElementById("resultadoEnf").innerHTML = mediafinalEnf.toFixed(0);
    console.log(mediafinalEnf)
    document.getElementById("faltaNotaEnf").innerHTML = faltaNotaEnf.toFixed(0);
    console.log(mediafinalEnf)


}

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('start')
        }else{
            entry.target.classList.remove('start')
        }
    })
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));

const myObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('startPri')
        }else{
            entry.target.classList.remove('startPri')
        }
    })
});

const elements2 = document.querySelectorAll('.hiddenPri');
elements2.forEach((element) => myObserver.observe(element));