import React, { useState } from "react";
import "./Research.css";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";

const NavBar = () => {
  const [selectedOption, setSelectedOption] = useState("IEEE");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    closePopover();
  };

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav">
      <div className="list">
        <TravelExploreIcon className="icon" />
        Research
      </div>
      <div className="list1" onClick={openPopover}>
        <DescriptionOutlinedIcon className="icon" />
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={closePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Select
            value={selectedOption}
            onChange={handleOptionChange}
            className="dropdown"
          >
            <MenuItem value="IEEE">IEEE</MenuItem>
            <MenuItem value="APA7">APA7</MenuItem>
            <MenuItem value="HARVARD">HARVARD</MenuItem>
            <MenuItem value="MLA9">MLA9</MenuItem>
          </Select>
        </Popover>
      </div>
      <div className="list1">
        <FormatQuoteOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default NavBar;
