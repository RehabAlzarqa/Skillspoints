"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [points, setPoints] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [microcours, setMicrocours] = useState([]);

  useEffect(() => {
    fetch("/api/utilisateur")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    fetch("/api/points")
      .then((res) => res.json())
      .then((data) => setPoints(data));
    fetch("/api/recompenses")
      .then((res) => res.json())
      .then((data) => setRewards(data));
    fetch("/api/microcours/creation")
      .then((res) => res.json())
      .then((data) => setMicrocours(data));
  }, []);

  return (
    <div>
      <h1>Mes Données</h1>
      <h2>Utilisateurs</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <h2>Points</h2>
      <pre>{JSON.stringify(points, null, 2)}</pre>
      <h2>Récompenses</h2>
      <pre>{JSON.stringify(rewards, null, 2)}</pre>
      <h2>Microcours (Création)</h2>
      <pre>{JSON.stringify(microcours, null, 2)}</pre>
    </div>
  );
}
ر;
