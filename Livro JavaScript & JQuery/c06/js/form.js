var elForm, elSelectPackage, elPackageHint, elTerms;    // Declara as variáveis
elForm = document.getElementById('formSignup'); // Armazena os elementos
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {    // Declara a função
    var package = this.options[this.selectedIndex].value;   // Obtem a opção selecionada
    if(package == 'monthly'){   // Se monthly = package
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';    // Exibe esta msg
    } else {    // Caso contrário
        elPackageHint.innerHTML = 'Wise choice!';   // Exibe esta msg
    }
}

function checkTerms(event) {    // Declara a função
    if (!elTerms.checked) { // Se checkboz marcado
        elTermsHint.innerHTML = 'You must agree to the terms.'; // Exibe a msg
        event.preventDefault(); // Não envia o form
    }
}

// Cria ouvintes de evento: submit chama checkTerms(), change chama packageHint();
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);