import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Paper,
  Toolbar,
} from "@mui/material";
import { ScrollShow } from "./ScrollShow";
import { ButtonMenu } from "../inputs/ButtonMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { CustomDrawer } from "../navigation/CustomDrawer";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slice/cart-slice";

interface AppBarHeaderShowProps {
  title?: string;
}
export const AppBarHeaderShow: React.FC<AppBarHeaderShowProps> = (props) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const cart = useSelector(selectCart);
  const cartQuantity = cart.totalQuantity;
  return (
    <>
      <ScrollShow threshold={0}>
        <AppBar
          position="fixed"
          sx={{
            zIndex: 90,
            backgroundColor: "#fff",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                margin: "0 auto",
                maxWidth: "1585px",
              }}
            >
              <Box
                sx={{
                  width: "1280px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img src="/image/logo2.svg" />
                  <Button
                    sx={{
                      width: "56px",
                      height: "32px",
                      display: "flex",
                      justifyContent: "flex-start",
                      padding: "6px 8px",
                      "&:hover": {
                        backgroundColor: "#F6F9FC",
                      },
                    }}
                  >
                    <CategoryOutlinedIcon
                      sx={{ fontSize: "24px", color: "#7D879C", marginLeft: 0 }}
                    />
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: "24px",
                        color: "#7D879C",
                        marginRight: 0,
                      }}
                    />
                  </Button>
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
            </Box>
            <CustomDrawer
              openDrawer={openDrawer}
              onClose={() => setOpenDrawer(false)}
            />
          </Toolbar>
        </AppBar>
      </ScrollShow>
    </>
  );
};
