const inpunt = document.querySelector('#prix');
const error = document.querySelector('small');
const formulaire = document.querySelector('#formulaire');
const instructions = document.querySelector('#instructions');
let coup = 0;
let muberP;
let nombreAléatoire = Math.floor(Math.random() * Math.floor(1000));
console.log(nombreAléatoire);

function verifier(nobure) {
    let instructions = document.createElement('div');

    if (nobure < nombreAléatoire) {
        instructions.textContent = `#${coup} (${nobure}) c'est plus`;
        instructions.className = " instruction plus";

    } else if (nobure > nombreAléatoire) {
        instructions.textContent = `#${coup} (${nobure}) c'est moins`;

        instructions.className = " instruction moins";


    } else {
        instructions.textContent = `#${coup} (${nobure}) c'est le bon nombre !`;
        instructions.className = " instruction fini";
        inpunt.style.display = "none";
        let button = document.querySelector('button');
        button.innerHTML = "<button type='submit' class='btn btn-primary'>recommencer</button>";
        button.addEventListener('click', () => {
            location.reload();
        })


    }
    document.querySelector('#instructions').prepend(instructions);

}

error.style.display = 'none';


inpunt.addEventListener('keyup', () => {
    if (isNaN(inpunt.value)) {
        error.style.display = 'inline';
    } else {
        error.style.display = 'none';
    }
})

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(inpunt.value) || inpunt.value == '') {
        inpunt.style.borderColor = 'red';
    } else {
        coup++;
        inpunt.style.border = 'silver';
        muberP = inpunt.value;
        inpunt.value = '';
        verifier(muberP)
    }
})