import {useEffect,useState} from 'react';

export default (value)=>{
    let [resource,setResource] = useState(value);

    useEffect(() => {
        console.log("Compoenet call"); 
        setResource(value);
    })

    return resource;
}
