import React, { ReactNode } from "react";
import styles from "../styles/Square.module.css";
// import { useState } from "react";

type Props = {
  value: ReactNode;
  onClick?(): void;
};

export default function Square(props: Props) {
  // const [valueF, setValueXXX] = useState(null);

  return (
    <button className={styles.square} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}
