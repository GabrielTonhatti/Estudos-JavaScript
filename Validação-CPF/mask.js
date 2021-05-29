$(function(){
   /* $("#cpf-validate").inputmask({
      mask: "999.999.999-99"
    });
    
    $("#frmNumero").inputmask();*/

    $('#telephone').inputmask({
        mask: '+99 (99) 9999-9999'
    })

    $("#frmNumero").inputmask();

    $('#celphone').inputmask({
        mask: '+99 (99) 99999-9999'
    })

    $("#frmNumero").inputmask();

    $('#CEP').inputmask({
        mask: '99.999-999'
    })
  });

  VMasker(document.getElementById("cpf-validate")).maskPattern("999.999.999-99");
  VMasker(document.getElementById("frmNumero")).maskNumber();