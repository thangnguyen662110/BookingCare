import MainLayout from "..";
import Banner from "../../Banner";
import Navbar from "../../Navbar";
import PropTypes from "prop-types";
const DefaultLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Banner />
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
