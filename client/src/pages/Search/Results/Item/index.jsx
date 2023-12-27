import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Image from "../../../../components/Image/Image";
import Title from "../../../../components/Title/Title";

function Item({ item }) {
  return (
    <div className="flex flex-col">
      <div></div>
      <Link>
        <div className="flex flex-row pt-2 pb-2 pr-[10px] hover:bg-gray-50 duration-200 pl-[10px] border-b border-[#eeeeee]">
          {item?.avatar && (
            <div className="h-[35px] w-[35px] ">
              <Image src={item?.avatar} className="bg-gray-100 w-full h-full object-cover" />
            </div>
          )}
          {item?.full_name && (
            <div className="ml-2">
              <Title title={item?.full_name} xl className="font-[400] text-[#333333]" />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
