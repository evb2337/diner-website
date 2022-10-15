import Head from "next/head";
import { Footer, NavBar } from ".";

export default function Breakfast() {
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
          <div className="text-3xl text-center">Breakfast</div>
          <div className="text-2xl text-center p-10">Specials</div>

          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Weekday Specials</h1>
              <p className="text-xl plain-font">
                Two eggs, home fries or hash browns, toast and choice of 2
                pieces of bacon, ham or sausage.
              </p>
              <h1 className="text-xl pt-4">Valley Sunrise Special</h1>
              <p className="text-xl plain-font">
                Three eggs, three pieces of bacon, three pieces of toast, with
                home fries or hash browns.
              </p>
            </div>

            <div className="flex flex-col relative w-1/2">
              <div className="absolute top-0 right-0 text-3xl ">
                Western omelette
              </div>
            </div>
          </div>

          <div className="text-2xl text-center p-10">Small Appetites</div>
          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Breakfast Sandwich</h1>
              <p className="text-xl plain-font">
                Choice of bacon, ham or sausage with egg and cheese on an
                English Muffin or bagel.
              </p>
              <h1 className="text-xl pt-4">Two Biscuits & Sausage</h1>
              <p className="text-xl"></p>
              <h1 className="text-xl pt-4">Short Stack of Hotcakes (2)</h1>
              <h1 className="text-xl pt-4">
                Short Stack of Blueberry Hotcakes
              </h1>
            </div>

            <div className="flex flex-col relative w-1/2">
              <div className="absolute top-0 right-0 text-3xl ">
                Western omelette
              </div>
            </div>
          </div>

          <div className="text-2xl text-center p-10">Omelettes</div>
          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Garden Omelette</h1>
              <p className="text-xl plain-font">
                Packed with all the garden goodies! Mushrooms, tomatoes, green
                peppers and onions – plus shredded cheese!
              </p>
              <h1 className="text-xl pt-4">Meat Trio Omelette</h1>
              <p className="text-xl plain-font">
                Ham, bacon and sausage are combined with cheese in this meat
                lovers Omelette.
              </p>
              <h1 className="text-xl pt-4">Cheese Omelette</h1>
              <p className="text-xl plain-font">
                Perfectly whisked and ready to hold your favorite cheese. Choose
                American, Swiss, Provolone or Cheddar Jack cheese.
              </p>
              <h1 className="text-xl pt-4">Western Omelette</h1>
              <p className="text-xl plain-font">
                A classic Omelette with ham, cheese, onions and green peppers.
                ADD salsa for .99 cents.
              </p>
            </div>

            <div className="flex flex-col relative w-1/2">
              <div className="absolute top-0 right-0 text-3xl text-center ">
                Western Omelette
                <div className="px-16 py-12">
                  <img src="./omelette.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-2xl text-center p-10">The Classics</div>
          <div className="w-full flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Haystacks</h1>
              <p className="text-xl plain-font">
                A toasted biscuit is split in half and stacked with scrambled
                eggs, sausage and shredded hash browns, then covered with
                sausage gravy. Get out the pitchfork!
              </p>
              <h1 className="text-xl pt-4">Belgian Waffle & Berries</h1>
              <p className="text-xl plain-font">
                A crisp Belgian waffle topped with strawberries and whipped
                cream.
              </p>
              <h1 className="text-xl pt-4">Classic Belgian Waffle</h1>
              <p className="text-xl plain-font">With syrup and butter.</p>
              <h1 className="text-xl pt-4">Griddle Combo</h1>
              <p className="text-xl plain-font">
                Two eggs combined with hotcakes, waffle, or French toast and
                ham, bacon or sausage.
              </p>
              <h1 className="text-xl pt-4">Hotcakes</h1>
              <p className="text-xl plain-font">
                Stack of three light and fluffy cakes. • ADD strawberries &
                whipped cream for $1.20 additional. Custom-make them with
                pecans, M&M’s, bananas or chocolate chips for .99 cents
                additional!
              </p>
              <h1 className="text-xl pt-4">Breakfast Wrap</h1>
              <p className="text-xl plain-font">
                Fluffy eggs scrambled with ham, bacon or sausage, sauteed onions
                & green peppers, cheddar/jack cheese, wrapped in a flour
                tortilla. Served with hash browns or home fries.
              </p>
              <h1 className="text-xl pt-4">Blueberry Hotcakes</h1>
              <p className="text-xl plain-font">
                Stack of three light and fluffy cakes.
              </p>
              <h1 className="text-xl pt-4">Big Country Breakfast</h1>
              <p className="text-xl plain-font">
                We fill up the plate with 2 eggs and toast, plus an order of
                hotcakes, French toast or a waffle. Choose ham, bacon or sausage
                and either home fries or hash browns.
              </p>
              <h1 className="text-xl pt-4">Country Fried Steak & Eggs</h1>
              <p className="text-xl plain-font">
                A hearty breakfast! Country-fried steak smothered with sausage
                gravy, plus 2 eggs, hash browns or home fries and toast.
              </p>
              <h1 className="text-xl pt-4">French Toast</h1>
              <p className="text-xl plain-font">
                Two thick slices made with our secret recipe. • ADD strawberries
                and whipped cream or bananas and caramel sauce $1.20 additional.
              </p>
            </div>

            <div className="flex flex-col relative w-1/2">
              <div className="absolute top-0 right-0 text-3xl ">
                Western omelette
              </div>
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
