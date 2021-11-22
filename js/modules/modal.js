function closeModal(trigger){
    const modal=document.querySelector(trigger);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow='';
}
function showModal(trigger,timerId){
    const modal=document.querySelector(trigger);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow='hidden';
    clearInterval(timerId);
}
function modals(triggers,modalTrigger,timerId){
    const trigger=document.querySelectorAll(triggers),
    modal=document.querySelector(modalTrigger),
    btnClose=document.querySelector('[data-closebtn]');
  
    function isTrueScrollModal(){
        const scrollHeight=document.documentElement.clientHeight+window.pageYOffset;
        if(scrollHeight>=document.documentElement.scrollHeight){
            showModal(modalTrigger,timerId);
            window.removeEventListener('scroll',isTrueScrollModal);
        }
    }
    
    trigger.forEach(item=>{
    item.addEventListener('click',()=>{
        showModal(modalTrigger,timerId);
    });
    });
    modal.addEventListener('click',(e)=>{
    if (e.target === modal || e.target.classList.contains('modal__close')){
        closeModal(modalTrigger);
    }
    })
    btnClose.addEventListener('click',()=>{
    closeModal(modalTrigger);
    });
   
    window.addEventListener('scroll',isTrueScrollModal);
}
export {showModal};
export default modals;