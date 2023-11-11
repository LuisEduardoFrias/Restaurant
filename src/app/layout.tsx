import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "cp/icon/icon";
import BackButton from "cp/back_button/back_button";
import ShowEditBtn from "cp/configuration/show_edit_btn";
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
              width={110}
              height={65}
            />
          </Link>
          {/*   <div>
            <Link href='/setting' className='op-menu'>
              <Icon>settings</Icon> setting
            </Link>
          </div> */}
          <Link href='/bill' className='op-menu'>
            <Icon>receipt_long</Icon>
          </Link>
        </header>
        <main>
        {children}
        </main>
        <fooder>
          <BackButton className='menu-btn back' />
          <button className='menu-btn home'>
            <Link href='/' style={{color:"black"}} >
              <Icon>home</Icon>
            </Link>
          </button>
          {/* <button className='menu-btn'>
            <Icon>edit</Icon>
          </button> */}
        </fooder>
      </body>
    </html>
  );
}
/* 
factura- receipt_long
dinero- attach_money
tarjeta- credit_card credit_score
*/
