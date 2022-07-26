import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface ImageCustomHoverProps {
  width: string;
  height: string;
  src: string;
}
export const ImageCustomHover: React.FC<ImageCustomHoverProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Image
        width={props.width}
        height={props.height}
        src={props.src}
        style={{ borderRadius: "8px" }}
      />
      <Box
        width={props.width}
        height={props.height}
        sx={{
          position: "absolute",
          borderRadius: "8px",
          zIndex: 20,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          },
        }}
      />
    </Box>
  );
};
