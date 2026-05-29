/* ---------- sign-in / sign-up toggle ---------- */
const tabSignin = document.getElementById('tab-signin');
const tabSignup = document.getElementById('tab-signup');
const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');

function showSignin() {
  tabSignin.classList.add('active'); tabSignup.classList.remove('active');
  signinForm.classList.add('active'); signupForm.classList.remove('active');
}
function showSignup() {
  tabSignup.classList.add('active'); tabSignin.classList.remove('active');
  signupForm.classList.add('active'); signinForm.classList.remove('active');
}
tabSignin.addEventListener('click', showSignin);
tabSignup.addEventListener('click', showSignup);

/* ---------- sign up ---------- */
function addData() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('emailid').value.trim();
  const pass = document.getElementById('passwd').value;

  if (!name || !email || !pass) { showToast('Please fill in all fields to sign up.', 'error'); return; }

  localStorage.setItem('username', name);
  localStorage.setItem('useremail', email);
  localStorage.setItem('userpwd', pass);

  showToast('Account created! Please sign in.', 'success');
  showSignin();
  document.getElementById('email').value = email;
  document.getElementById('pwd').focus();
}

/* ---------- sign in ---------- */
function checkData() {
  const enteremail = document.getElementById('email').value.trim();
  const enterpwd = document.getElementById('pwd').value;
  const getemail = localStorage.getItem('useremail');
  const getpwd = localStorage.getItem('userpwd');
  const name = localStorage.getItem('username') || 'there';

  if (!enteremail || !enterpwd) { showToast('Please enter your email and password.', 'error'); return; }
  if (getemail === null) { showToast('No account found. Please sign up first.', 'error'); showSignup(); return; }

  if (enteremail === getemail && enterpwd === getpwd) {
    localStorage.setItem('loggedIn', 'true');
    showToast('Welcome back, ' + name + '!', 'success', 1400);
    setTimeout(() => { window.location.href = 'Home.html'; }, 700);
  } else {
    showToast('Invalid email or password.', 'error');
  }
}
