import {showModal} from './modal';
import {addDataBase} from '../service/service';
function forms(trigger,timeModal){
    const forms=document.querySelectorAll('form');
    forms.forEach(item=>addSumb(item));
    
    function addSumb(form){
        const message={
            loading:'загрузка',
            success:'Cпасибо! Мы скоро с вами свяжимся!',
            fail:'плохо'
        }
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const elem=document.createElement('div');
            elem.textContent=message.loading;
            form.append(elem);
            const formData=new FormData(form);
            const json=JSON.stringify(Object.fromEntries(formData.entries()));
            console.log(json);
            addDataBase('http://localhost:3000/requests',json)
            .then(data=>{
                console.log(data);
                addThanksModal(message.success)
                form.reset();
                setTimeout(()=>{
                    elem.remove();
                },2000)
            }).catch(()=>{
                addThanksModal(message.fail);
            });

        });
        function addThanksModal(message){
            const lastBlock=document.querySelector('.modal__content');
            lastBlock.classList.add('hide');
            lastBlock.classList.remove('show');
            showModal(trigger,timeModal);
            const blockThanks=document.createElement('div');
            blockThanks.classList.add('.modal__content');
            blockThanks.innerHTML=`
                <div class='modal__content'> 
                    <div class='modal__close'>×</div>
                    <div class='modal__title'>${message}</div>
                </div>
            `;
            document.querySelector('.modal').append(blockThanks);
            setTimeout(()=>{
                blockThanks.remove();
                lastBlock.classList.add('show');
                lastBlock.classList.remove('hide');
                closeModal();
            },4000)
        }
    }
}
export default forms;