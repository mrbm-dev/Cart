import React, { useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const MegaMenu: React.FC = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="button"
        variant="text"
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        onMouseOver={handleHover}
        onClick={handleHover}
        sx={{
          color: "#2B3445",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "inherit",
            color: "#E3364E",
          },
        }}
      >
        Mega Menu
      </Button>
      <>
        <Menu
          id="basic-menu"
          PaperProps={{
            style: {
              width: "968px",
              height: "410px",
              position: "relative",
              top: "554px",
              left: " 368px",
            },
          }}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "button",
          }}
          sx={{
            width: "968px",
            height: "410px",
            top: "-225px",
            left: " 270px",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
            <Box
              sx={{
                backgroundColor: "#F6F9FC",
                width: "100%",
                height: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "8px 16px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "14px", fontWeight: 600, padding: "6px 16px" }}
              >
                Home
              </Typography>
              <MenuItem>Super Store</MenuItem>
              <MenuItem>Furniture</MenuItem>
              <MenuItem>Grocery-v1</MenuItem>
              <MenuItem>Grocery-v2</MenuItem>
              <MenuItem>Grocery-v3</MenuItem>
              <MenuItem>Health and Beauty</MenuItem>
              <MenuItem>Fashion</MenuItem>
              <MenuItem>Gift Store</MenuItem>
              <MenuItem>Gadget</MenuItem>
            </Box>
            <Box
              sx={{ backgroundColor: "#fff", width: "100%", height: "100%" }}
            >
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
            </Box>
            <Box
              sx={{ backgroundColor: "#F6F9FC", width: "100%", height: "100%" }}
            >
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
            </Box>
            <Box
              sx={{ backgroundColor: "#fff", width: "100%", height: "100%" }}
            >
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
              <MenuItem>1</MenuItem>
            </Box>
          </Box>
        </Menu>
      </>
    </>
  );
};
