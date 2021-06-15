import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src="/logo-scheffer-big.svg" alt="logo" />
      </div>
    </header>
  );
}
