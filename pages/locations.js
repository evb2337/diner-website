import Head from "next/head";
import { Footer, NavBar } from ".";

export default function Locations() {
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

        <div className="w-full">
          <div className="text-3xl text-center pt-5">Locations</div>
          <div className="text-2xl text-center p-10"></div>

          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-20">
              <h1 className="text-2xl pt-4">Belle Vernon</h1>
              <p className="text-xl plain-font pb-10">
                Tri County Plaza 400 Tri County Lane, Belle Vernon, PA 15012
              </p>
              <h1 className="text-2xl pt-4 ">Connellsville</h1>
              <p className="text-xl plain-font pb-10">
                133 North 8th Street, Connellsville, PA 15425
              </p>
              <h1 className="text-2xl pt-4">Kittanning</h1>
              <p className="text-xl plain-font pb-10">
                9 Franklin Village Shopping Center, Kittanning, PA 16201
              </p>
              <h1 className="text-2xl pt-4">Blairsville</h1>
              <p className="text-xl plain-font pb-10">
                920 Route 22 West, Blairsville, PA 15717
              </p>
              <h1 className="text-2xl pt-4">Dubois</h1>
              <p className="text-xl plain-font pb-10">
                18 Hoover Avenue, Dubois, PA 15801
              </p>
            </div>

            <div className="w-1/2 flex flex-col px-20">
              <h1 className="text-2xl pt-4">Latrobe</h1>
              <p className="text-xl plain-font pb-10">
                229 Colony Lane, Latrobe, PA 15650
              </p>
              <h1 className="text-2xl pt-4">Butler</h1>
              <p className="text-xl plain-font pb-10">
                275 Butler Commons Butler, PA 16001
              </p>
              <h1 className="text-2xl pt-4">Indiana</h1>
              <p className="text-xl plain-font pb-10">
                Regency Mall 1584 Oakland Avenue, Indiana, PA 15701
              </p>
              <h1 className="text-2xl pt-4">Mount Pleasant</h1>
              <p className="text-xl plain-font pb-10">
                390 Countryside Plaza, Mount Pleasant, PA 15666
              </p>
              <h1 className="text-2xl pt-4">Cranberry</h1>
              <p className="text-xl plain-font pb-10">
                80 Regina Drive, Cranberry, PA 16319
              </p>
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
