import routerConfig from "../../../../config/routerConfig";
import { PiClockClockwiseBold } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import Icon from "../../../Icon/Icon";
import Title from "../../../Title/Title";

const items = [
  {
    id: "appointmentSchedule",
    to: routerConfig.appointmentSchedule,
    name: "Lịch hẹn",
    icon: PiClockClockwiseBold,
    size: 26,
  },
  {
    id: "support",
    to: routerConfig.support,
    name: "Hỗ trợ",
    icon: MdSupportAgent,
    size: 26,
  },
];

function Service() {
  return (
    <div className="flex flex-row gap-4">
      {items?.map((item, index) => (
        <Link to={item?.to} className="flex flex-col items-center text-primary-200" key={index}>
          <Icon icon={item?.icon} size={item?.size} />
          <div>
            <Title title={item?.name} nowrap={false} xl fontMedium />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Service;
