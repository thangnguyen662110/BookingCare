import Service from "./Service";

const Home = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full pr-2 pl-2">
        <div className="mx-auto w-full lg:max-w-[var(--max-width)] bg-white p-[10px]">
          <Service />
        </div>
      </div>
    </div>
  );
};

export default Home;
