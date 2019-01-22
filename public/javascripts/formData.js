function formData(formId, data) {
    $('#answers-qtd').text(data.length);
    const flattenForms = _.flatten(
        data.map(function(form, index) {
            return form.questions;
        })
    )
    
    for(let index in flattenForms) {
        const form = flattenForms[index];
        console.log(form);
    }

    const mappedQuestions = flattenForms.map(function(question){
        return {
            question: question["0"].question,
            answer: question["0"].answer
        }
    });

    const tableData = _.groupBy(mappedQuestions, function(question){
        return question.question;
    });

    const chartData = _.groupBy(mappedQuestions, function(question){
        return question.answer;
    })

    console.log(chartData);
    console.log(tableData);
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