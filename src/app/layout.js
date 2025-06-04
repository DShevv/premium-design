import "./globals.scss";
import "@/assets/fonts/fonts.css";
import Script from "next/script";
import { Suspense } from "react";
import "@/blocks/Header/Header.module.scss";
import "@/blocks/Footer/Footer.module.scss";

export async function generateMetadata() {
  try {
    const info = await fetch(`${process.env.API_URL}/v1/design/settings`, {
      next: { revalidate: 60 },
    })
      .then((res) => res.json())
      .catch((err) => undefined);

    return {
      title: "Otto renovation group",
      description: "Воплощаем мечты в реальность",
      icons: {
        icon: `${process.env.STORE_URL}/storage/${info.favicon_path}`,
        apple: `${process.env.STORE_URL}/storage/${info.apple_icon_path}`,
      },
    };
  } catch (error) {
    return {};
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(102195742, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/102195742"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7QPTNXEM4F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7QPTNXEM4F');
          `}
        </Script>

        <Script
          src="https://api-maps.yandex.ru/v3/?apikey=e1f9579b-8502-438f-8273-6dff1fc98656&lang=ru_RU"
          strategy="beforeInteractive"
        />
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
