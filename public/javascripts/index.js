$(document).ready(function(){
  const $field = $('#fields');
  $('[name="field-types"]').change(function(ev) {
    $field.children().remove();

    const selectedField = $(ev.target).val();
    if(selectedField === 'textfield') {
      textfield.build($field);
    }

    if(selectedField === 'selectfield') {
      selectfield.build($field);
    }
  });
})
