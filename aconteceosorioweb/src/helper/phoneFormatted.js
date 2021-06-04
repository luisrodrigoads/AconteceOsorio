
function phoneFormatted(phone){
    var phoneCorrect = phone;
    phoneCorrect = phoneCorrect.replace(/[^\d]/g,"");

    return phoneCorrect.replace(/(\d{2})(\d{5})(\d{4})/,"($1) $2-$3");
}

export default phoneFormatted;