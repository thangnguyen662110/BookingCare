import { Link } from "react-router-dom";
import Image from "../../../../components/Image/Image";
import Title from "../../../../components/Title/Title";
import "./style.scss";
import PropTypes from "prop-types";

function Item({ item }) {
  return (
    <Link to={item?.to} className="w-full h-full">
      <div className="border-[2px] rounded-[16px] w-full">
        <div className="w-full h-full">
          <div className="p-2 sm:p-5 w-full h-full">
            <div className="flex flex-col w-full">
              <div className="aspect-[2/1.5] rounded-[16px]">
                <Image
                  src={item?.image}
                  className="bg-gray-100 w-full h-full object-cover rounded-[16px]"
                />
              </div>
              <div className="mt-4 flex items-center justify-center text-center w-full">
                <Title
                  title={item?.description}
                  className="whitespace-pre-wrap title text-[14px] md:text-[16px] font-[400] sm:font-[600] 2md:text-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
