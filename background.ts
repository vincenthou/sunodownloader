chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'download') {
    var fileUrl = request.fileUrl;
    var fileName = request.fileName;

    chrome.downloads.download({
      url: fileUrl,
      filename: fileName
    });
  }
});