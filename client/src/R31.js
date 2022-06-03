import React, {useState, useEffect} from "react";

function R31(props){
    const [contents, setContents] = useState('[이것은 리액트]');

    useEffect(()=> {
        console.log('유즈이펙트');
    });


    return (
        <div style={{padding: '0px'}}>
            <h1>{contents}</h1>
            <h1 onClick={()=>setContents('[this is react]')}>클릭</h1>

        </div>
    )
}

export default R31;