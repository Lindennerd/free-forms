const selectfield = (function ($) {

    const $table = $('<table>', {
        class: 'table table-striped table-responsive',
        style: 'margin-top: 1em',
        id: 'options-table'
    });

    function editOption(ev) {
        const row = $(ev.target).parentsUntil('tr');
        $('[name="new-option-text"]').val($('option-name', row).text());
        $('[name="new-option-value"]').val($('option-value', row).text());

        row.remove();
    }

    function deleteOption(ev) {
        const row = $(ev.target).parentsUntil('tr');
        row.remove();
    }

    function clearFields() {
      $('[name="new-option-text"]').val('');
    }

    function addOption() {
        const row = $('<tr>');
            row.append($('<td>', {
                text: $('[name="new-option-text"]').val(),
                class: 'option-name'
            }));

            row.append($('<td>').append($('<button>', {
                text: 'Edit',
                class: 'btn btn-primary',
                click: editOption
            })));

            row.append($('<td>').append($('<button>', {
                text: 'Delete',
                class: 'btn btn-danger',
                click: deleteOption
            })));

            $table.append(row);
            clearFields();
    }

    return {
      build: function (base) {
        base.append(fieldFactory.build({
          text: 'Enter your question',
          name: 'question',
          type: 'text'
        }));

        base.append(fieldFactory.build({
            text: 'New Option',
            name: 'new-option-text',
            type: 'text'
        }));


        base.append($('<button>', {
            class: 'btn btn-primary',
            text: 'Add Option',
            click: addOption
        }))

        base.append($table)
      }
    }
  })(jQuery)
