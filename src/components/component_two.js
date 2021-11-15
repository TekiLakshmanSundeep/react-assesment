import './component_two.css'
const ComponentTwo = (props) => {
    return (
        <div className="parent_container_c2">
            <label>{props.labelName}</label>
            <input onChange={props.onInputChange} className="user_input" type={props.type} placeholder={props.placeholder}></input>
        </div>  
    )
}

export default ComponentTwo;