// para o typescript não reclamar é necessário fazer um tipagem global no index.d.ts onde declaramos o module a baixo
import { IPost } from "../../@types/Post";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";

interface PostProps extends IPost {}

export function Post({}: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar avatarURL="https://avatars.githubusercontent.com/u/37637218?v=4" />
          <div className={styles.authorInfo}>
            <strong>Ricardo Sobral</strong>
            <span>Engenheiro de Software</span>
          </div>
          {/* no dateTime podemos passar a hora real, é uma boa pratica, e é uma boa também passar um title, onde aparece uma especie de tooltip quando se descança o mouse por cima disso */}
        </div>
        <time title="16 de Agosto as 20:11" dateTime="2024-08-16 20:11:00">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
