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
  });

  $('[name="add-field"]').click(function () {
    const field = currentField.getField();
    form.addField(field);

    $field.children().remove();
    $('[name="field-types"]').val(0);
  });
})
