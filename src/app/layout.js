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
        <Script
          src="https://api-maps.yandex.ru/v3/?apikey=e1f9579b-8502-438f-8273-6dff1fc98656&lang=ru_RU"
          strategy="beforeInteractive"
        />
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
