// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

window.addEventListener('poslji', function (e) {
  const { dialog } = require('electron').dialog
  const options = {
    type: 'info',
    buttons: ['OK'],
    title: 'Navodila za izpolnjevanje polj',
    message: 'Izposoja mora biti vsaj minuto po trenutnem času.\nVrnitev mora biti po času izposoje.\nStarost mora biti vsaj 18.\nČas izpita ne sme biti negativen.\nŠtevilko kreditne kartice zapišite kot xxxx-xxxx-xxxx-xxxx vključno z znakom -.',
  };
  dialog.showMessageBox(this, options);
 // dialog.showMessageBox(null, options, (response) => {
 //   console.log(response);
 // });
});

