function calculator(){
        const formCalc=document.querySelector('.calculating__result span'),
        inputs=document.querySelectorAll('.calculating__choose input');
        let pol,height,widthPerson,age,active;
        if(localStorage.getItem('pol')){
            pol=localStorage.getItem('pol');
        }
        else{
        pol='famel';
        }
        if(localStorage.getItem('active')){
            active=localStorage.getItem('active');
        }
        else{
        active='1.375';
        }
        function initialisation(elements){
            elements.forEach(item=>{
            console.log(item.getAttribute('id'));
            if(item.getAttribute('id')=='pol'){
                item.classList.remove('calculating__choose-item_active');
                if(item.getAttribute('data-pol')==localStorage.getItem('pol')){
                
                    item.classList.add('calculating__choose-item_active');
                }
            }
            else{
                item.classList.remove('calculating__choose-item_active');
                if(item.getAttribute('data-active')==localStorage.getItem('active')){
                    item.classList.add('calculating__choose-item_active');
                }
            }
            });
        }
        function calc(){
        if(!pol || !height || !widthPerson || !age || !active){
            formCalc.textContent='____';
            return;
        }
        else{
            if(pol==='men'){
                formCalc.textContent=Math.round((88.36 + (13.4 * widthPerson) + (4.8 * height) - (5.7 * age))*active)
            }
            else{
                formCalc.textContent=Math.round((447.6 + (9.2 * widthPerson) + (3.1 * height) - (4.3 * age))*active)
            }
            
        }
        }
        calc();
        function getInformation(form){
            form.addEventListener('input',(e)=>{
            switch(e.target.getAttribute('id')){
                case 'height':
                    height=+form.value;
                    break;
                case 'weight':
                    widthPerson=+form.value;
                    break;
                case 'age':
                    age=+form.value;
                    break;
            }
                calc(); 
            });

        }
        inputs.forEach(item=>{
        getInformation(item);
        });
        const elements=document.querySelectorAll('.calculating__choose div');
        initialisation(elements);
        elements.forEach(item=>{
        item.addEventListener('click',(e)=>{
            if(e.target.getAttribute('data-active')){
                active=e.target.getAttribute('data-active');
                localStorage.setItem('active',active);
                elements.forEach(item=>{
                    if(item.getAttribute('data-active')){
                        item.classList.remove('calculating__choose-item_active');
                    }
                    
                });
                item.classList.add('calculating__choose-item_active');
            }
            else{
                pol=e.target.getAttribute('data-pol');
                localStorage.setItem('pol',pol);
                elements.forEach(item=>{
                    if(item.getAttribute('data-pol')){
                        item.classList.remove('calculating__choose-item_active')
                    }
                    
                });
                item.classList.add('calculating__choose-item_active');
            }
            calc(); 
        }); 
        });
}
export default calculator;
