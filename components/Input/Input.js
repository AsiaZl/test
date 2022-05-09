import { Input as ReactInput } from "reactstrap";
import styles from "./Input.module.css";

export function Input({ ...props }) {
  return <ReactInput className={styles.input} {...props} />;
}
