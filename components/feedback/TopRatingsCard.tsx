import { Box, Paper, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { ImageCustomHover } from "../layout/ImageCustomHover";

interface TopRatingsCardProps {
  srcImage: string;
  name: string;
  price: number;
  star: number;
  numberPeople: number;
}
export const TopRatingsCard: React.FC<TopRatingsCardProps> = (props) => {
  const [value, setValue] = useState<number | null>(props.star);

  return (
    <Box
      sx={{
        width: "150px",
        height: "235px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        margin: "8px",
      }}
    >
      <ImageCustomHover width="118px" height="118px" src={props.srcImage} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "7px",
          cursor: "pointer",
        }}
      >
        <Box sx={{ display: "flex", gap: "3px" }}>
          <Rating readOnly value={value} size="small" />
          <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
            ({props.numberPeople})
          </Typography>
        </Box>
        <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: 600 }}>
          {props.name}
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontSize: "14px", fontWeight: 600, color: "#D23F57" }}
        >
          ${props.price}
        </Typography>
      </Box>
    </Box>
  );
};
