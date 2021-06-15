import styles from "./styles.module.css";

export function Card(props) {
  return (
    <section className={styles.section}>
      <header>
        <h1>
          <img src="/logo-scheffer.svg" alt="logo" />
        </h1>
      </header>
      <div className={styles.infoBox}>
        <span>{props.title}</span>
        {props.description && <span>{props.description}</span>}
        {props.completionDate && <span>{props.completionDate}</span>}
      </div>
    </section>
  );
}
