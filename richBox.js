/* richBox */
function richBoxAction(action) {
    action === 'createLink' ? document.execCommand(action, false, window.getSelection().toString()) : document.execCommand(action);
    document.getElementById('richBox-input').focus();
}
/* End richBox */