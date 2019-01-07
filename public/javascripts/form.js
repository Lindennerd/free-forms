function loadForm(form) {

    $('#form>.card-body>.card-title').text(form.name);
    var formId = $('#form-id').val().trim();

    $('#view-data').attr('href', '/forms/data/' + formId);

    $(form.fields).each(function (index, field) {
        if (field.type === 'textfield') {
            const fieldGroup = textfield.build(field);
            $('#form>.card-body').append(fieldGroup);
        }

        if (field.type === 'selectfield') {
            const fieldGroup = selectfield.build(field);
            $('#form>.card-body').append(fieldGroup);
        }

        if (field.type === 'datefield') {
            const fieldGroup = datefield.build(field);
            $('#form>.card-body').append(fieldGroup);
        }

        if (field.type === 'choicesfield') {
            const fieldGroup = choicesField.build(field);
            $('#form>.card-body').append(fieldGroup);
        }
    });

    $('[name="send"]').click(function () {
        const questions = $('.form-group').map(function (index, el) {
            return {
                question: $('label', el).text(),
                answer: $('input, select', el).val()
            }
        });

        $.ajax({
            url: '/forms/save',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                form: formId,
                questions: questions
            })
        }).then(function (response) {
            $.notify("Form sent to Server successfully!", "success");
            clearAnswers();
        }).catch(function (error) {
            console.log(error)
        });
    });


    function clearAnswers() {
        $('.form-group').each(function(index, el){
            $('input, select', el).val("");
        });
    }
}

$(document).ready(function () {
    const formId = $('#form-id').val();
    $.get('/forms/getById/' + formId)
        .then(loadForm)
        .fail(function (err) {
            $.notify(err.responseText);
        })


    
});