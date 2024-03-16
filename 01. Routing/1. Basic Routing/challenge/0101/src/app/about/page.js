import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <ul>
        <li><Link href="/contacts">Contacts</Link></li>
        <li><Link href="/">Home</Link></li>
      </ul>
    </div>
  );
}