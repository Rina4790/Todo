import { ChangeEventHandler } from "react";
import styles from "./Input.module.css";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ onChange, value }: IProps) => {
	return <input
		placeholder="Добавь новую задачу"
		className={`${styles.input}`}
		onChange={onChange}
		value={value} />;
};
