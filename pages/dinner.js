import Head from "next/head";
import { Footer, NavBar } from ".";

export default function Dinner() {
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
          <div className="text-3xl text-center">Dinner</div>
          <div className="text-2xl text-center p-10"></div>

          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Chicken Tenders</h1>
              <p className="text-xl plain-font">
                Delicious strips of chicken breast, breaded and deep-fried to a
                crisp golden brown, with your choice of dipping sauce.
              </p>
              <h1 className="text-xl pt-4">Bacon Bourbon Grilled Chicken</h1>
              <p className="text-xl plain-font">
                Tender all-natural grilled chicken breast topped with
                hardwood-smoked bacon and Bourbon sauce, finished with Cheddar
                Jack cheese. Lunch (1 chicken breast) Dinner (2 chicken breast)
              </p>
              <h1 className="text-xl pt-4">Country Fried Fish</h1>
              <p className="text-xl plain-font">
                Three pieces of hand-breaded white fish, deep-fried to a
                delicious golden brown.
              </p>
              <h1 className="text-xl pt-4">Country Fried Steak</h1>
              <p className="text-xl plain-font">
                Our special version is lightly breaded, nicely browned and
                topped with plenty of our beef or sausage gravy.
              </p>
              <h1 className="text-xl pt-4">Pot Roast</h1>
              <p className="text-xl plain-font">
                A hearty portion of, hand-shredded pot roast topped with plenty
                of our hot beef gravy.
              </p>
              <h1 className="text-xl pt-4">Liver & Onions</h1>
              <p className="text-xl plain-font">
                Tender liver carefully grilled and topped with lots of grilled
                sweet onions.
              </p>
            </div>

            <div className="flex flex-col relative w-1/2">
              <div className="absolute top-0 right-0 text-3xl ">
                Western omelette
              </div>
            </div>
          </div>

          <div className="text-2xl text-center p-10">Sides</div>
          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Applesauce</h1>

              <h1 className="text-xl pt-4">French Fries</h1>

              <h1 className="text-xl pt-4">Sweet Potato Fries</h1>

              <h1 className="text-xl pt-4">Seasoned Curly Fries</h1>
              <h1 className="text-xl pt-4">Mashed Potatoes & Gravy</h1>
              <h1 className="text-xl pt-4">Coleslaw</h1>
              <h1 className="text-xl pt-4">Vegetable</h1>
              <h1 className="text-xl pt-4">White Cheddar Mac & Cheese</h1>
              <h1 className="text-xl pt-4">Crock of Soup</h1>
              <h1 className="text-xl pt-4">Mixed Greens Salad</h1>
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
