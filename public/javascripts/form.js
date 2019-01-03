function loadForm(form) {
    $('#form>.card-body>.card-title').text(form.name);

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
}

$(document).ready(function () {
    const formId = $('#form-id').val();
    $.get('/forms/getById/' + formId)
        .then(loadForm)
        .fail(function (err) {
            console.error(err);
        })


    $('[name="send"]').click(function () {
        const questions = $('.form-group').map(function (index, el) {
            return {
                question: $('label', el).text(),
                answer: $('input', el).val()
            }
        });

        $.ajax({
            url: '/forms/save',
            method: 'POST',
            contentType: 'application/json',
            data: {
                form: $('#form-id').val(),
                questions: questions
            }
        }).then(function (response) {
            //!TODO: Implement messages service
        }).catch(function (error) {
            console.log(error)
        });

    });
});