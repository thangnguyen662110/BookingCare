import PropTypes from "prop-types";

function MainLayout({ children }) {
  return <div>{children}</div>;
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
