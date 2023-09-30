import {useState} from "react";

export default function Square(props: {value: string | null, onSquareClick: () => void}) {
    const [value, setValue] = useState<null | string>(null);




    return <button className="square"
                   onClick={() => props.onSquareClick()}
    >{props.value}</button>;
}
