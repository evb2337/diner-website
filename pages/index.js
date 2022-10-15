import Head from "next/head";

export function NavBar() {
  return (
    <div className="flex flex-col md:flex-row w-full h-30 place-content-around items-center">
      <div className="w-60 h-30">
        <img src="./logo.png" alt="Valley Diary logo"></img>
      </div>

      <div className="special-font text-2xl p-1">
        <a className="nav-link" href="/hours">
          Hours
        </a>
      </div>
      <div className="special-font text-2xl p-1">
        <a href="/menu">Menu</a>
      </div>
      <div className="special-font text-2xl p-1">
        <a href="/locations">Locations</a>
      </div>
      <div className="special-font text-2xl p-1">
        <a href="/about">About</a>
      </div>

      <button className="h-10 order-button special-font text-xl p-5 m-6">
        Order Online
      </button>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="flex flex-row justify-center pt-5 pb-2">
        ***this is not affiliated with any brand or corporation and the <a href="https://github.com/evb2337/diner-website">source</a>
        is under an MIT license.***
      </div>
      <div className="flex flex-row justify-center space-x-20 md:space-x-40 plain-font text-lg ">
        <div className=" flex flex-col">
          <div>
            <a href=" ">fundraisers</a>
          </div>
          <div>
            <a href=" ">donations</a>
          </div>
        </div>

        <div className=" flex flex-col">
          <div>
            <a href=" ">careers</a>
          </div>
          <div>
            <a href=" ">eClub</a>
          </div>
        </div>

        <div className=" flex flex-col">
          <div>
            <a href=" ">news</a>
          </div>
          <div>
            <a href=" ">donations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
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

      <main className="w-full">
        <NavBar />

        <div className="flex flex-row w-full main-burger">
          <div className="burger-img pt-20 h-[300px] md:h-[550px] md:pt-0">
            <img src="./burger-main.png" className="h-full w-auto" />
          </div>
          <div className="w-28 burger-arrow">
            <img src="./down-arrow.png" />
          </div>
          <div className="w-40  plain-font pt-10  pr-10 md:text-3xl md:pt-0 text-center burger-info">
            <h1>two burgers,egg, bacon and a hashbrown!</h1>
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
