
// Saudação dinâmica no index.html
document.addEventListener("DOMContentLoaded", () => {
  const saudacaoEl = document.getElementById("saudacao");
  if (saudacaoEl) {
    const hora = new Date().getHours();
    let msg = "Bem-vindo(a)!";
    if (hora >= 5 && hora < 12) msg = "Bom dia!";
    else if (hora >= 12 && hora < 18) msg = "Boa tarde!";
    else msg = "Boa noite!";
    saudacaoEl.textContent = msg;
  }
});

// Validação do formulário em cadastro.html
(function () {
  "use strict";
  const form = document.getElementById("cadastroForm");
  if (!form) return;

  // Define data mínima como hoje
  const dataInput = document.getElementById("data");
  if (dataInput) {
    const hoje = new Date().toISOString().split("T")[0];
    dataInput.setAttribute("min", hoje);
  }

  // Define horário entre 09:00 e 20:00
  const horaInput = document.getElementById("hora");
  if (horaInput) {
    horaInput.setAttribute("min", "09:00");
    horaInput.setAttribute("max", "20:00");
  }

  // Requer endereço apenas para entrega
  const servicoEntrega = document.getElementById("entrega");
  const enderecoInput = document.getElementById("endereco");
  if (servicoEntrega && enderecoInput) {
    servicoEntrega.addEventListener("change", () => {
      enderecoInput.required = true;
    });
    document.getElementById("retirada").addEventListener("change", () => {
      enderecoInput.required = false;
    });
  }

  // Bootstrap validation
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      document.getElementById("msgSucesso").classList.remove("d-none");
      form.reset();
    }
    form.classList.add("was-validated");
  }, false);
})();
