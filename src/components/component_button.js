import Classes from './component_button.module.css';

const ComponentButton = (props) => {
    return (
        <div>
            <button type={props.type || 'button'} className={Classes.button} onClick={props.onbuttonClick}>{props.buttonTitle}</button>
        </div>
    )
}
export default ComponentButton;