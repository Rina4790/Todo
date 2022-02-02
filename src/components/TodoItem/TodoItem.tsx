import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "../Button/Button.module.css"

interface IProps {
  text: string;
  completed: boolean;
  onDelete: () => void;
	onComplete: () => void;
	time: string;
}

export const TodoItem = ({ text, completed, onDelete, onComplete, time }: IProps) => {
	const [showTime, setshowTime] = useState(false)
	const Toogle = () => {
		setshowTime (!showTime)
	}
  return (
    <div className={`${styles.main_item}`}>
    	<div className={`${styles.btn}`}>
			  <Button
				  text="&#10003;"
				  onClick={onComplete}/>
	      <p className={`${styles.text_item}`} onClick={Toogle} style={{ textDecoration: completed ? "line-through" : "none" }}>
	        {text}
			  </p>
			  {showTime ? (<p>{time}</p>): null}
	      <Button text="X" onClick={onDelete} />
	    </div>
    </div>
  );
};
