const fieldFactory = (function ($){
    return {
      build: function (definition) {
        const formGroup = $('<div>', { class: 'form-group' });
        formGroup.append($('<label>', {
          text: definition.text,
          labelFor: definition.name
        }));

        formGroup.append($('<input>', {
          type: definition.type,
          class: 'form-control',
          name: definition.name
        }));

        if(definition.onBlur) {
          $('[name="'+definition.name+'"]').blur(definition.onBlur);
        }

        return formGroup;
      }
    };
})(jQuery)
