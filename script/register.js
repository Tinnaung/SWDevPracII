function check(){
    let store_name = document.getElementById("store-name");
    let reg_name = document.getElementById("store-regname");
    let tel = document.getElementById("store-tel");
    let chair_num = document.getElementById("store-chair");
    var message = "Congratulations ! You have already submitted this form.";
    if (tel.value == ""){
        message = "invalid telephone number !";
        invalidColor(tel);
    } else{validColor(tel);}
    if ((chair_num.value < 1) || (chair_num.value > 10)){
        message = "chair's number can be 1-10 only !";
        invalidColor(chair_num);
    } else{validColor(chair_num);}
    if (reg_name.value == ""){
        message = "invalid register's name !";
        invalidColor(reg_name);
    } else{validColor(reg_name);}
    if (store_name.value == ""){
        message = "invalid store's name !";
        invalidColor(store_name);
    } else{validColor(store_name);}
    alert(message);
}

function invalidColor(element){
    element.style.border = "thick solid #f01e2c";
}

function validColor(element){
    element.style.border = "none";
}