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

        const optionVal = $('[name="new-option"]').val();

        const $li = $('<li>', {
            class: 'list-group-item d-flex justify-content-between align-items-center',
            text: optionVal
        }).append(
            $('<input>', {
                value: optionVal,
                style: 'display: none',
                class: 'option-field'
            })
        );

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
            const options = [];
            const $optionFields = $('.option-field');

            for(let index in $optionFields) {
                const $optionField = $optionFields[index];
                if($optionField.value) {
                    options.push($optionField.value);
                }
            }           

            return {
                type: 'selectfield',
                question: $('[name="question"').val(),
                options: options
            }
        },

        build: function (field) {
            const $formGroup = $('<div>', { class: 'form-group' });
            const $select = $('<select>', { class: 'form-control answer' });
            const $label = $('<label>', { text: field.question, class: 'question' });

            $(field.options).each(function (index, option) {
                const $option = $('<option>', { text: option });
                $select.append($option);
            });

            $formGroup.append($label);
            $formGroup.append($select);

            return $formGroup;
        }


    };
})(jQuery)
