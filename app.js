import funcionarios from "./funcionarios.json" with {type: "json"};

funcionarios.forEach((funcionario) => {
    const body = document.querySelector('body');

    const div = document.createElement('div');
    div.classList.add("card");

    const picture = document.createElement('picture');
    picture.style.backgroundImage = `url("./img/${funcionario.imagem}")`; 
    div.appendChild(picture);

    const p = document.createElement('p');
    p.innerText = funcionario.nome;
    div.appendChild(p);

    const span = document.createElement('span');
    span.innerText = funcionario.cargo;
    div.appendChild(span);

    body.appendChild(div);
});
