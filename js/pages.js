'use strict';

{
  const title = document.querySelector('.title');
  const table = document.querySelector('table');
  const achievement = document.getElementById('achievement');
  const work = document.getElementById('work');
  const profile = document.getElementById('profile');
  const recruit = document.getElementById('recruit');
  const contact = document.getElementById('contact');
  const titleText = document.querySelector('.titleText');
  const titleImage = document.querySelector('.titleImage');
  const name = document.getElementById('name');
  const mail = document.getElementById('mail');
  const btn = document.querySelector('form > button');
  
  setTimeout(() =>{
    title.classList.add('appear');
    if(table) table.classList.add('appear');
    if(achievement) achievement.classList.add('appear');
    if(work) work.classList.add('appear');
    if(profile) profile.classList.add('appear');
    if(recruit) recruit.classList.add('appear');
    if(contact) contact.classList.add('appear');
    if(titleText) titleText.classList.add('appear');
    if(titleImage) titleImage.classList.add('appear');
  }, 200);

  btn.addEventListener('click', e =>{
    if(name.value === '' || mail.value === ''){
      e.preventDefault();
      alert('名前 および お問い合わせ文をご入力の上、送信してください。');
    }
  });
}