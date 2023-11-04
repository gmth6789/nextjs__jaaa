import Link from "next/link";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`${isOpen ? "open" : ""}`}>
        <button className="toggle" onClick={handleToggle} >{isOpen ? <FaTimes /> : <FaBars />}</button>
        <ul>
          <li><Link href="/">หน้าแรก</Link></li>
          <li><Link href="/create">ประวัติการแชร์</Link></li>
          <li><Link href="/about">รายได้ของคุณ</Link></li>
        </ul>
      </nav>
    </header>
  )
}