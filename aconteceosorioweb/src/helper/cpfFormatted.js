
function cpfFormatted(cpf){
    var cpfCorrect = cpf;
    cpfCorrect = cpfCorrect.replace(/[^\d]/g,"");

    return cpfCorrect.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");
}

export default cpfFormatted;