// 绑定备份按钮事件
$("#backup").click(function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {from: 'popup', subject: 'startBackup'});
    });
});

// 绑定卸载事件
$("#delSelf").click(function (e) {
    // 卸载自身
    chrome.management.uninstallSelf();
});

$(".link").click(function (e) {
    e.preventDefault();
    chrome.tabs.create({url: $(this).attr('href')});
});