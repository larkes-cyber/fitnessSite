import {setGet} from '../service/service'
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
        setGet('http://localhost:3000/menu')
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
    export default cards;