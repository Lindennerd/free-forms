const datefield = (function($){

    return {
        setField: function(base){
            base.append(fieldFactory.build({
                text: 'Enter your Question',
                name: 'question',
                type: 'text'
            }));

            base.append(fieldFactory.build({
                text: 'Enter a minimum date',
                name: 'min-date',
                type: 'date'
            }));

            base.append(fieldFactory.build({
                text: 'Enter a maximum date',
                name: 'max-date',
                type: 'date'
            }));
        },

        getField: function() {
            return {
                type: 'datefield',
                question: $('[name="question"]').val(),
                minDate: $('[name="min-date"]').val(),
                maxDate: $('[name="max-date"]').val()
            }
        },

        build: function(field) {
            const $formGroup = $('<div>', {
                class: 'form-group'
            });

            $formGroup.append($('<label>', {
                text: field.question,
            }));

            const $input = $('<input>', {
                type: 'date',
                class: 'form-control',
            });

            if(field.minDate) $input.attr('min', field.minDate);
            if(field.maxDate) $input.attr('max', field.maxDate);

            $formGroup.append($input);

            return $formGroup;
        }

    }

})(jQuery);