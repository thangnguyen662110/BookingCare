import PropTypes from "prop-types";
import Button from "../../../../components/Buttons/Button";

function Body({ data, onClick }) {
  return (
    <div>
      {data.map((item, index) => (
        <Button onClick={() => onClick(item?.id, item?.name)} key={index} title={item?.name} className="text-[16px] w-full pl-3 pr-3 pt-4 pb-4 hover:bg-gray-100" />
      ))}
    </div>
  );
}

Body.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
};
export default Body;
