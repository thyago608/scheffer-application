import Link from "next/link";
import styles from "../styles/pages/home.module.css";
import { Card } from "../components/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/TeamSelection">
        <Card title="Preventivas" />
      </Link>
      <Card title="Cadastrar Preventivas" />
    </main>
  );
}
