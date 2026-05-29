/* ============================================================
   Shared popup system: toasts + ticket confirmation modal
   ============================================================ */
(function () {
  const ICONS = {
    success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"/></svg>',
    error:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6L6 18M6 6l12 12"/></svg>',
    info:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>'
  };

  window.showToast = function (msg, type = 'info', timeout = 3200) {
    let wrap = document.querySelector('.toast-wrap');
    if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; document.body.appendChild(wrap); }
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    t.innerHTML = '<span class="ti">' + (ICONS[type] || ICONS.info) + '</span><span>' + msg + '</span>';
    wrap.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 450); }, timeout);
  };

  window.showTicket = function (data) {
    const ov = document.createElement('div');
    ov.className = 'modal-overlay';
    ov.innerHTML =
      '<div class="ticket">' +
        '<div class="ticket-top">' +
          '<div class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M20 6L9 17l-5-5"/></svg></div>' +
          '<h3>Booking Confirmed</h3><p>Enjoy the show!</p>' +
        '</div>' +
        '<div class="ticket-cut"><span class="dash"></span></div>' +
        '<div class="ticket-body">' +
          '<div class="trow"><span>Movie</span><b>' + data.movie + '</b></div>' +
          '<div class="trow"><span>Date &amp; Time</span><b>' + data.date + ' · ' + data.time + '</b></div>' +
          '<div class="trow"><span>Seats (' + data.count + ')</span><b class="seatlist">' + data.seatList + '</b></div>' +
          '<div class="ticket-total"><span>Total Paid</span><b>₹' + data.total + '</b></div>' +
        '</div>' +
        '<div class="ticket-actions">' +
          '<button type="button" class="btn btn-ghost btn-block" data-close>Done</button>' +
          '<a href="Home.html" class="btn btn-primary btn-block">Home</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(ov);
    requestAnimationFrame(() => ov.classList.add('show'));
    const close = () => { ov.classList.remove('show'); setTimeout(() => ov.remove(), 350); };
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    ov.querySelector('[data-close]').addEventListener('click', close);
    document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ close(); document.removeEventListener('keydown', esc); } });
  };
})();
