'use strict';

{
  const title = document.querySelector('.title');
  const table = document.querySelector('table');
  const achievement = document.getElementById('achievement');
  const work = document.getElementById('work');
  const profile = document.getElementById('profile');
  const recruit = document.getElementById('recruit');
  const titleText = document.querySelector('.titleText');
  const titleImage = document.querySelector('.titleImage');
  
  setTimeout(() =>{
    title.classList.add('appear');
    if(table) table.classList.add('appear');
    if(achievement) achievement.classList.add('appear');
    if(work) work.classList.add('appear');
    if(profile) profile.classList.add('appear');
    if(recruit) recruit.classList.add('appear');
    if(titleText) titleText.classList.add('appear');
    if(titleImage) titleImage.classList.add('appear');
  }, 200);
}