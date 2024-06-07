import { useState } from "react";

export default function SearchInput(){
    const [term,setTerm]= useState('');


const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event?.preventDefault
}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={term} onChange={e=>setTerm(e.target.value)} />
        </form>
    )
}