import {useState} from "react";

const W270922 = () => {

    const [value1, setvalue1] = useState(0)
    const [value2, setvalue2] = useState(0)
    const [number1, setnumber1] = useState(0)
    const [number2, setnumber2] = useState(0)
    const [summ, setsumm] = useState(0)

    
    const change1 = (event) => {
        setvalue1(parseInt(event.target.value))
    }
    const change2 = (event) => {
        setvalue2(parseInt(event.target.value))
    }

    const check = () => {
        if(value1 == number1 && value2 == number2)
            return 0;

        setnumber1(value1)
        setnumber2(value2)

        sum();
    }

    const sum = () => {
        console.log("sum");

        if(summ == value1+value2)
        return 0;
        setsumm(value1+value2);
        
        document.body.getElementsByClassName("result")[0].innerHTML=summ+"<br/>"+even()
    }

    const even = () => {
        console.log("even");
        if(summ%2==0)
            return "четный";
        else
            return "нечентый";
    }

    return (
        <div>
            <input type="number" onChange={change1}></input>
            <input type="number" onChange={change2}></input>
            <button onClick={check}>Check</button>
            <br/>
            <p className="result"></p>
        </div>
    )
}

export default W270922;
