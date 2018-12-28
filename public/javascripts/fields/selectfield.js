const selectfield = (function ($) {

  const $listGroup = $('<ul>', {
    class: 'list-group',
    style: 'margin-top: 1em'
  });

  function removeOption(ev) {
    var $li = $(ev.target).parent();
    $li.remove();
  }

  function addOption() {
    if ($('[name="new-option"]').val() == "") {
      return;
    }

    const $li = $('<li>', {
      class: 'list-group-item d-flex justify-content-between align-items-center',
      text: $('[name="new-option"]').val()
    });

    const $span = $('<span>', {
      class: 'badge badge-danger badge-pill',
      style: 'cursor: pointer;',
      text: 'x',
      click: removeOption
    });

    $li.append($span);
    $listGroup.append($li);
    $('[name="new-option"]').val('')
  }

  return {
    setField: function (base) {
      base.append(fieldFactory.build({
        text: 'Enter your question',
        name: 'question',
        type: 'text'
      }));

      base.append(fieldFactory.build({
        text: 'Enter an Option',
        name: 'new-option',
        type: 'text',
        onBlur: addOption
      }));

      base.append($('<button>', {
        class: 'btn btn-primary',
        text: 'Add Option',
        click: addOption
      }));

      base.append($listGroup);
    },

    getField: function () {
      return {
        type: 'selectfield',
        question: $('[name="question"').val(),
        options: $('.list-group-item').map(function (index, item) {
          return item.textContent;
        })
      }
    },

    build: function (field) {
      const $formGroup = $('<div>', { class: 'form-group' });
      const $select = $('<select>', { class: 'form-control' });
      const $label = $('<label>', { text: field.question });

      field.options.each(function (index, option) {
        const $option = $('<option>', { text: option });
        $select.append($option);
      });

      $formGroup.append($label);
      $formGroup.append($select);

      return $formGroup;
    }


  };
})(jQuery)
