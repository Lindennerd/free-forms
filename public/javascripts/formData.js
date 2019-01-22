function formData(formId, data) {
    const headers = data._id;
    const content = data.answers;
    const $table = $('table');

    $(data._id).each(function(index, question) {
        $('thead', $table).append($('<th>', {text: question}));
    });

    $(data.answers).each(function(x, answerList) {
        const $row = $('<tr>');
        const $tbody = $('tbody', $table);
        $(answerList).each(function(y, answer) {
            $row.append(
                $('<td>', { text: answer })
            );
        })

        $tbody.append($row);
    });
}

$(document).ready(function(){
    const formId = $('#form-data').val();
    $.get('/forms/recoverdata/' + formId)
        .then(function(response) {
            if(response.length > 0) {
                formData(formId, response[0]);
            } else {
                $('#nothing-to-display').show();
                $('#form-data').hide();
            }
        })
        .catch(function(err){
            $.notify(err, "danger");
        })
});