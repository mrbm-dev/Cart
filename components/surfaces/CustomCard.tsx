import { Box, SxProps } from "@mui/material";
import React from "react";

interface CustomCardProps {
  width: string;
  height: string;
  children: React.ReactNode;
  customSx?: SxProps;
}
export const CustomCard: React.FC<CustomCardProps> = (props) => {
  return (
    <Box
      sx={{
        boxShadow: "0px 1px 3px rgb(3 0 71 / 9%)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        padding: "16px",
        ...props.customSx,
      }}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </Box>
  );
};
