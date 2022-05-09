'use strict';

{
  const main = document.querySelector('main');
  const img = document.querySelectorAll('.image > img');
  const section = document.querySelectorAll('#caption > section');
  const menu = document.getElementById('menu');
  const openBtn = document.getElementById('open');
  const closeBtn = document.getElementById('close');
  const leftBtn = document.getElementById('left');
  const rightBtn = document.getElementById('right');

  let currentContent = 0;

  function imageChange(){
    img.forEach(i =>{
      i.classList.add('clear');
    });

    section.forEach(sec =>{
      sec.classList.add('clear');
    });

    img[currentContent].classList.remove('clear');
    section[currentContent].classList.remove('clear');
  }

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

  leftBtn.addEventListener('click', () =>{
    main.style.transform += 'rotate(90deg)';

    if(currentContent === img.length - 1){
      currentContent = 0;
    } else {
      currentContent++;
    }
    
    imageChange();   
  });

  rightBtn.addEventListener('click', () =>{
    main.style.transform += 'rotate(-90deg)';

    if(currentContent === 0){
      currentContent = img.length - 1;
    } else {
      currentContent--;
    }

    imageChange();
  });
}