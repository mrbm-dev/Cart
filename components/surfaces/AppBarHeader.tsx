import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { ButtonMenu } from "../inputs/ButtonMenu";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { TopBar } from "./TopBar";
import { CustomDrawer } from "../navigation/CustomDrawer";

export const AppBarHeader: React.FC = () => {
  const menuItem = [
    "All Categories",
    "Mobile",
    "Desktop",
    "Car",
    "Laptop",
    "Camera",
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {/* <Toolbar id="toolbar"> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box width="100%">
          <TopBar />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img src="/image/logo2.svg" />
          </Box>
          <Box>
            <Paper
              sx={{
                border: 1.8,
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                padding: "10px 0 10px 10px",
                gap: 1,
                height: "44px",
                zIndex: 30,
                "&:hover": {
                  borderColor: "#E3364E",
                },
                "&:focus": {
                  border: 2,
                  borderColor: "#FA0000",
                },
              }}
              elevation={0}
            >
              <SearchOutlinedIcon sx={{ color: "#7D879C", fontSize: 20 }} />
              <InputBase placeholder="Searching for..." />
              <ButtonMenu
                menuItem={menuItem}
                style={{
                  backgroundColor: "#F6F9FC",
                  height: "42px",
                  border: "none",
                  zIndex: 20,
                  borderTopRightRadius: "300px",
                  borderBottomRightRadius: "300px",
                  borderLeft: "1px solid #DAE1E7",
                  textTransform: "none",
                  color: "#4B566B",
                  "&:hover": {
                    border: "none",
                    borderLeft: "1px solid #DAE1E7",
                  },
                }}
                variant="outlined"
              >
                All Categories
              </ButtonMenu>
            </Paper>
          </Box>
          <Box sx={{ display: "flex", gap: "34px" }}>
            <Avatar alt="user image">
              <PersonOutlineOutlinedIcon />
            </Avatar>
            <Badge badgeContent={3} color="primary">
              <Avatar alt="shopping image">
                <ShoppingBagOutlinedIcon />
              </Avatar>
            </Badge>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            height: "60px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <ButtonMenu
              showIconButton={false}
              style={{
                backgroundColor: "#F6F9FC",
                padding: "6px 8px",
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Box>
                <CategoryOutlinedIcon
                  sx={{ fontSize: "20px", color: "#000" }}
                />
                <Typography variant="caption" sx={{ color: "#7D879C" }}>
                  Categories
                </Typography>
              </Box>
              <KeyboardArrowDownOutlinedIcon />
            </ButtonMenu>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <ButtonMenu>Home</ButtonMenu>
            <ButtonMenu>Mega Menu</ButtonMenu>
            <ButtonMenu>Full Screen Menu</ButtonMenu>
            <ButtonMenu>Pages</ButtonMenu>
            <ButtonMenu>User Account</ButtonMenu>
            <ButtonMenu>Vendor Account</ButtonMenu>
          </Box>
        </Box>
      </Box>
      <CustomDrawer />
      {/* </Toolbar> */}
    </AppBar>
  );
};
