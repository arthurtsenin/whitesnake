import { Head } from "@react-email/components";

export default function LayoutScript() {
  return (
    <Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PLXMPJC9"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </Head>
  );
}
