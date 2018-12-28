const textfield = (function ($) {
  return {
    setField: function (base) {
      base.append(fieldFactory.build({
        text: 'Enter your question',
        name: 'question',
        type: 'text'
      }));

      base.append(fieldFactory.build({
        text: 'Default Text',
        name: 'default-text',
        type: 'text'
      }));

      base.append(fieldFactory.build({
        text: 'Minimum Size',
        name: 'minSize',
        type: 'number'
      }));

      base.append(fieldFactory.build({
        text: 'Maximun Size',
        name: 'maxSize',
        type: 'number'
      }));
    },

    getField: function () {
      return {
        type: 'textfield',
        question: $('[name="question"]').val(),
        defaultText: $('[name="default-text"]').val(),
        minSize: $('[name="minSize"]').val(),
        maxSize: $('[name="maxSize"]').val()
      }
    },

    build: function (field) {
      const $formGroup = $('<div>', { class: 'form-group' });
      const $label = $('<label>', { text: field.question });
      const $input = $('<input>', {
        class: 'form-control',
        value: field.defaultText
      });

      if(field.minSize) $input.attr('min', field.minSize);
      if(field.maxSize) $input.attr('min', field.maxSize);

      $formGroup.append($label);
      $formGroup.append($input);

      return $formGroup;
    }
  }
})(jQuery)
