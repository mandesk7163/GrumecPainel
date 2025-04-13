
const typeText = "grumec && acesso";
let i = 0;

function typeTerminal() {
  if (i < typeText.length) {
    document.getElementById("typed").innerText += typeText[i];
    i++;
    setTimeout(typeTerminal, 200);
  } else {
    setTimeout(() => {
      document.getElementById("terminal").style.display = 'none';
      document.getElementById("eye-container").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("eye-container").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
      }, 2000);
    }, 500);
  }
}

window.onload = typeTerminal;

async function consultarBIN() {
  const bin = prompt("Digite BIN:");
  const res = await fetch(`https://lookup.binlist.net/${bin}`);
  const data = await res.json();
  mostrar(data);
}

function gerarCPF() {
  function rand(n) { return Math.floor(Math.random() * n); }
  let n = [];
  for (let i = 0; i < 9; i++) n.push(rand(10));
  n[9] = (n[0]*10+n[1]*9+n[2]*8+n[3]*7+n[4]*6+n[5]*5+n[6]*4+n[7]*3+n[8]*2)%11;
  n[10] = (n[0]*11+n[1]*10+n[2]*9+n[3]*8+n[4]*7+n[5]*6+n[6]*5+n[7]*4+n[8]*3+n[9]*2)%11;
  mostrar({cpf: n.join('')});
}

async function consultarCVE() {
  const cve = prompt("Digite o CVE:");
  const res = await fetch(`https://cve.circl.lu/api/cve/${cve}`);
  const data = await res.json();
  mostrar(data);
}

async function gerarPessoa() {
  const res = await fetch("https://randomuser.me/api/?nat=br");
  const data = await res.json();
  mostrar(data.results[0]);
}

async function consultarCEP() {
  const cep = prompt("Digite o CEP:");
  const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await res.json();
  mostrar(data);
}

async function consultarIP() {
  const ip = prompt("Digite o IP:");
  const res = await fetch(`https://ipapi.co/${ip}/json/`);
  const data = await res.json();
  mostrar(data);
}

function metaDados() {
  document.getElementById("imagem").click();
}

function lerMetadados(input) {
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function() {
    mostrar({nome: file.name, tipo: file.type, tamanho: file.size + " bytes"});
  };
  reader.readAsDataURL(file);
}

function mostrar(data) {
  document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}
