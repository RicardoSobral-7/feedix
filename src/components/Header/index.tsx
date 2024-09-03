// para o typescript não reclamar é necessário fazer um tipagem global no index.d.ts onde declaramos o module a baixo
import styles from "./Header.module.css";

import feedixLogo from '../../assets/feedix-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={feedixLogo} alt="logotipo do feedix, laranja com 2 triangulos na diagonal o inferior sobrepondo a base do superior"  />
      <strong>Feedix</strong>
    </header>
  );
}
