import { Avatar, Badge, Button, Container, IconButton, Menu, MenuItem, Typography } from "@mui/material";
// Icons
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import "./TopBar.css";

// react-router-dom

function TopBar() {
  // State
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Functions

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="topbar">
        <Container>
          <div className="topbar-wrapper">
            <div className="topbar__left">
              <a href="/" className="logo">
                <Typography variant="h5">my panel ❤️</Typography>
              </a>
            </div>
            <div className="topbar__right">
              <div className="actions">
                <IconButton>
                  <Badge badgeContent={2} color="primary">
                    <NotificationsNoneIcon />
                  </Badge>
                </IconButton>

                <IconButton>
                  <Badge badgeContent={2} color="primary">
                    <LanguageIcon />
                  </Badge>
                </IconButton>

                <IconButton>
                  <Badge color="primary">
                    <SettingsIcon />
                  </Badge>
                </IconButton>
              </div>

              {/* Profile Dropdown */}
              <IconButton variant="contained" color="primary" onClick={handleClick}>
                <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>profile</MenuItem>
                <MenuItem onClick={handleClose}>my account</MenuItem>
                <MenuItem onClick={handleClose}>log out</MenuItem>
              </Menu>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default TopBar;
