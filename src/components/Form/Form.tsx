import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { ChangeEvent } from "react";

import { useState } from "react";

interface IProps {
	addNewTodo: (text: string) => void;
	// text: string;
	// setText: (value: string) => void
}

export const Form = ({ addNewTodo }: IProps) => {
	const [text, setText] = useState<string>("");

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value)
	}

	const handleAddNewTodo = () => {
		addNewTodo(text)
		setText("")
	}

  return (
    <div className="form">
      <Input value={text} onChange={onChange} />
      <Button text="Добавить" onClick={handleAddNewTodo} />
    </div>
  );
};

