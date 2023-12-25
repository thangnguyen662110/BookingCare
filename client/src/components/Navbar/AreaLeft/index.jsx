import Menu from "./Menu";
import Navigation from "./Navigation";

function AreaLeft() {
  return (
    <div className="flex flex-col 2lg:flex-row items-start 2lg:items-center gap-4">
      <Menu />
      <Navigation />
    </div>
  );
}

export default AreaLeft;
