var port = chrome.extension.connect({
    name: 'pageListener'
});

port.postMessage({
    'url': document.querySelector('img').src
});


port.onMessage.addListener(function(message) {
    console.log(message.message + ' is now saved on your local computer');
});
