import "./WidgetSm.css";
import React from "react";
import { Visibility } from "@mui/icons-material";
import { newMembers } from "./../../data";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSm__title">new join members</span>
      <ul className="widgetSm__list">
        {newMembers.map(member => (
          <li className="widgetSm__list-item">
            <img src={member.img} alt="user profile" className="widgetSm__img" />
            <div className="widgetSm__user">
              <span className="widgetSm__user-name">{member.name}</span>
              <span className="widgetSm__user-title">{member.title}</span>
            </div>
            <button className="widgetSm__btn">
              <Visibility className="widgetSm__icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
