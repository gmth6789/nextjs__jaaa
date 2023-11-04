import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLiff } from "../../hooks/useLiff";
import { generateMessage } from "../../utils/message";
import MessagePreview from "../common/MessagePreview";
import styles from "./Hero.module.css";

export default function Hero() {
  const { isLoggedIn, liff } = useLiff();
  const [message, setMessage] = useState({});

  useEffect(() => {
    // Load sample message
    const sampleData = require("../../assets/data/sample.json");
    setMessage(generateMessage("namecard-horizontal", sampleData));
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Ufabetcompany - Card</h1>
        <p className={styles.description}>บันทึกนามบัตรแล้วส่งให้เพื่อนของคุณใน LINE</p>
        {!isLoggedIn && (
          <button className={styles.button} onClick={() => liff.login()}>
            เข้าสู่ระบบไลน์
          </button>
        )}
        <Link href="/create">
          <button className={styles.button}>เริ่มทำ</button>
        </Link>
      </div>
      <MessagePreview className={styles.messagePreview} message={message} style={{ width: 425 }} horizontal />
    </section>
  );
}