import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Image from "next/image";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { ButtonMenu } from "../inputs/ButtonMenu";

export const ShoppingCard: React.FC = () => {
  const CustomButton = styled(Button)({
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    minWidth: 0,
  });
  return (
    <>
      <Box
        id="1"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "100px",
        }}
      >
        <Box
          id="2"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "space-between",
            // borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Box
            id="3"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "12px",
            }}
          >
            <CustomButton variant="outlined">
              <AddOutlinedIcon />
            </CustomButton>
            <Typography sx={{ color: "#000", fontSize: "15px" }}>1</Typography>
            <CustomButton variant="outlined" disabled>
              <RemoveOutlinedIcon />
            </CustomButton>
          </Box>
          <Box>
            <Image src="/image/car.png" width={80} height={80} />
          </Box>
          <Box sx={{ display: "flex", gap: "80px", alignItems: "center" }}>
            <Box>
              <Typography variant="h5" sx={{ color: "#000" }}>
                Ford 2019
              </Typography>
              <Typography sx={{ color: "#7D879C", fontSize: "9.5px" }}>
                $250.00 x 1
              </Typography>
              <Typography sx={{ color: "#Fa0000", fontSize: "12px" }}>
                $250.00
              </Typography>
            </Box>
            <Box>
              <Avatar
                sx={{
                  backgroundColor: "#fff",
                  width: "24px",
                  height: "24px",
                  "&:hover": { backgroundColor: "#F3F5F9" },
                }}
              >
                <ClearOutlinedIcon sx={{ fontSize: "20px" }} />
              </Avatar>
            </Box>
          </Box>
          <Divider />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            padding: "10px",
          }}
        >
          <ButtonMenu
            variant="contained"
            showIconButton={false}
            style={{ width: "100%", textTransform: "none" }}
          >
            Checkout Now ($750.00)
          </ButtonMenu>
          <ButtonMenu
            variant="outlined"
            showIconButton={false}
            style={{ width: "100%", textTransform: "none" }}
          >
            View Cart
          </ButtonMenu>
        </Box>
      </Box>
    </>
  );
};
