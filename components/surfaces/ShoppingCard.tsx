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
import { useDispatch } from "react-redux";
import {
  addToCart,
  cartActions,
  removeItemFromCart,
} from "../../store/slice/cart-slice";

interface ShoppingCardProps {
  id: number;
  name: string;
  srcImage: string;
  price: number;
  quantity: number;
  totalPrice: number;
}
export const ShoppingCard: React.FC<ShoppingCardProps> = (props) => {
  const { id } = props;
  const CustomButton = styled(Button)({
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    minWidth: 0,
  });
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      addToCart({
        id,
        price: props.price,
        totalPrice: props.totalPrice,
        name: props.name,
        srcImage: props.srcImage,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <>
      <Box
        id="1"
        sx={{
          height: "125px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "100px",
        }}
      >
        <Box
          id="2"
          sx={{
            width: "380px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "space-between",
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
            <CustomButton variant="outlined" onClick={addItemHandler}>
              <AddOutlinedIcon />
            </CustomButton>
            <Typography sx={{ color: "#000", fontSize: "15px" }}>
              {props.quantity}
            </Typography>
            <CustomButton variant="outlined" onClick={removeItemHandler}>
              <RemoveOutlinedIcon />
            </CustomButton>
          </Box>
          <Box>
            <Image src={props.srcImage} width={80} height={80} />
          </Box>
          <Box sx={{ display: "flex", gap: "80px", alignItems: "center" }}>
            <Box>
              <Typography
                variant="h5"
                sx={{ color: "#000", fontSize: "14px", fontWeight: 600 }}
              >
                {props.name}
              </Typography>
              <Typography sx={{ color: "#7D879C", fontSize: "10px" }}>
                ${props.price} x {props.quantity}
              </Typography>
              <Typography sx={{ color: "#Fa0000", fontSize: "12px" }}>
                ${props.totalPrice}
              </Typography>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
