const form = (function(){
    const $formFields = $('#form-fields');
    const fields = [];
    let formName = "";
    let formValidate = null;

    const validationErrors = []

    return{
        setName: function(name) {
            formName = name;
        },

        isValid: function() {
            let isValid = true;
            if(!formName || formName === "") {
                validationErrors.push("Set a Name for the Form");
                isValid = false;
            }

            if(fields.length <= 0 ) {
                validationErrors.push("Configure Fields for this form");
                isValid = false;
            }

            if(!formValidate) {
                validationErrors.push("Set a validation for the form");
                isValid = false;
            }

            return isValid;
        },

        validationErrors: validationErrors,

        setValidate: function(validate) {
            formValidate = validate;
        },

        save: function() {
            const form = {
                name: formName,
                validate: formValidate,
                fields: fields
            };

            return $.post('/save', form);
        },

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