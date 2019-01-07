function buildCharts(field, data) {
    const groupped = _.groupBy(data, function(it) {
        return it.questions
    });

    console.log(groupped);
}

function formData(formId, data) {
    $('#answers-qtd').text(data.length);

    $(data[0].questions).each(function(index, field){
        const question = field[0];
        $('#fields-select').append(
            $('<option>', {
                value: question.question,
                text: question.question
            })
        )
    })

    $('#fields-select').change(function(event) {
        const fieldSelected = $(event.target).val();
        buildCharts(fieldSelected, data);
    });

}

$(document).ready(function(){
    const formId = $('#form-data').val();
    $.get('/forms/recoverdata/' + formId)
        .then(function(response) {
            if(response.length > 0) {
                formData(formId, response);
            } else {
                $('#nothing-to-display').show();
                $('#form-data').hide();
            }
        })
        .catch(function(err){
            $.notify(err, "danger");
        })
});