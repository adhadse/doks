import Clipboard from 'clipboard';


var clipboard = new Clipboard('.copy', {

  target: function(trigger) {
    return trigger.parentElement.parentElement.getElementsByTagName('code')[0];
  },

});

clipboard.on('success', function(e) {

    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
