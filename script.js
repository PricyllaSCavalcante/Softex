document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnComparar");
    const maiorEl = document.getElementById("maior");
    const menorEl = document.getElementById("menor");
    const iguaisEl = document.getElementById("iguais");

    btn.addEventListener("click", () => {
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);
        let n3 = Number(document.getElementById("num3").value);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            alert("Por favor, insira três números válidos.");
            return;
        }

        // Encontrar maior
        let maior = Math.max(n1, n2, n3);
        // Encontrar menor
        let menor = Math.min(n1, n2, n3);

        maiorEl.innerHTML = `Maior número: <span class="negrito">${maior}</span>`;
        menorEl.innerHTML = `Menor número: <span class="negrito">${menor}</span>`;

        // Verificar iguais
        if (n1 === n2 && n2 === n3) {
            iguaisEl.textContent = "Todos os números são iguais.";
        } else if (n1 === n2 || n1 === n3 || n2 === n3) {
            iguaisEl.textContent = "Existem números iguais.";
        } else {
            iguaisEl.textContent = "Todos os números são diferentes.";
        }
    });
});
