import MainLayout from "..";
import Navbar from "../../Navbar";
import PropTypes from "prop-types";
const DefaultLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-2 h-screen">
        <Navbar />
        {children}
        <div>Footer</div>
      </div>
    </MainLayout>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
