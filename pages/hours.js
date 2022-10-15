import Head from "next/head";
import { Footer, NavBar } from ".";

export default function Hours() {
  return (
    <div className="container">
      <Head>
        <title>Diner Restaurant</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Galdeano&family=IM+Fell+English+SC&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="w-full special-font text-2xl ">
        <NavBar />

        <div className="w-full ">
          <div className="text-3xl text-center pt-5">Hours</div>
          <div className="text-2xl text-center p-10"></div>

          <div className="w-full  flex flex-row text-center">
            <div className="w-full flex flex-col px-3 ">
              <p className="text-3xl plain-font ">7 AM – 8 PM Sun-Thu</p>
              <p className="text-3xl plain-font">7 AM – 9 PM Fri – Sat</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
