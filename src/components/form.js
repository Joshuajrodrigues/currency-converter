import React,{useState} from "react"
import "./form.css"

export default function Form(){
    const[result,setResult]=useState("")
    const[fromCurr,setFromCurr]=useState(null)
    const[toCurr,setToCurr]=useState(null)
    const[amt,setAmt]=useState(0)
    

 


    const getCurr=async()=>{
        const response= await fetch(`https://api.openrates.io/latest?base=${fromCurr}&symbol=${toCurr}`)
        const data = await response.json()
        console.log(data.rates[toCurr]);
        setResult(data.rates[toCurr])
    }

    const updateAmt=e=>{
        setAmt(e.target.value)
    }
    console.log(amt);
    const upFromCurr=e=>{
        setFromCurr(e.target.value)
    }
    console.log(fromCurr);
    const upToCurr=e=>{
        setToCurr(e.target.value)
    }
    console.log(toCurr);
    const handleSubmit=e=>{
        e.preventDefault()
        getCurr()

    }
    return(
    <form className="container" onSubmit={handleSubmit}>
        <label>Amount:</label>

        <input
        type="text"
        value={amt}
        onChange={updateAmt}
        ></input>  
        <br></br>

        <label>From: </label>
        
        <select onChange={upFromCurr}>
            <option>---</option>
            <option value="INR">INR-India</option>
            <option value="GBP">GBP-UK</option>
            <option value="AUD">AUD-AUS</option>
            <option value="USD">USD-USA</option>
            <option value="JPY">JPY-Japan</option>
            <option value="CAD">CAD-Canada</option>
            <option value="CNY">CNY-China</option>
        </select>
        
        <br></br>
        <label>To: </label>

        <select onChange={upToCurr}>
            <option>---</option>
            <option value="INR">INR-India</option>
            <option value="GBP">GBP-UK</option>
            <option value="AUD">AUD-AUS</option>
            <option value="USD">USD-USA</option>
            <option value="JPY">JPY-Japan</option>
            <option value="CAD">CAD-Canada</option>
            <option value="CNY">CNY-China</option>
        </select><br></br>
        <button type="submit">Submit</button>
        <p>Value: {result*amt}</p> 
    </form>
    )
    
}