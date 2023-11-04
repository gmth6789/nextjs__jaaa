import dynamic from "next/dist/shared/lib/dynamic";
import Link from "next/link";
import React from "react";
import { getDataFromUrl } from "../../utils/route";

export default function Create({ template, data }) {
  let Component = () => <div></div>;
  if (template) Component = dynamic(() => import("/pages/create/" + template));

  return template && data ? <Component /> : (
    <div className="middle">
      <Link href="/create/namecard-horizontal">บัตรแนวนอน</Link>
      <Link href="/create/namecard-vertical">นามบัตรตรง</Link>
      <Link href="/create/apparel">บัตรแนะนำตัว</Link>
    </div>
  );
}

export const getServerSideProps = getDataFromUrl;