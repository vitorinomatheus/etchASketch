function criarQuadro (tamanho) {
    let grade = document.querySelector('.grade');
    let quadra = grade.querySelectorAll('div');
    let total = tamanho * tamanho;

    quadra.forEach((div) => div.remove());
    grade.style.gridTemplateColumns = `repeat(${tamanho}, 1fr)`;
    grade.style.gridTemplateRows = `repeat(${tamanho}, 1fr)`;

    for (let i = 0; i < total; i++){
        const pixel = document.createElement('div');
        const grade = document.querySelector('.grade');
        const val = document.querySelector('input').value;
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black';
        });
        //Adicionar classe
        pixel.classList.toggle('pixel');
        
        //Adicionar quadrados no div
        grade.insertAdjacentElement("beforeend", pixel); 
    }
}

function mudarTamanho() {
    let entrada = 16;
    const btn = document.querySelector('#modQuadro');
    btn.addEventListener('click', () => {
        if(entrada == 16){
            entrada = 32;
            btn.textContent = '32 x 32';
            criarQuadro(entrada);
        }

        else if(entrada == 32){
            entrada = 64;
            btn.textContent = '64 x 64';
            criarQuadro(entrada);
        }

        else if(entrada == 64){
            entrada = 16;
            btn.textContent = '16 x 16';
            criarQuadro(entrada);
        }
    })

    criarQuadro(entrada);
}

function apagar() {
    const pixel = document.querySelectorAll('.pixel');
    const btn = document.querySelector('#reset');

    btn.addEventListener('click', () => {
        pixel.forEach((pixel) => {
            pixel.style.backgroundColor = 'white';
        })
    })
}

mudarTamanho();
apagar();