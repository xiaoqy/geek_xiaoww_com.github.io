(function(){
  if (window.__webProtectionInjected) return;
  window.__webProtectionInjected = true;

  document.addEventListener('contextmenu', (event) => {
    if (event.target.tagName === 'IMG') {
      event.preventDefault();
    }
  });

  document.addEventListener('copy', function (event) {
    let clipboardData = event.clipboardData || window.clipboardData;
    if (!clipboardData) return;

    let text = window.getSelection().toString();
    if (text) {
      event.preventDefault();
      let copyrightNotice = '\r\n\r\n------\r\n作者：Allen Shaw\r\n链接：' + window.location.href + '\r\n未经授权禁止转载或摘录，著作权归作者所有！\r\n商业转载请联系作者获得许可，非商业转载请注明出处并保留作者信息。';
      clipboardData.setData('text/plain', text + copyrightNotice);
    }
  });

  function clearHTML(){
    document.documentElement.innerHTML = '';
    window.location.href = 'about:blank';
    window.addEventListener('popstate', function () {
      window.location.href = 'about:blank';
    });
  }

  document.addEventListener('keydown', function(event) {
    const isCtrl = event.ctrlKey;
    const isShift = event.shiftKey;
    const key = event.key;

      if (event.key === 'F12' || isCtrl && isShift && ['I', 'C', 'J'].includes(key)) {
      event.preventDefault();
      clearHTML();
      } else if (isCtrl && key === 's') {
      event.preventDefault();
      clearHTML();
      } else if (isCtrl && key === 'p') {
      event.preventDefault();
      document.body.style.filter = 'blur(5px)';
      setTimeout(() => {
        document.body.style.filter = 'none';
      }, 3000);
    }
  });

})();
