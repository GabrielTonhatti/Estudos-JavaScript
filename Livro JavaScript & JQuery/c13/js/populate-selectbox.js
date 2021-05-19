(function () {
    var type = document.getElementById('equipmentType'),    // Caixa de seleção type
        model = document.getElementById('model'),   // Caixa de seleção model
        cameras = { // Objeto armazena cameras
            bolex: 'Bolex Paillad H8',
            yashica: "Yashica 30",
            pathescape: 'Pathescape Super-8 Relax',
            canon: 'Canon 512'
        },
        projectors = {  // Armazena projectors
            kodak: 'Kodak Instamatic M55',
            bolex: 'Bolex Sound 715',
            eumig: 'Euming Mark S',
            sankyo: 'Sankyo Dualux'
        };

    // Quando o usuário muda caixa de seleção type
    addEvent(type, 'change', function() {
        if (this.value === 'choose') {  // Nenhuma seleção foi feita
            model.innerHTML = '<options> Please choose a type first </options>'
            return; // Não é necessário prosseguir
        }
        var models = getModels(this.value); // Seleciona o objeto certo

        // LOOP PELAS OPÇÕES NO OBJETO PARA CRIAR OPÇÕES
        var options = '<options> Please choose a model </options>';
        for (var key in models) {
            options += '<option value="' + key + '">' + models[key] + '</option>';

            console.log(key)
        } // SE UMA OPÇÃO PODE CONTER ASPAS, A CHAVE DEVE SER ESCAPADA
        model.innerHTML = options;  // Atualiza caixa de seleção
    });

    function getModels(equipmentType){
        if (equipmentType === 'cameras') {  // Se type for cameras
            return cameras; // Retorna o objeto cameras
        } else if (equipmentType === 'projectors') {    // Se type for projectors
            return projectors;  // Retorna o objeto projectors
        }
    }


}());