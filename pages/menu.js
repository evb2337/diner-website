import Head from "next/head";
import { Footer, NavBar } from ".";

function MenuItem({ children, href }) {
  return (
    <a
      href={href}
      className="border-solid border-black border-2 w-30 py-2 md:w-64 md:py-5 m-3 special-font text-xl menu-nav-item"
    >
      {children}
    </a>
  );
}

export default function Menu() {
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

      <main className="w-full special-font text2xl ">
        <NavBar />

        <div className="flex flex-1 flex-col items-center w-4/5  border-solid border-black border-2  menu-nav px-3 md:mt-5">
          <div className="text-3xl md:py-3">Our Menu</div>
          <div class="flex flex-row place-content-around w-full">
            <div className="flex flex-col text-center ">
              <MenuItem href="/breakfast">Breakfast</MenuItem>
              <MenuItem>Appetizers</MenuItem>
            </div>
            <div className="flex flex-col text-center">
              <MenuItem href="/lunch">Lunch</MenuItem>
              <MenuItem>Soups & Salads</MenuItem>
              <MenuItem>Ice Creams</MenuItem>
            </div>
            <div className="flex flex-col text-center">
              <MenuItem href="/dinner">Dinner</MenuItem>
              <MenuItem>Sides</MenuItem>
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
