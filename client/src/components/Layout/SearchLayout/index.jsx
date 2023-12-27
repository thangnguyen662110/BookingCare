import MainLayout from "..";
import Navbar from "../../Navbar";
import PropTypes from "prop-types";
function SearchLayout({ children }) {
  return (
    <MainLayout>
      <div className="flex flex-col h-screen">
        <Navbar />
        {children}
        <div>Footer</div>
      </div>
    </MainLayout>
  );
}

SearchLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchLayout;
