function timers(){
    let deadline=new Date('2023-12-05');
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
export default timers;
