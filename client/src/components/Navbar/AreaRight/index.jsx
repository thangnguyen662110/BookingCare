import Service from "./Service";
import Account from "./Account";

function AreaRight() {
  return (
    <div className="flex flex-row items-center gap-4">
      <Service />
      <Account />
    </div>
  );
}

export default AreaRight;
