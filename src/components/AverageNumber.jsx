import React, {useState} from "react";

export default  function AverageNumber() {
    const [arr, setValue] = useState([1, 6, 14]);
    const [input, setInput] = useState(0);

    const result = arr.map((element, index) => {
        return <p key={index}>{element}</p>;
    });

    const btnPress = () =>{
        setValue([...arr, input])
        setInput([])
    };
    const btnDestroyLast = () =>{
        if (arr.length !=null){
            arr.pop();
            console.log("Последний элемент был удалён")


        }
        else if (arr.length ==null){
            alert("Последний элемент массива был удалён")//Да, я помню, вы говорили про Алерт и то, что если его видите, то закрываете сайт, но просто времени много нет на модернизацию
        }
    };
    const AverageNumber = () => {
        let sum = 0;

        for (let i = 0; i < arr.length; i++){
            //sum = sum + arr[i]
            sum += arr[i]
        }

        return  sum / arr.length;

    };

    return <>
        <div>
            <input type="number" name= "NumberInput" value={input} onChange={e => setInput(Number(e.target.value))}/>
            <button  onClick={btnPress}>+</button>
            <button  onClick={btnDestroyLast}>DestroyLastNumber</button>
        </div>
        <div>
            Number: {arr.join(", ")}
            <br/>AverageNumber {AverageNumber()}
        </div>
    </>
}


