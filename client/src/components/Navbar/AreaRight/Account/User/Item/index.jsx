import { Link } from "react-router-dom";
import Icon from "../../../../../Icon/Icon";
import Title from "../../../../../Title/Title";
import PropTypes from "prop-types";

function Item({ item }) {
  return (
    <Link to={item?.to} className="flex flex-row items-center gap-2 pt-3 pb-3 pl-4 pr-4 hover:bg-primary-25 text-primary-300">
      {item?.icon && <Icon icon={item?.icon} size={18} />}
      {item?.name && <Title title={item?.name} xl fontMedium />}
    </Link>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
