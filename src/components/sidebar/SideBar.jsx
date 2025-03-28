import React from "react";
import "./SideBar.css";
// icons
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimeLineIcon from "@mui/icons-material/TimeLine";
import TrendingUPIcon from "@mui/icons-material/TrendingUP";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StoreFrontIcon from "@mui/icons-material/StoreFront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
// react-router-dom
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">dashboard</h3>
          <ul className="sidebar-list">
            <NavLink
              className={({ isActive }) => {
                return `link ${isActive && "active"}`;
              }}
              to="/">
              <li className="sidebar-list-item">
                <LineStyleIcon className="sidebar-icon" />
                <span>home</span>
              </li>
            </NavLink>

            <li className="sidebar-list-item">
              <TimeLineIcon className="sidebar-icon" />
              <span>analitics</span>
            </li>

            <li className="sidebar-list-item">
              <TrendingUPIcon className="sidebar-icon" />
              <span>sales</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">quick menu</h3>
          <ul className="sidebar-list">
            <NavLink className={({ isActive }) => `link ${isActive && "active"}`} to="/users">
              <li className="sidebar-list-item">
                <PermIdentityIcon className="sidebar-icon" />
                <span>users</span>
              </li>
            </NavLink>

            <NavLink to="/newUser" className={({ isActive }) => `link ${isActive && "active"}`}>
              <li className="sidebar-list-item">
                <PermIdentityIcon className="sidebar-icon" />
                <span>new user</span>
              </li>
            </NavLink>

            <NavLink className={({ isActive }) => `link ${isActive && "active"}`} to="/products">
              <li className="sidebar-list-item">
                <StoreFrontIcon className="sidebar-icon" />
                <span>products</span>
              </li>
            </NavLink>
            <li className="sidebar-list-item">
              <AttachMoneyIcon className="sidebar-icon" />
              <span>transactions</span>
            </li>

            <li className="sidebar-list-item">
              <BarChartIcon className="sidebar-icon" />
              <span>reports</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutlineIcon className="sidebar-icon" />
              <span>mail</span>
            </li>

            <li className="sidebar-list-item">
              <DynamicFeedIcon className="sidebar-icon" />
              <span>feedback</span>
            </li>

            <li className="sidebar-list-item">
              <ChatBubbleOutlineIcon className="sidebar-icon" />
              <span>messages</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutlineIcon className="sidebar-icon" />
              <span>manage</span>
            </li>

            <li className="sidebar-list-item">
              <TrendingUPIcon className="sidebar-icon" />
              <span>anaylytics</span>
            </li>

            <li className="sidebar-list-item">
              <ReportIcon className="sidebar-icon" />
              <span>reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
