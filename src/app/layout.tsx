import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "cp/icon/icon";
// import { Inter } from 'next/font/google'
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Restautant",
  description: "App for restaurants",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //className={inter.className}
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
        />
      </head>
      <body>
        <header>
          <Link href='/' className='link-title-logo'>
            <Image
              src='/restaurant.jpg'
              alt='Imagen del restaurante'
              width={120}
              height={70}
            />
          </Link>
          <div>
            <Link href='/add_plate' className='op-menu'>
              <Icon>add_circle</Icon> Plate
            </Link>
            <Link href='/add_menu' className='op-menu'>
              <Icon>add_circle</Icon> Option
            </Link>
          </div>
          <Link href='/bill' className='op-menu'>
            <Icon>receipt_long</Icon>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
/* 
factura- receipt_long
dinero- attach_money
tarjeta- credit_card credit_score
*/
