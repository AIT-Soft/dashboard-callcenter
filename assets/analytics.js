/* Đếm truy cập ẩn danh (GoatCounter).
   Không lưu định danh trình duyệt, không IP, không dấu vân tay. Chỉ chạy trên tên miền demo. */
(function () {
  'use strict';
  var GC_CODE = 'duongtanthanh'; // điền mã site GoatCounter (vd. "abc") trước khi deploy
  try {
    if (!GC_CODE || location.protocol === 'file:' || location.hostname !== 'callcenter-demo.genalpha.dev') return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter', 'https://' + GC_CODE + '.goatcounter.com/count');
    document.head.appendChild(s);
    document.addEventListener('click', function (e) {
      try {
        var a = e.target && e.target.closest ? e.target.closest('a[href$="dashboard-callcenter-mockups.zip"]') : null;
        if (!a) return;
        var gc = window.goatcounter;
        if (gc && typeof gc.count === 'function') {
          gc.count({ path: 'download-zip', title: 'Tải zip', event: true });
        } else {
          // dự phòng AC-ANA-02.1: count.js chưa nạp xong thì gửi ảnh pixel
          new Image().src = 'https://' + GC_CODE + '.goatcounter.com/count?p=download-zip&e=true&t=' + encodeURIComponent('Tải zip') + '&r=' + Math.random();
        }
      } catch (err) { /* bỏ qua, không chặn tải */ }
    }, true);
  } catch (err) { /* bỏ qua */ }
})();
