import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 sm:my-16 text-center px-4">
      <h1 className="text-xl text-violet-700 font-semibold mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-orange-400 italic">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
