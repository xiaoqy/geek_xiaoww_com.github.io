// 禁止图片拖拽
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dragstart', function(e) {
    e.preventDefault();
  });
});

// 禁止图片右键
document.addEventListener('contextmenu', (event) => {
  if (event.target.tagName === 'IMG') {
      event.preventDefault();
  }
});

// 禁止长按图片
document.addEventListener('touchstart', (event) => {
  if (event.target.tagName === 'IMG') {
      event.preventDefault(); // 阻止长按默认行为
  }
}, { passive: false });

// 复制版权内容
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

// 检测开发者工具
const threshold = 200;
setInterval(() => {
    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
        document.documentElement.innerHTML = '';
        window.location.href = 'about:blank';
        // document.write("<style>@media print{body{display:none}}</style>");
        
        // 初始状态
        history.pushState(null, document.title, window.location.href);

        // 监听popstate事件（用户点击了后退按钮）
        window.addEventListener('popstate', function (event) {
          history.pushState(null, document.title, window.location.href = 'about:blank');
        });

        alert('检测到开发者工具，请关闭！');
        document.body.style.filter = 'blur(5px)';
    }
}, 1000);

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
  // ctrl+p
  if (window.event.ctrlKey && window.event.keyCode == 80) {
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
      
      alert("本站禁止打印！");
  }
}