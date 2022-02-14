import { useState } from "react"

const Common = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4])
    const [inputText, setInputText] = useState("")

    const addHandler = () => {
        let storedNums = [...numbers]
        storedNums.push(numbers[numbers.length - 1] + 1)
        setNumbers(storedNums)
    }

    const removeHandler = (index) => {
        let storedNums = [...numbers]
        storedNums.splice(index, 1)
        setNumbers(storedNums)
    }

    return (
        <div>
            <h1>common component</h1>
            {numbers.map((number, index) => {
                return <h1 onClick={() => removeHandler(index)} key={index}>{number}</h1>
            })}
            <button onClick={addHandler}>add number</button>
            <div>
                <h1>user text</h1>
                    <input onChange={(event) => setInputText(event.target.value) }/>
                <h2>{inputText}</h2>
            </div>
        </div>
    )
}

export default Common