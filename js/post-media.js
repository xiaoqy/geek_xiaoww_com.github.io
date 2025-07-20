document.addEventListener('play', function(e) {
    if (e.target.tagName !== 'VIDEO') return;

    document.querySelectorAll('video').forEach(video => {
        if (video !== e.target) {
            video.pause();
        }
    });
}, true);  // 使用捕获阶段，确保捕捉到所有 play 事件
