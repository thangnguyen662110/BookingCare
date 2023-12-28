import HealthFacilities from "./HealthFacilities";
import Service from "./Service";
import Specialist from "./Specialist";

const Home = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full pr-2 pl-2">
        <div className="mx-auto w-full lg:max-w-[var(--max-width)] bg-white p-[10px]">
          <div className="flex flex-col gap-2">
            <Service />
            <Specialist />
            <HealthFacilities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
