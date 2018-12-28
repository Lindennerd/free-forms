const form = (function(){
    const $formFields = $('#form-fields');
    const fields = [];

    return{
        addField: function(field) {
            fields.push(field);

            if(field.type === 'textfield') {
                $formFields.append(textfield.build(field));
            }

            if(field.type === 'selectfield') {
                $formFields.append(selectfield.build(field));
            }

            if(field.type === 'datefield') {
                $formFields.append(datefield.build(field));
            }
        }
    }
})();