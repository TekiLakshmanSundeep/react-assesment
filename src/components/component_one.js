import './component_one.css';
const ComponentOne = (props) => {
    return (
        <div className="parent_container_c1">
            <h1>{props.title}</h1>
        </div>
    )
}

export default ComponentOne;
