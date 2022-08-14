import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  CssBaseline,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ButtonMenu } from "../inputs/ButtonMenu";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { TopBar } from "./TopBar";
import { CustomDrawer } from "../navigation/CustomDrawer";
import { ScrollHide } from "./ScrollHide";
import { useSelector } from "react-redux";
import { MegaMenu } from "../navigation/MegaMenu";
import { selectCart } from "../../store/slice/cart-slice";

export const AppBarHeaderHide: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const cart = useSelector(selectCart);
  const cartQuantity = cart.totalQuantity;
  const menuItem = [
    "All Categories",
    "Mobile",
    "Desktop",
    "Car",
    "Laptop",
    "Camera",
  ];

  return (
    <ScrollHide threshold={0}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          zIndex: 100,
        }}
      >
        <Toolbar
          id="toolbar"
          sx={{ ["@media (min-width:600px)"]: { padding: 0 } }}
        >
          <Box sx={{ width: "100%" }}>
            <Box width="100%">
              <TopBar />
            </Box>
            <Box
              sx={{
                margin: "0 auto",
                maxWidth: "1280px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: 80,
                  alignItems: "center",
                }}
              >
                <Box>
                  <img src="/image/logo2.svg" />
                </Box>
                <Box>
                  <Paper
                    sx={{
                      width: "670px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      border: 1.8,
                      borderRadius: "50px",
                      padding: "10px 0 10px 10px",
                      gap: "50px",
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
                    <Box
                      sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                    >
                      <SearchOutlinedIcon
                        sx={{ color: "#7D879C", fontSize: 20 }}
                      />
                      <InputBase placeholder="Searching for..." />
                    </Box>
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
                  <Badge badgeContent={cartQuantity} color="primary">
                    <Avatar
                      alt="shopping image"
                      onClick={() => setOpenDrawer(true)}
                    >
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
                <Box id="1" sx={{ width: "287px", height: "40px" }}>
                  <Button
                    sx={{
                      width: "inherit",
                      display: "flex",
                      justifyContent: "flex-start",
                      backgroundColor: "#F6F9FC",
                      padding: "6px 8px",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CategoryOutlinedIcon
                          sx={{ fontSize: "20px", color: "#000" }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            textTransform: "none",
                            color: "#7D879C",
                            fontSize: "14px",
                          }}
                        >
                          Categories
                        </Typography>
                      </Box>
                      <Box sx={{ width: "20px", height: "20px" }}>
                        <KeyboardArrowRightIcon />
                      </Box>
                    </Box>
                  </Button>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <ButtonMenu>Home</ButtonMenu>
                  <MegaMenu />
                  <ButtonMenu>Full Screen Menu</ButtonMenu>
                  <ButtonMenu>Pages</ButtonMenu>
                  <ButtonMenu>User Account</ButtonMenu>
                  <ButtonMenu>Vendor Account</ButtonMenu>
                </Box>
              </Box>
            </Box>
          </Box>
          <CustomDrawer
            openDrawer={openDrawer}
            onClose={() => setOpenDrawer(false)}
          />
        </Toolbar>
      </AppBar>
    </ScrollHide>
  );
};
