'use strict';

{
  const menu = document.getElementById('menu');
  const openBtn = document.getElementById('open');
  const closeBtn = document.getElementById('close');

  openBtn.addEventListener('click', () =>{
    menu.classList.add('open');
    closeBtn.classList.remove('hidden');
    openBtn.classList.add('hidden');
  });

  closeBtn.addEventListener('click', () =>{
    menu.classList.remove('open');
    openBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
  });
}