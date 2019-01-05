const formRegister = (function(){
    const $formFields = $('#form-fields');
    const fields = [];
    let formName = "";
    let formValidate = null;
    let formPassword = "";

    let validationErrors = []

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

            return isValid;
        },

        validationErrors: validationErrors,

        setValidate: function(validate) {
            formValidate = validate;
        },

        setPassword: function(pwd, confirmation) {
            if(pwd) {
                if(pwd === confirmation) {
                    formPassword = pwd;
                } else {
                    validationErrors.push('Password and Confirmation dont match');
                }
            }
        },

        save: function() {
            const form = {
                name: formName,
                validate: formValidate,
                formPassword: formPassword,
                fields: fields
            };

            return $.ajax({
                url: '/save',
                contentType: 'application/json',
                data: JSON.stringify(form),
                method: 'POST'
            });
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
        },

        clearErrors: function() {
            validationErrors = [];
        }
    }
})();