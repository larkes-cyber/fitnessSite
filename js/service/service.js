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
export {addDataBase,setGet};
