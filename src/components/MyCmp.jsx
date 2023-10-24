import React, {useState} from 'react'

function MyCmp(props) {
    const [counter, setCounter] = useState(0)
	const {title} = props;
    const increment = () => {
        setCounter(counter + 1)
    }
	console.log(props);
    return (
        <>
		<h1>{title}</h1>
            <span>{counter}</span>
            <button onClick={increment}>increment</button>
        </>
    )
}

export default MyCmp
