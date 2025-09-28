// Smooth scroll for nav anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  })
})

// Project modal
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.project').forEach(p=>{
  p.addEventListener('click', ()=>{
    modalTitle.textContent = p.dataset.title;
    modalDesc.textContent = p.dataset.desc;
    modalLink.href = p.dataset.link || '#';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    modalClose.focus();
  })
})

modalClose.addEventListener('click', ()=>{ closeModal() });
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }

// Simple contact form handler (demo only)
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name||!email||!message){ alert('Please complete the form.'); return false }
  alert('Thanks '+name+' — your message was (pretend) sent.');
  e.target.reset();
  return false;
}

// Accessibility: close modal on Escape
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape' && modal.classList.contains('open')) closeModal();
});