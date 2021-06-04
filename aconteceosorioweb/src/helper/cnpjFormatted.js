
function cnpjFormatted(cnpj){
    var cnpjCorrect = cnpj;
    cnpjCorrect = cnpjCorrect.replace(/[^\d]/g,"");

    return cnpjCorrect.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5");
}

export default cnpjFormatted;