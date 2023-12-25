import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Title from "../../../../Title/Title";

function Item({ item }) {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div>
      {item?.type === "button" && (
        <Link to={item?.to} className={`${pathName === item?.to ? "font-bold text-white bg-secondary-500 " : "bg-transparent"} pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-full`}>
          <Title title={item?.name} xxxl />
        </Link>
      )}
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
