import styles from "./home.module.css";
import { Card } from "../components/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Card title="Preventivas" />
      <Card title="Cadastrar Preventivas" />
    </main>
  );
}
