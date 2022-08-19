import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Rating,
  styled,
  SxProps,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  addToCart,
  CartItem,
  removeItemFromCart,
} from "../../store/slice/cart-slice";

export const CounterButton = styled(Button)({
  minWidth: "28px",
  height: "28px",
  padding: "3px",
  fontSize: "20px",
  borderRadius: "3px",
  backgroundColor: "primary.light",
  display: "flex",
  alignItems: "center",
});

interface FlashDealsCarouselCardProps {
  id: number;
  srcImage: string;
  star: number;
  name: string;
  price: number;
  discount: number;
  off: number;
  quantity: number;
  totalPrice: number;
  customSx?: SxProps;
}
export const FlashDealsCarouselCard: React.FC<FlashDealsCarouselCardProps> = (
  props
) => {
  const [value, setValue] = useState<number | null>(props.star);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        srcImage: props.srcImage,
        quantity: props.quantity,
        totalPrice: props.totalPrice,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(props.id));
  };
  return (
    <Box
      sx={{
        maxWidth: "315px",
        height: "410px",
        margin: "0 12px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
        ...props.customSx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: " 5px 10px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "24px",
            alignItems: "center",
            backgroundColor: "primary.main",
            color: "white",
            padding: "0 8px",
            borderRadius: "16px",
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>{props.off}% off</Typography>
        </Box>
        <Avatar
          sx={{
            backgroundColor: "white",
            fontSize: "16px",
            width: "32px",
            height: "32px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />
        </Avatar>
      </Box>
      <Box>
        <Image width="275px" height="275px" src={props.srcImage} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#373F50",
                cursor: "pointer",
              }}
            >
              {props.name}
            </Typography>
            <Rating value={value} readOnly size="medium" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography
              variant="caption"
              sx={{ fontSize: "14px", fontWeight: 600, color: "primary.light" }}
            >
              ${props.price}
            </Typography>
            <Typography
              variant="overline"
              sx={{
                textDecorationLine: "line-through",
                fontSize: "14px",
                fontWeight: 600,
                color: "#7D879C",
              }}
            >
              {props.discount}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CounterButton variant="outlined" onClick={removeItemHandler}>
            -
          </CounterButton>
          <Typography sx={{ fontSize: "14px" }}>{props.quantity}</Typography>
          <CounterButton variant="outlined" onClick={() => addToCartHandler()}>
            +
          </CounterButton>
        </Box>
      </Box>
    </Box>
  );
};
