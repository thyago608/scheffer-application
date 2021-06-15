import styles from "../../styles/pages/teamSelection.module.css";
import { Card } from "../../components/Card";

export default function TeamSelection() {
  return (
    <main className={styles.main}>
      <Card title="Equipe 1" />
      <Card title="Equipe 2" />
      <Card title="Equipe 3" />
      <Card title="Equipe 4" />
    </main>
  );
}
