const textfield = (function ($) {
  return {
    build: function (base) {
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
    }
  }
})(jQuery)
