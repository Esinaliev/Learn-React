
const FC = ({name, setName}) => {

    const change = (event) => {
        //this.setState({name: event.target.value});
        setName(event.target.value)
    }

    const send = (event) => {
        event.preventDefault();
        console.log(name)
    }

    return (
        <div>
            <p>Func C</p>
            <input type="text" onChange={change} value={name}></input>
            <button type="submit" onClick={send}>click me</button>
        </div>
    )
}

export default FC;
