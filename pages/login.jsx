import { useState } from "react";
const Login = () =>{
    let input_values = "10"
    const [input_value, setInputValue] = useState("test");

    function changeInput(event){
        setInputValue(event.target.value)
    }
    return <>
        <form>
            <p>input value is {input_value}</p>
            <input onChange={changeInput}/>
            <input/>
            <button>Submit</button>
        </form>
    </>
}
export default Login
