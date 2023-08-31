import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import PostAddIcon from "@material-ui/icons/PostAdd";
// import AddIcon from "@material-ui/icons/Add";
// import ImportExportIcon from "@material-ui/icons/ImportExport";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import PeopleIcon from "@material-ui/icons/People";
// import Loading from "../layout/Loader/Loader.js"
// import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          {/* <DashboardIcon />  */}
          {/* <i class="fa-brands fa-github fa-2xl"></i> */}
          {/* <i class="fa-duotone fa-grid-horizontal fa-2xl"></i> */}
          <i class="fa-solid fa-rectangle-list"></i>
          &nbsp;
          Dashboard

        </p>
      </Link>
      <Link>
        <TreeView
          // defaultCollapseIcon={<ExpandMoreIcon />}
          // defaultExpandIcon={<ImportExportIcon />}
          defaultCollapseIcon={<i class="fa-sharp fa-solid fa-chevron-down"></i>}
          defaultExpandIcon={<i class="fa-sharp fa-solid fa-up-right-and-down-left-from-center "></i>}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              {/* <TreeItem nodeId="2" label="All" icon={< PostAddIcon  />} /> */}
              <TreeItem nodeId="2" label="All" icon={<i class="fa-regular fa-square-caret-down"></i>} />
            </Link>
            <Link to="/admin/product/new">
              {/* <TreeItem nodeId="3" label="Create" icon={<AddIcon />} /> */}
              <TreeItem nodeId="3" label="Create" icon={<i class="fa-sharp fa-solid fa-plus"></i>} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          {/* <ListAltIcon /> */}
          <i class="fa-solid fa-bars  "></i>
          &nbsp;
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          {/* <PeopleIcon />  */}
          <i class="fa-solid fa-person fa-lg "></i>
          &nbsp;
          Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          {/* <RateReviewIcon /> */}
          <i class="fa-solid fa-pen"></i>
          &nbsp;
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
