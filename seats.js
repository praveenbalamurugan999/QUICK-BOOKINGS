/* ---------- interactive seat map (shared by all movie pages) ---------- */
(function () {
  const seatBox = document.querySelector('.all-seats');
  if (!seatBox) return;

  const price = Number(seatBox.dataset.price || 200);
  const TOTAL = 60, COLS = 12;

  // build seats; ~28% are pre-booked and disabled. Each seat gets a label like B7.
  for (let i = 1; i <= TOTAL; i++) {
    const booked = Math.random() < 0.28;
    const id = 's' + i;
    const label = String.fromCharCode(65 + Math.floor((i - 1) / COLS)) + (((i - 1) % COLS) + 1);
    seatBox.insertAdjacentHTML(
      'beforeend',
      '<input type="checkbox" id="' + id + '" data-seat="' + label + '" ' + (booked ? 'disabled' : '') + ' />' +
      '<label for="' + id + '" class="seat' + (booked ? ' booked' : '') + '"></label>'
    );
  }

  const countEl = document.querySelector('.count');
  const amountEl = document.querySelector('.amount');

  seatBox.querySelectorAll('input').forEach((inp) => {
    inp.addEventListener('change', () => {
      let c = Number(countEl.textContent);
      let a = Number(amountEl.textContent);
      if (inp.checked) { c++; a += price; } else { c--; a -= price; }
      countEl.textContent = c;
      amountEl.textContent = a;
    });
  });

  // keep summary date/time in sync with the chosen showtime
  const sumDate = document.getElementById('sumDate');
  const sumTime = document.getElementById('sumTime');
  document.querySelectorAll('input[name="date"]').forEach((r) => {
    r.addEventListener('change', () => {
      if (sumDate) sumDate.textContent = document.querySelector('label[for="' + r.id + '"]').textContent.replace(/\s+/g, ' ').trim();
    });
  });
  document.querySelectorAll('input[name="time"]').forEach((r) => {
    r.addEventListener('change', () => {
      if (sumTime) sumTime.textContent = document.querySelector('label[for="' + r.id + '"]').textContent.trim();
    });
  });
})();

function bookSeats() {
  const summary = document.querySelector('.summary');
  const picked = [...document.querySelectorAll('.all-seats input:checked')].map((i) => i.dataset.seat);
  const total = Number(document.querySelector('.amount').textContent);

  if (picked.length < 1) { showToast('Please select at least one seat.', 'error'); return; }

  showTicket({
    movie: summary.dataset.movie || 'Movie',
    date: (document.getElementById('sumDate') || {}).textContent || '',
    time: (document.getElementById('sumTime') || {}).textContent || '',
    count: picked.length,
    seatList: picked.sort().join(', '),
    total: total
  });
}
