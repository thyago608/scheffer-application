import styles from "./styles.module.css";

export function Card(props) {
  return (
    <section>
      <header>
        <h1>
          <img src="./logo-scheffer.svg" alt="" />
        </h1>
      </header>
      <span>{props.title}</span>
      <span>{props.description}</span>
      <span>{props.completionDate}</span>
    </section>
  );
}
