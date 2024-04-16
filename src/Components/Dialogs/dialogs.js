import React from "react";
import style from './Dialogs.module.css';
import {Link} from "react-router-dom";
import {send_message_ActionCreator, update_new_message_text_ActionCreator} from "../../redux/store";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <li><Link to={`/dialogs/` + dialog.id}>{dialog.name}</Link></li>)
    let messagesElements = props.message.map(message => <li>{message.message}</li>)
    let NewMessageText = props.newMessageText

    //event обьект события onChange
    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.onNewMessageChange(text)
    }

    let onSendMessage = () => {
        props.onSendMessage()
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <ul className={style.listItem}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={style.verticalLine}></div>
            <div>
                <ul className={style.message}>
                    {messagesElements}
                </ul>
            </div>
            <div>
                <textarea value={NewMessageText}
                          placeholder={'Enter message'}
                          onChange={onNewMessageChange}/><br/>
                <button onClick={onSendMessage}>Отправить</button>
            </div>

        </div>

    )
}

export default Dialogs;