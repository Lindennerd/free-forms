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

    if (selectedField === 'datefield') {
      datefield.setField($field);
      currentField = datefield;
    }

    if (selectedField === 'choicesfield') {
      choicesField.setField($field);
      currentField = choicesField;
    }
  });

  $('[name="add-field"]').click(function () {
    const field = currentField.getField();
    formRegister.addField(field);

    $field.children().remove();
    $('[name="field-types"]').val(0);
  });

  $('[name="save"]').click(function () {
    formRegister.setName($('[name="name"]').val());
    formRegister.setValidate($('[name="validUntil"]').val());
    formRegister.setPassword($('#pwd').val(), $('#pwdConfirmation').val())

    if (formRegister.isValid()) {
      formRegister.save()
        .then(function (response) {
          window.open('/forms/ ' + response, '_blank');
        });
    } else {
      $(formRegister.validationErrors).each(function (index, error) {
        $.notify(error, "error");
      });

      formRegister.clearErrors();
    }
  })
})
