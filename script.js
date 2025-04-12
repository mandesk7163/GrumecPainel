
async function consultarBIN() {
  const bin = prompt("Digite os 6 dígitos do BIN:");
  const res = await fetch(`https://lookup.binlist.net/${bin}`);
  const data = await res.json();
  document.getElementById("resultado").innerText = JSON.stringify(data, null, 2);
}

function gerarCPF() {
  function rand(n) {
    return Math.floor(Math.random() * n);
  }
  let n = [];
  for (let i = 0; i < 9; i++) n.push(rand(10));
  n[9] = (n[0]*10+n[1]*9+n[2]*8+n[3]*7+n[4]*6+n[5]*5+n[6]*4+n[7]*3+n[8]*2)%11;
  n[10] = (n[0]*11+n[1]*10+n[2]*9+n[3]*8+n[4]*7+n[5]*6+n[6]*5+n[7]*4+n[8]*3+n[9]*2)%11;
  document.getElementById("resultado").innerText = "CPF Gerado: " + n.join('');
}

async function consultarCVE() {
  const cve = prompt("Digite o CVE (ex: CVE-2023-12345):");
  const res = await fetch(`https://cve.circl.lu/api/cve/${cve}`);
  const data = await res.json();
  document.getElementById("resultado").innerText = JSON.stringify(data, null, 2);
}

async function gerarPessoa() {
  const res = await fetch("https://randomuser.me/api/?nat=br");
  const data = await res.json();
  document.getElementById("resultado").innerText = JSON.stringify(data.results[0], null, 2);
}
