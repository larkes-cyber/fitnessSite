import tabs from './modules/tabs';
import timer from './modules/timer';
import cards from './modules/cards';
import modal from './modules/modal';
import form from './modules/form';
import calculator from './modules/calculator';
import slider from './modules/slider';
import {showModal} from './modules/modal';
window.addEventListener('DOMContentLoaded',()=>{
    const timeModal=setTimeout(()=>{showModal('.modal',timeModal)},50000);
    tabs();
    timer();
    cards();
    modal('[data-modal]','.modal',timeModal);   
    form('.modal',timeModal);
    calculator();
    slider();
});

   
    
    
      
     
  

