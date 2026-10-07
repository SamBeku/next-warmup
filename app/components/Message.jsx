'use client';

import { useState } from "react";

export default function Message() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMessage() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/message");
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div>
      <button onClick={loadMessage}>Load server message</button>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
