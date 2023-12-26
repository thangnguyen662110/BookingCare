import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Title from "../../../../Title/Title";

function Item({ item }) {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div>
      {item?.type === "button" && (
        <Link to={item?.to} className={`${pathName === item?.to ? "font-bold text-white bg-secondary-500 " : "bg-transparent"} pt-[6px] sm:pt-[8px] pb-[6px] sm:pb-[8px] pl-[8px] sm:pl-[10px] pr-[8px] sm:pr-[10px] rounded-full`}>
          <Title title={item?.name} className="text-[14px] sm:text-[16px] md:text-[18px]" />
        </Link>
      )}
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
