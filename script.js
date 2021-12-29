


/*
function contas () {
  let num1 = prompt("Digite um número")
  let num2 = prompt("Digite outro número")
  let conta = parseInt(num1)+ parseInt(num2)
  alert(`A soma de ${num1} + ${num2} é ${conta}`);
  }

/*


// notas sobre o exercicio IMC do curso da udemy
//capturar o evento de submit do formulario [para parar o envio do form]
// fazer um form no html
// label for="peso"  -> input id="peso"/
//
//
//
//
//
//
//
//
//
//
/*
//
//
//const form = document.querySelector('#form') [nome do id]
//
//
//form.addEventListener('submit', function (evento){
//     evento.preventDefault();
//     const inputPeso = evento.target.querySelector("#peso")
//     const inputAltura = evento.target.querySelector("#altura")
//     const peso = Number(inputPeso.value)
//     const altura = Number(inputAltura.value)
//      if (!peso) {
//        setResultado('Peso inválido!', false)
//        return
//       }
//       if (!altura) {
//        setResultado('Altura inválida!', false)
//        return
//       }
//
//      const imc = getImc(peso, altura);
//      const nivelImc = getNivelImc(imc);
//
//      const msg = `Seu IMC é ${imc} (${nivelImc})`
//
//      setResultado(msg, true)
//  });
//
// function setResultado (msg) {
//    const resultado = document.querySelector('#resultado');
//    resultado.innerHTML = ''; [limpar o inner HTML]
//    const p = document.createElement('p') [criar um paragrafo e jogar pra uma variável]
//    p.classList.add('paragrafo-resultado'); [criar uma classe para ele]
//    p.innerHTML = 'Qualquer coisa'; [joga essa string pro html do p, que ainda nao ta na tela pq nao foi add a const resultado]
//    resultado.appendChild(p); [pega o elemento p e o faz filho de resultado]
//
//  }
//
//  ou separando em duas funções
//
//  function criaP() {
//    const p = document.createElement('p');
//     return p
//  }
//
//  function setResultado (msg, isValid) {
//    const resultado = document.querySelector('#resultado');
//    resultado.innerHTML = '';
      const p = criaP();

      if (isValid) {
      p.classList.add('paragrafo-resultado') [paragrafo verde editado no css]
    } else {
      p.classList.add('bad')  [paragrafo de fundo vermelho]
  }

//    p.innerHTML = msg;
//    resultado.appendChild(p)
//  }
//
//  function getImc(peso, altura) {
//      const imc = peso / altura ** 2;
//      return imc.toFixed(2);
//    }
//
//  function getNivelImc(imc) {
//  const nivel = ['Abaixo do peso', 'peso normal', 'sobrepeso',
//      'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];
//
//    if (imc >= 39.9) {
//       return nivel[5];   [blocos de uma linha podem ser tirados dos curly brackets]
//      } else if (imc >= 34.9) {
//        return nivel[4];
//  }      else if (imc >= 29.9) {
//        return nivel[3];
//  }       else if (imc >= 24.9) {
//        return nivel[2];
//  }      else if (imc >= 18.5) {
//        return nivel[1];
//        else if (imc < 18.5) return nivel[0];
//
//
//
//
//  }
//
//
/







 */
 //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function CalculoIMC () {

  const inputPeso = document.querySelector('#peso');
  const peso = Number(inputPeso.value);

  if (!peso) {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = 'Peso digitado inválido';
    return
  }

  const inputAltura = document.querySelector('#altura')
  const altura = Number(inputAltura.value)
  if (!altura) {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = 'Altura digitada inválida';
    return
   }


  var valor = peso / (altura**2);
  valorDec = valor.toFixed(2);
  let resultado = document.querySelector('#resultado')
  resultado.innerHTML = `Seu IMC é de ${valorDec}`;
  alert (`Seu IMC é de ${valorDec}`)


  if (valorDec < 18.50) {
    let magreza = "Classificação: magreza (IMC menor que 18,5)"
    document.getElementById("textoIMC").innerHTML = magreza;
  }
    else if (valorDec >= 18.50 && valorDec <= 24.90) {
      let normal = "Classificação: normal (IMC entre 18,5 e 24,9)"
      document.getElementById("textoIMC").innerHTML = normal;
    }
    else if (valorDec >= 25.00 && valorDec <= 29.90) {
      let sobrepeso = "Classificação: sobrepeso (IMC entre 25,0 e 29,9)"
      document.getElementById("textoIMC").innerHTML = sobrepeso;
    }
    else if (valorDec >= 30.00 && valorDec <= 39.90) {
      let obesidade = "Classificação: obesidade (IMC entre 30,0 e 39,9)"
      document.getElementById("textoIMC").innerHTML = obesidade;
    }
    else if (valorDec >= 40.00) {
      let obesidadeGrave = "Classificação: obesidade grave (IMC maior que 40,0)"
      document.getElementById("textoIMC").innerHTML = obesidadeGrave;
    }
    else {
      ''
    }
}
