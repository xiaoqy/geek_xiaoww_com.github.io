// 禁止图片右键
document.addEventListener('contextmenu', (event) => {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
  }
});

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

// 清空页面
function clearHTML(){
  document.documentElement.innerHTML = '';
  window.location.href = 'about:blank';

  window.addEventListener('popstate', function (event) {
    window.location.href = 'about:blank';
  });
}

document.addEventListener('keydown', function(event) {
  const isCtrl = event.ctrlKey;
  const isShift = event.shiftKey;
  const key = event.key;

  if (event.key === 'F12' || isCtrl && isShift && key === 'I' || isCtrl && isShift && key === 'C' || isCtrl && isShift && key === 'J') {
    event.preventDefault();
    clearHTML();
  }
  else if (isCtrl && key === 's') {
    event.preventDefault();
    clearHTML();
  }
  else if (isCtrl && key === 'p') {
    event.preventDefault();
    document.body.style.filter = 'blur(5px)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 3000);
  }
});

// 检测开发者工具
// const threshold = 320;
// setInterval(() => {
//     if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
//         document.documentElement.innerHTML = '';
//         window.location.href = 'about:blank';
//         // document.write("<style>@media print{body{display:none}}</style>");
        
//         // 初始状态
//         history.pushState(null, document.title, window.location.href);

//         // 监听popstate事件（用户点击了后退按钮）
//         window.addEventListener('popstate', function (event) {
//           history.pushState(null, document.title, window.location.href = 'about:blank');
//         });

//         alert('检测到开发者工具，请关闭！');
//         document.body.style.filter = 'blur(5px)';
//     }
// }, 1000);