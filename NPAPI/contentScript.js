var port = chrome.extension.connect({
    name: 'pageListener'
});

port.postMessage({
    'url': document.querySelector('img').src
});
