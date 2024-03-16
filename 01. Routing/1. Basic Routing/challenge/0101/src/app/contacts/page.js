import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>This is the contact page.</p>
      <ul>
        <li><Link href="/about">About</Link></li>
        <Link href="/">Home</Link>
      </ul>
    </div>
  );
}