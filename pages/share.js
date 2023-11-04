import Link from "next/dist/client/link";
import Head from "next/dist/shared/lib/head";
import React, { useEffect } from "react";
import { FaPaperPlane, FaPen } from "react-icons/fa";
import Row from "../components/layout/Row";
import MessagePreview from "../components/common/MessagePreview";
import { useLiff } from "../hooks/useLiff";
import { sendFlexMessage } from "../utils/liff";
import { getDataFromUrl, getUrl } from "../utils/route";

export default function Share({ template, message, code, send }) {
  const { isLoggedIn, liff, isReady } = useLiff();

  useEffect(() => {
    if (isReady && send) sendMessage();
  }, [isReady]);

  const sendMessage = () => {
    if (isLoggedIn) {
      // Line in-app browser does not support shareTargetPicker
      // Open in LIFF browser to send message
      if (!liff.isInClient() && navigator.userAgent.includes("Line/")) {
        window.open(getUrl("send", template, { code }), "_blank");
      } else {
        sendFlexMessage(message);
      }
    } else {
      liff.login({
        redirectUri: getUrl("send", template, { code }, domain=process.env.LIFF_URL)
      });
    }
  };

  return (
    <div className="middle full container">
      <Head>
        <title>Share card to you friend</title>
      </Head>
      <div>
        <MessagePreview
          template={template}
          message={message}
          style={{ maxWidth: 400, maxHeight: 400, marginBottom: "50px" }}
        />
        <Row wrap style={{ justifyContent: "center" }}>
          <button onClick={sendMessage}>ส่ง <FaPaperPlane size={12} /></button>
          <Link href={getUrl("create", template, { code })}>
            <button>แก้ไข <FaPen size={12} /></button>
          </Link>
        </Row>
      </div>
    </div>
  );
}

export const getServerSideProps = getDataFromUrl;