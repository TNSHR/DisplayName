import React,{useState} from "react";


    const DisplayName=()=>{
        const[firstName, setFirstName]=useState('');
        const [lastName,setLastName]=useState('');
        const[fullName,setFullName]=useState('');
        const[error,setError]=useState({});

        const HandleSubmit=(submit)=>{
            submit.preventDefault();
           
            let errors={};
            if(!firstName){
               
                errors["firstName"]="Please fill this feild"
            }
            if(!lastName){
              
                errors["lastName"]="Please fill this feild"
            }
            setError(errors);

            if (Object.keys(errors).length===0){
                setFullName(`${firstName} ${lastName}`)
            }
        }
        const handleTheFirstNameChange=(e)=>{

            setFirstName(e.target.value);
            if(e.target.value){
                setError((prevError)=>({...prevError,firstName:''}))
            }
        }
        const handleTheLastNameChange=(e)=>{

            setFirstName(e.target.value);
            if(e.target.value){
                setError((prevError)=>({...prevError,lastName:''}))
            }
        }

        return(<>
        <div style={{class:"container"}}>
         <form onSubmit={HandleSubmit}>
            <div style={{padding:"10px"}}> 
             <label>First Name:</label>
             <input style={{type:"text"}} onChange={handleTheFirstNameChange}/>
             {error.firstName && <div>{error.firstName}</div>}
             
            </div>
           <div style={{padding:"10px"}}>
           <label>Last Name:</label>
            <input style={{type:"text"}} onChange={handleTheLastNameChange}/>
            {error.lastName && <div>{error.lastName}</div>}
           </div>
          
            <button style={{type:"button"}} >
                Submit
            </button>
           
           
            </form>
            {fullName && <div>{fullName}</div>}

        </div>
        </>);

    }

export default DisplayName;


    