// 🎯 انتخاب دکمه‌ها
const settingsBtn = document.getElementById('settings');
const accountBtn = document.getElementById('account');
const aboutBtn = document.getElementById('about');
const supportBtn = document.getElementById('supportBtn');

// 🎯 انتخاب پنل پشتیبانی و دکمه‌ها
const supportPanel = document.getElementById('support-panel');
const closeSupport = document.getElementById('close-support');

// 📦 تابع نمایش پاپ‌آپ
function showPopup(title, message) {
  if (document.getElementById('popup')) document.getElementById('popup').remove();

  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.backgroundColor = '#cad2da';
  popup.style.color = '#000';
  popup.style.padding = '20px';
  popup.style.borderRadius = '10px';
  popup.style.boxShadow = '0 0 15px #000';
  popup.style.zIndex = '2000';
  popup.style.textAlign = 'center';

  const h2 = document.createElement('h2');
  h2.innerText = title;

  const p = document.createElement('p');
  p.innerText = message;

  const close = document.createElement('button');
  close.innerText = 'بستن';
  close.style.marginTop = '10px';
  close.onclick = () => popup.remove();

  popup.appendChild(h2);
  popup.appendChild(p);
  popup.appendChild(close);
  document.body.appendChild(popup);
}

// 📩 عملکرد دکمه‌های ستون چپ
settingsBtn.addEventListener('click', () => {
  showPopup('حساب کاربری', 'این بخش درحال توسعه است.');
});

accountBtn.addEventListener('click', () => {
  showPopup('تنظیمات', 'این بخش درحال توسعه است.');
});

aboutBtn.addEventListener('click', () => {
  showPopup('درباره سازنده', 'این سایت در تاریخ ۴ مهر ۱۴۰۴ توسط مهبد فرجیان ساخته شده است.');
});

// 📩 نمایش پنل پشتیبانی
supportBtn.addEventListener('click', () => {
  supportPanel.style.display = 'block';
});

// ❌ بستن پنل
closeSupport.addEventListener('click', () => {
  supportPanel.style.display = 'none';
});

// 📜 سوالات متداول
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showPopup('پشتیبانی', btn.getAttribute('data-msg'));
  });
});

// 📩 دکمه‌های دیگر
document.getElementById('other-question').addEventListener('click', () => {
  showPopup('سوال جدید', 'لطفاً سوال خود را از طریق ایمیل ارسال کنید.');
});

document.getElementById('contact-support').addEventListener('click', () => {
  showPopup('ارتباط با پشتیبانی', '📧 ایمیل: natc2026@gmail.com');
});

// ✨ افکت ظاهر شدن پست‌ها
window.addEventListener("scroll", () => {
  const posts = document.querySelectorAll(".fade-in");
  posts.forEach(post => {
    const rect = post.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      post.classList.add("visible");
    }
  });
});
