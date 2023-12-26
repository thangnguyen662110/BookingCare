import AreaLeft from "./AreaLeft";
import AreaRight from "./AreaRight";

const Navbar = () => {
  return (
    <div className="w-full bg-primary-25">
      <div className="mx-auto w-full lg:max-w-[var(--max-width)] bg-primary-25 p-[10px]">
        <nav className="relative flex items-start 2lg:items-center w-full">
          <div className="flex-1">
            <AreaLeft />
          </div>
          <div className="absolute top-0 right-0 sm:relative">
            <AreaRight />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
