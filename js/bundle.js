/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/service */ "./js/service/service.js");

function cards(){
        class MenuItem{
            constructor(src,alt,title,text,coast,parent,...classes){
                this.src=src;
                this.alt=alt;
                this.title=title;
                this.text=text;
                this.coast=coast;
                this.parent=parent;
                this.valute=20;
                this.convertValute();
                this.classes=classes;
            }
            convertValute(){
                this.coast= this.coast * this.valute;
            }
            render(){
                const div= document.createElement('div');
                if(this.classes.length==0){
                    div.classList.add('menu__item');
                    this.classes.push('menu__item');
                }
                else{
                    this.classes.forEach(item => div.classList.add(item));
                }
                div.innerHTML=`
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.coast}</span> грн/день</div>
                </div>
                `
                let container = document.querySelector(this.parent);
                container.append(div);
            }
        }
        (0,_service_service__WEBPACK_IMPORTED_MODULE_0__.setGet)('http://localhost:3000/menu')
        .then( data=>{
        data.forEach(
            ({img,altimg,title,descr,price})=>{

                new MenuItem(img,altimg,title,descr,price,'.menu__field .container').render();
        });
        }
        )
        // .then(data=>{
        //     createCard(data);
        // })
        // function createCard(data){
        //     data.forEach(
        //         ({img,altimg,title,descr,price})=>{
        //             const div=document.createElement('div');
        //             div.classList.add('menu__item');
        //             div.innerHTML=`
        //             <img src="${img}" alt="${altimg}">
        //             <h3 class="menu__item-subtitle">Меню ${title}</h3>
        //             <div class="menu__item-descr">${descr}</div>
        //             <div class="menu__item-divider"></div>
        //             <div class="menu__item-price">
        //                 <div class="menu__item-cost">Цена:</div>
        //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
        //             </div>
        //             `;
        //             document.querySelector('.menu .container').append(div);
        //         }
        //     )
        // }
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/service */ "./js/service/service.js");


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
            (0,_service_service__WEBPACK_IMPORTED_MODULE_1__.addDataBase)('http://localhost:3000/requests',json)
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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showModal)(trigger,timeModal);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showModal": () => (/* binding */ showModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliders(){
    const next=document.querySelector('.offer__slider-next'),
        prev=document.querySelector('.offer__slider-prev'),
        wind=document.querySelector('.offer__slider-wrapper'),
        wrapper=document.querySelector('.wrapper'),
        slids=document.querySelectorAll('.offer__slide'),
        width=window.getComputedStyle(wind).width,
        span=document.querySelector('#current'),
        title=document.querySelector('#total'),
        slider=document.querySelector('.offer__slider');
        title.textContent=(slids.length>=10)?slids.length:'0'+slids.length;
        slids.forEach(item=>{
                item.style.width='100%';
        });
        wrapper.style.width= (100 * slids.length) + '%';
        wrapper.style.display='flex';
        wind.style.overflow='hidden';
        wrapper.style.transition="0.5s all";
        let often=0;
        let index=1;
        slider.style.position='relative';
        const wrapperNav=document.createElement('ol');
        wrapperNav.style.cssText=`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
        `;
        slider.append(wrapperNav);
        let arrDots=[];
        for(let i=0; i < slids.length;i++){
            const dot=document.createElement('li');
            dot.style.cssText=`
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
            `;
            dot.setAttribute('data-to',i+1);
            arrDots.push(dot);
            wrapperNav.append(dot);
        };
        arrDots.forEach(item=>item.style.opacity='0.5');
        arrDots[index-1].style.opacity='1';
        span.textContent=(index>10)?index:'0'+index;
        next.addEventListener('click',()=>{
            if (often == width.slice(0,-2) * (slids.length-1)){
                often=0;
            }else{
                often+=+width.slice(0,-2);
            }

        
            wrapper.style.transform=`translateX(-${often}px)`;
            if(index==slids.length){
                index=1;
            }else{
                index++;
            }
            span.textContent=(index>10)?index:'0'+index;
            arrDots.forEach(item=>item.style.opacity='0.5');
            arrDots[index-1].style.opacity='1';
            console.log(index)
    
        });
        prev.addEventListener('click',()=>{
            if(often==0){
                often=width.slice(0,-2) * (slids.length-1);
            }
            else{
                often-=width.slice(0,-2);
            }
            if(index==1){
                index=slids.length;
            }else{
                index--;
            }
            span.textContent=(index>10)?index:'0'+index;


            wrapper.style.transform=`translateX(-${often}px)`;
            arrDots.forEach(item=>item.style.opacity='0.5');
            arrDots[index-1].style.opacity='1';
    
        });
        arrDots.forEach(item=>{
            item.addEventListener('click',(e)=>{
            const elem=e.target.getAttribute('data-to')-1;
                wrapper.style.transform=`translateX(-${+width.slice(0,-2)*elem}px)`;
                arrDots.forEach(item=>item.style.opacity='0.5');
                often=+width.slice(0,-2)*elem;
                index=elem+1;
                span.textContent=(index>10)?index:'0'+index;
                arrDots[index-1].style.opacity='1';
        
            });
        });
    }
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tab(){
    const tabsContent=document.querySelectorAll('.tabcontent'),
    tabs=document.querySelectorAll('.tabheader__item'),
    tabsParent=document.querySelector('.tabheader');
    function hideTabsContent(){
        tabsContent.forEach(item=>{
            item.style.display='none';
        });
        tabs.forEach(function(item){
        item.classList.remove('tabheader__item_active');
        })
    }
    function showTabsContent(i){
    tabsContent[i].style.display='block';
    tabs[i].classList.add('tabheader__item_active');
    }
    tabsParent.addEventListener('click',event=>{
    const target=event.target;
    if(target && target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=>{
            if(item==target){
                hideTabsContent();
                showTabsContent(i);
            }
        })
    }
    })
    hideTabsContent();
    showTabsContent(0);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tab);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timers(){
    let deadline=new Date('2023-12-5');
    deadline.setDate(deadline.getDay()-(new Date()).getDay());
    deadline.setHours(deadline.getHours()-(new Date()).getHours())
    deadline.getSeconds(deadline.getSeconds()-(new Date()).getSeconds());
    console.log(deadline.getDay())
    function getData(){
        let data= new Date();
        const dats=document.querySelector('.timer');
        const day=dats.querySelector('#days').textContent,
        hours=dats.querySelector('#hours').textContent,
        minutes=dats.querySelector('#minutes').textContent,
        seconds= dats.querySelector('#seconds').textContent;
        data.setDate(day);
        data.setHours(hours);
        data.setMinutes(minutes);
        data.setSeconds(seconds);
        return data;
    }
    function addTime(data){
        const days=data.getDay(),
            hours=data.getHours(),
            minutes=data.getMinutes(),
            seconds=data.getSeconds();
        const dats=document.querySelector('.timer');
        dats.querySelector('#days').textContent=days;
        dats.querySelector('#hours').textContent=hours;
        dats.querySelector('#minutes').textContent=minutes;
        dats.querySelector('#seconds').textContent=seconds;
    }
    function timer(){
        setInterval(()=>{
            let countData=getData();
            if (countData==0){
                clearInterval();
            }
            else{
                countData-=10;
                countData= new Date(countData);
                addTime(countData);
            }
            
        },10);
    }
    addTime(deadline);
    timer();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timers);

/***/ }),

/***/ "./js/service/service.js":
/*!*******************************!*\
  !*** ./js/service/service.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDataBase": () => (/* binding */ addDataBase),
/* harmony export */   "setGet": () => (/* binding */ setGet)
/* harmony export */ });
const addDataBase= async (url,data)=>{
    console.log(data);
    const addBd= await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    })
    return await addBd.json();
}
const setGet= async (url) =>{
    const data=await fetch(url);
    return  await data.json();  
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");








window.addEventListener('DOMContentLoaded',()=>{
    const timeModal=setTimeout(()=>{(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.showModal)('.modal',timeModal)},50000);
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]','.modal',timeModal);   
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_4__["default"])('.modal',timeModal);
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

   
    
    
      
     
  


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
