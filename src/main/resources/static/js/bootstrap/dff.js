var room = 1;

function education_fields() {

    room++;
    var objTo = document.getElementById('education_fields')
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = "<div class='input-group mb-3' title=" + room + "><input type='file' name='file' class='form-control' required=''> <div class='help-block'></div><div class='input-group-append'><button class='btn btn-danger' type='button' onclick='remove_education_fields(" + room + ");'><i class='fa fa-minus'></i></button></div></div>";

    objTo.appendChild(divtest)
}

function remove_education_fields(rid) {
    $('.removeclass' + rid).remove();
}
