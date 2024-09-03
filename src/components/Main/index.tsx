import { Post } from "../Post";
import styles from "./Main.module.css";

export function Main() {
  return (
    <main className={styles.main}>
      <Post />
      <Post />
    </main>
  );
}
