/* Minh họa tương tác thuần giao diện: mở/đóng hộp xác nhận gọi. Không gọi mạng, không có logic nghiệp vụ. Chạy được khi mở file://. */
(function () {
  var dlg = document.getElementById('call-dialog');
  var status = document.getElementById('call-status');
  if (!dlg || typeof dlg.showModal !== 'function') { return; }
  var opener = null;
  var nameEl = document.getElementById('cd-name');
  var phoneEl = document.getElementById('cd-phone');

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-call]') : null;
    if (!btn) { return; }
    if (btn.getAttribute('aria-disabled') === 'true') { e.preventDefault(); return; }
    opener = btn;
    nameEl.textContent = btn.getAttribute('data-name');
    phoneEl.textContent = btn.getAttribute('data-phone');
    dlg.showModal(); /* trình duyệt tự đặt tiêu điểm vào phần tử autofocus (nút Hủy), khóa Tab trong hộp, Esc đóng */
  });

  dlg.addEventListener('close', function () {
    if (dlg.returnValue === 'call' && status) {
      status.textContent = 'Mockup: đã gửi yêu cầu gọi tới ' + nameEl.textContent + ' (' + phoneEl.textContent + '). Softphone được thiết kế ở màn hình khác (FR-24).';
      status.hidden = false;
    }
    dlg.returnValue = '';
    if (opener) { opener.focus(); } /* trả tiêu điểm về nút đã mở hộp */
  });
})();
