'use strict';

{
  const main = document.querySelector('main > ul');
  const img = document.querySelectorAll('.image > img');
  const section = document.querySelectorAll('#caption > section');
  const leftBtn = document.getElementById('left');
  const rightBtn = document.getElementById('right');

  const mask = document.getElementById('mask');
  const logoMask = document.getElementById('logomask');

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

  setTimeout(() =>{
    logoMask.classList.add('move');
    setTimeout(() =>{
      mask.classList.add('clear');
      setTimeout(() =>{
        mask.classList.add('hidden');
      }, 1600);
    }, 2500);
  }, 100);
}