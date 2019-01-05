function formData(formId, data) {
    console.log(data);
}

$(document).ready(function(){
    const formId = $('#form-data').val();
    $.get('/forms/recoverdata/' + formId)
        .then(function(response) { 
            formData(formId, response);
        })
        .catch(function(){
            //!TODO: Handle Error
        })
});