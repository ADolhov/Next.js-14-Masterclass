'use client';

import { useRouter } from 'next/navigation';
const Navbar = () => {
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path);
  }
  return (
    <nav className="">
      <ul className="flex">
        <li className="mr-6">
          <button onClick={() => navigateTo("/")} className="nav-button" href="/">
            Home
          </button>
        </li>
        <li className="mr-6">
          <button onClick={() => navigateTo("/about")} className="text-blue-500 hover:text-blue-800" href="/about">
            About
          </button>
        </li>
        <li className="mr-6">
          <button onClick={() => navigateTo("/about/contacts")} className="text-blue-500 hover:text-blue-800" href="/about/contacts">
            Contacts
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;