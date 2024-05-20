import React,{useState} from "react";

const DisplayName=()=>{
    
    const[firstName, setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const[fullName,setFullName]=useState('');
    const HandleTheInput=(event)=>{
        event.preventDefault();
        if (firstName && lastName){
            setFullName(`${firstName} ${lastName}`)

        }

    }
    const handleError=(abc)=>{
        abc.target.setCustomValidity("Please Fill out this feild");
    }
    const handleIn=(abc)=>{
        abc.target.setCustomValidity("Please Fill out this feild");
    }


    


return(
    <div>
        <form onClick={HandleTheInput}>
            <h1>Full Name Display</h1>
            <div><span>First Name:</span>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} 
            required onInvalid={handleError} onInput={handleIn} /></div>
            <div><span>Last Name:</span>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}
            required onInvalid={handleError} onInput={handleIn}/></div>
            
<button type="submit">Submit</button>
        </form>
        {fullName && <div>Full Name: {fullName}</div>}
    </div>
)}
export default DisplayName;


    