'use client';

import { useFoo } from "@/custom_hooks/useFoo";

export default function Contact() {
  const [contact, setContact] = useFoo("Peter Parker");

  return (
    <div>
      <h1>{contact}</h1>
      <ul>
      </ul>
    </div>
  );
}