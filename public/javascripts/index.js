$(document).ready(function () {
  const $field = $('#fields');
  let currentField = null;

  $('[name="field-types"]').change(function (ev) {
    $field.children().remove();

    const selectedField = $(ev.target).val();
    if (selectedField === 'textfield') {
      textfield.setField($field);
      currentField = textfield;
    }

    if (selectedField === 'selectfield') {
      selectfield.setField($field);
      currentField = selectfield;
    }

    if(selectedField === 'datefield') {
      datefield.setField($field);
      currentField = datefield;
    }

    if(selectedField === 'choicesfield') {
      choicesField.setField($field);
      currentField = choicesField;
    }
  });

  $('[name="add-field"]').click(function () {
    const field = currentField.getField();
    form.addField(field);

    $field.children().remove();
    $('[name="field-types"]').val(0);
  });

  $('[name="save"]').click(function() {
    form.setName($('[name="name"]').val());
    form.setValidate($('[name="validUntil"]').val());

    if(form.isValid()) {
      form.save()
        .then(function(response){
          const link = $('<a>', {
            href: '/form/' + response, 
            target: '_blank',
            style: 'display: none'
          });
          $(document.body).append(link);

          link.click();
        });
    } else {
      $(form.validationErrors).each(function(index, error) {
        console.log(error);
      }); 
    }
  })
})
