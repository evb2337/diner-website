import Head from "next/head";
import { NavBar } from ".";

export default function Lunch() {
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
          <div className="text-3xl text-center">Lunch</div>
          <div className="text-2xl text-center p-10">Burgers</div>

          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Classic Double Burger</h1>
              <p className="text-xl plain-font">
                Two fresh blended patties on a double-decker bun with a slice of
                American cheese, shredded lettuce and our own DB sauce.
              </p>
              <h1 className="text-xl pt-4">Bacon Cheese Double Burger</h1>
              <p className="text-xl plain-font">
                Two fresh blended patties on a double-decker bun with 2 slices
                of American cheese, bacon, shredded lettuce and our own DB
                sauce.
              </p>
              <h1 className="text-xl pt-4">The Classic</h1>
              <p className="text-xl plain-font">
                Fresh blended patties grilled just right. Completed with a leafy
                green lettuce and ripe red tomatoes. Add onions & pickles if you
                like!
              </p>
              <h1 className="text-xl pt-4">The Classic Cheese</h1>
              <p className="text-xl plain-font">
                The Classic only better! We add cheese, American, provolone or
                Swiss.
              </p>
              <h1 className="text-xl pt-4">Cheeseburger Club</h1>
              <p className="text-xl plain-font">
                A ½ pound of fresh ground beef with bacon, lettuce, tomato and
                cheese nestled between 2 grilled cheese sandwiches.
              </p>
              <h1 className="text-xl pt-4">Bacon Bourbon Burger</h1>
              <p className="text-xl plain-font">
                Bacon and Bourbon sauce tops these two patties with provolone
                cheese, lettuce and tomatoes.
              </p>
              <h1 className="text-xl pt-4">Valley Burger</h1>
              <p className="text-xl plain-font">
                Two 1/4 pound burgers, staked with sautéed onions, mushrooms,
                Provolone cheese and steak sauce.
              </p>
              <h1 className="text-xl pt-4">Garden Burger</h1>
              <p className="text-xl plain-font">
                A blend of mushrooms, onions, brown rice, rolled oats,
                mozzarella cheese, cheddar cheese, parsley and a hint of garlic.
                This burger is 1/2 the calories of regular ground beef. Top it
                with fresh lettuce and tomatoes.
              </p>
              <h1 className="text-xl pt-4">Rise & Shine</h1>
              <p className="text-xl plain-font">
                Two burgers topped with American cheese, fried egg, smoked bacon
                & shredded hash browns. Served on a roll with lettuce &
                tomatoes.
              </p>
              <h1 className="text-xl pt-4">Patty Melt</h1>
              <p className="text-xl plain-font">
                Grilled sourdough bread with American cheese, 2 patties, sautéed
                onions with our house burger sauce.
              </p>
            </div>

            <div className="flex flex-col relative w-1/2">
              <div className="absolute top-0 right-0 text-3xl ">
                Western omelette
              </div>
            </div>
          </div>

          <div className="text-2xl text-center p-10">Subs</div>
          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Philly Steak Sub</h1>
              <p className="text-xl plain-font">
                Chipped steak, sweet sautéed onions, mushrooms and green
                peppers, finished with your choice of cheese on an 8-inch roll.
              </p>
              <h1 className="text-xl pt-4">Chicken & Cheddar Jack Sub</h1>
              <p className="text-xl">
                Tender pieces of chicken breast, onions and peppers sizzled in
                our special marinade. Topped with shredded Cheddar Jack cheese
                and served on an 8-inch roll.
              </p>
              <h1 className="text-xl pt-4">Jumbo Fish</h1>
              <p>
                Three pieces of hand-breaded, deep-fried white fish on an 8-inch
                roll.
              </p>
              <h1 className="text-xl pt-4">Grilled Italian Sub</h1>
              <p>
                Slices of ham, salami, pepperoni and provolone cheese stacked on
                a toasted club roll, topped with lettuce, tomato and Italian
                dressing.
              </p>
            </div>

            <div className="flex flex-col relative w-1/2">
              <div className="absolute top-0 right-0 text-3xl ">
                Western omelette
              </div>
            </div>
          </div>

          <div className="text-2xl text-center p-10">Wraps</div>
          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Grilled Chicken Wrap</h1>
              <p className="text-xl plain-font">
                Tender grilled chicken, shredded lettuce, diced tomato, shredded
                cheese and Ranch dressing all wrapped-up in a flour tortilla.
              </p>
              <h1 className="text-xl pt-4">Buffalo Chicken Wrap</h1>
              <p className="text-xl plain-font">
                Breaded chicken coated with RedHot Buffalo sauce and combined
                with shredded lettuce, diced tomato, shredded cheese and Ranch
                dressing, then wrapped in a flour tortilla.
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

          <div className="text-2xl text-center p-10">Sandwiches</div>
          <div className="w-full flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Valley Club</h1>
              <p className="text-xl plain-font">
                Triple-decker loaded with turkey breast, crisp bacon, cheese,
                lettuce and tomato slices on white, Wheat or Rye bread.
              </p>
              <h1 className="text-xl pt-4">Classic Grilled Cheese</h1>
              <p className="text-xl plain-font">
                Choose American, Swiss or Provolone on grilled Sourdough bread.
              </p>
              <h1 className="text-xl pt-4">Grilled Reuben</h1>
              <p className="text-xl plain-font">
                Grilled on Marble Rye bread, this sandwich is piled high with
                corned beef, sauerkraut, Swiss cheese and sauce.
              </p>
              <h1 className="text-xl pt-4">Chicken Pecan</h1>
              <p className="text-xl plain-font">
                Chicken salad with chunks of lean white meat mixed with crunchy
                pecans, then layered on a lettuce leaf between 2 slices of Wheat
                bread.
              </p>
              <h1 className="text-xl pt-4">Bacon, Lettuce & Tomato</h1>
              <p className="text-xl plain-font">
                This Sourdough bread sandwich is layered with crisp
                hardwood-smoked bacon, lettuce and tomato.
              </p>
              <h1 className="text-xl pt-4">Philly Sourdough Melt</h1>
              <p className="text-xl plain-font">
                Grilled on Sourdough bread, our Philly Melt has shredded Philly
                steak, Provolone cheese, grilled mushrooms, onions, green
                peppers and is topped with Sweet Chili sauce.
              </p>
              <h1 className="text-xl pt-4">Ham & Bacon Melt</h1>
              <p className="text-xl plain-font">
                In between Sourdough bread are slices of Apple wood-smoked ham,
                crisp bacon, a fried egg, American cheese, topped with Boom-Boom
                sauce.
              </p>
            </div>

            <div className="flex flex-col relative w-1/2">
              <div className="absolute top-0 right-0 text-3xl ">
                Western omelette
              </div>
            </div>
          </div>
          <div className="text-2xl text-center p-10">
            Hot Open-Faced Sandwiches
          </div>
          <div className="w-full  flex flex-row">
            <div className="w-1/2 flex flex-col px-3">
              <h1 className="text-xl pt-4">Pot Roast</h1>
              <p className="text-xl plain-font">
                Piled high on toasted sourdough with a serving of pot roast,
                mashed potatoes or French fries and hot gravy.
              </p>
              <h1 className="text-xl pt-4">Turkey Breast</h1>
              <p className="text-xl plain-font">
                Piled high on toasted sourdough with a serving of turkey breast,
                mashed potatoes or French fries and hot gravy.
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
