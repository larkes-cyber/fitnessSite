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
export default tab;