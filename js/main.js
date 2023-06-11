const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

const selectElem = document.getElementById("select");
const pElem = document.getElementById("p");

// When a new <option> is selected
selectElem.addEventListener("change", () => {
  const index = selectElem.selectedIndex;
  const valor = selectElem.value;

  switch (valor) {
    case "amarelo":
      document.querySelector(".robo").src =
        "../img/robotron/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png";
      break;
    case "preto":
      document.querySelector(".robo").src =
        "../img/robotron/Robotron 2000 - Preto/Robotron 2000 - Preto.png";
      break;
    case "azul":
      document.querySelector(".robo").src =
        "../img/robotron/Robotron 2000 - Azul/Robotron 2000 - Azul.png";
      break;
    case "vermelho":
      document.querySelector(".robo").src =
        "../img/robotron/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png";
      break;
    case "rosa":
      document.querySelector(".robo").src =
        "../img/robotron/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png";
      break;
    default:
      break;
  }
});

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatistica(evento.target.dataset.peca);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatistica(peca) {
  console.log(pecas[peca]);
  estatisticas.forEach((elemento) => {
    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
  });
}
