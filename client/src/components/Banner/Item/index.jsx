import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Image from "../../Image/Image";

function Item({ item }) {
  return (
    <div className="list-none m-0 p-0 w-full">
      <div className="w-full h-full flex flex-row basis-auto flex-shrink min-h-0 min-w-0 list-none">
        <Link className="w-full h-full">
          <div className="aspect-[3/1.25] rounded-[32px]">
            <Image src={item?.image} alt={item?.title} className="w-full h-full object-cover rounded-[32px]" />
          </div>
        </Link>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
