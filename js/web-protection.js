document.addEventListener('copy', function (event) {
    let clipboardData = event.clipboardData || window.clipboardData;
    if (!clipboardData) return;

    let text = window.getSelection().toString();
    if (text) {
      event.preventDefault();

      let copyrightNotice = '\r\n\r\n------\r\n作者：Allen Shaw\r\n链接：' + window.location.href + '\r\n未经授权禁止转载或摘录，著作权归作者所有！\r\n商业转载请联系作者获得许可，非商业转载请注明出处并保留作者信息。';
      clipboardData.setData('text/plain', text + copyrightNotice);

      // 如果想加富文本（HTML），可以加这一行
      // clipboardData.setData('text/html', '<p>' + text + '</p><p>版权所有</p>');
    }
  });
    
  // 监听按键
  document.onkeydown = function () {
    // f12
    if (window.event && window.event.keyCode == 123) {
        event.keyCode = 0;
        event.returnValue = false;

        document.documentElement.innerHTML = '';
        window.location.href = 'about:blank';
        // document.write("<style>@media print{body{display:none}}</style>");
        
        // 初始状态
        history.pushState(null, document.title, window.location.href);

        // 监听popstate事件（用户点击了后退按钮）
        window.addEventListener('popstate', function (event) {
          history.pushState(null, document.title, window.location.href = 'about:blank');
        });

        alert("本站禁止调试！");
    }
    // ctrl+shift+i
    if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == 73) {
        event.keyCode = 0;
        event.returnValue = false;

        document.documentElement.innerHTML = '';
        window.location.href = 'about:blank';
        // document.write("<style>@media print{body{display:none}}</style>");
        
        // 初始状态
        history.pushState(null, document.title, window.location.href);

        // 监听popstate事件（用户点击了后退按钮）
        window.addEventListener('popstate', function (event) {
          history.pushState(null, document.title, window.location.href = 'about:blank');
        });

        alert("本站禁止调试！");
    }
    // ctrl+s
    if (window.event.ctrlKey && window.event.keyCode == 83) {
        event.keyCode = 0;
        event.returnValue = false;

        document.documentElement.innerHTML = '';
        window.location.href = 'about:blank';
        // document.write("<style>@media print{body{display:none}}</style>");
        
        // 初始状态
        history.pushState(null, document.title, window.location.href);

        // 监听popstate事件（用户点击了后退按钮）
        window.addEventListener('popstate', function (event) {
          history.pushState(null, document.title, window.location.href = 'about:blank');
        });

        alert("本站禁止保存！");
    }
}