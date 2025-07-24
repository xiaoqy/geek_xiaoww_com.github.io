(function(){
const userAgent = navigator.userAgent || navigator.vendor || window.opera;

// 判断是否是微信
if (/MicroMessenger/i.test(userAgent)) {
  const container = document.getElementById('announcement-insert');
  if (container) {
    container.innerHTML = `
      <div class="announcement-bar">
      <div class="announcement-content">
        ⚠️<span style="font-weight: bold">本站浏览建议 </span>
        <button id="closeButton" aria-label="关闭公告栏">
            <span style="color: red; font-weight: bold; font-size: 16px">x</span>
        </button>
        <hr style="border: 1px solid #FF1493;" />
        检测到您正在通过 <span style="color:#FF1493; font-weight: bold">微信</span> 浏览本站<br />
        可能会影响页面渲染效果、功能体验和加载速度。<br />
        <hr style="border: .2px dashed #FF1493;" />
        请点击右上角 <span style="color:#FF1493; font-weight: bold">· · ·</span> 再点 <span style="color:#FF1493; font-weight: bold">浏览器</span> 来打开我吧！<br />
        如遇页面内容过多，请您使用 💻<span style="color:#FF1493; font-weight: bold">电脑端</span> 访问。
        <div class="bottom-fill">✅推荐 <span style="color:#FF1493; font-weight: bold">Chrome</span>、<span style="color:#FF1493; font-weight: bold">Safari</span> 或其他浏览器。</div>
        </div>
      </div>
      `;

    // 绑定关闭按钮事件，仅移除 announcement-bar 块
    const closeButton = container.querySelector('#closeButton');
    closeButton.addEventListener('click', function () {
      const announcementDiv = container.querySelector('.announcement-bar');
      if (announcementDiv) {
        announcementDiv.remove();
      }
    });
  }
  // 判断是否是 QQ
} else if (/Qzone|QQBrowser|MQQBrowser/i.test(userAgent)) {
  const container = document.getElementById('announcement-insert');
  if (container) {
    container.innerHTML = `
    <div class="announcement-bar">
    <div class="announcement-content">
      ⚠️<span style="font-weight: bold">本站浏览建议 </span>
      <button id="closeButton" aria-label="关闭公告栏">
          <span style="color: red; font-weight: bold; font-size: 16px">x</span>
      </button>
      <hr style="border: 1px solid #FF1493;" />
      检测到您正在通过 <span style="color:#FF1493; font-weight: bold">QQ</span> 浏览本站<br />
      可能会影响页面渲染效果、功能体验和加载速度。<br />
      <hr style="border: .2px dashed #FF1493;" />
      请点击右上角 <span style="color:#FF1493; font-weight: bold">· · ·</span> 再点 <span style="color:#FF1493; font-weight: bold">浏览器</span> 来打开我吧！<br />
      如遇页面内容过多，请您使用 💻<span style="color:#FF1493; font-weight: bold">电脑端</span> 访问。
      <div class="bottom-fill">✅推荐 <span style="color:#FF1493; font-weight: bold">Chrome</span>、<span style="color:#FF1493; font-weight: bold">Safari</span> 或其他浏览器。</div>
      </div>
    </div>
      `;

    // 绑定关闭按钮事件，仅移除 announcement-bar 块
    const closeButton = container.querySelector('#closeButton');
    closeButton.addEventListener('click', function () {
      const announcementDiv = container.querySelector('.announcement-bar');
      if (announcementDiv) {
        announcementDiv.remove();
      }
    });
  }
}
})();
