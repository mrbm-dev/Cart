import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export const TopCategoriesCarouselCard: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Box>
      <Box
        sx={{
          margin: "20px",
          width: "395px",
          height: "153px",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "9px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            top: "15%",
            zIndex: 20,
            padding: "0 18px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#0F3460",
              borderRadius: "30px",
              padding: "3px 8px",
              color: "#fff",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
              Headphone
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.08)",
              borderRadius: "30px",
              padding: "3px 8px",
              color: "#2B3445",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
              3K orders this week
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "7px",
            position: "absolute",
            zIndex: 10,
            bottom: "-213px",
          }}
        >
          <Image
            width="365px"
            height="120px"
            layout="fixed"
            style={{
              borderRadius: "15px",
            }}
            src="/image/category-1.webp"
          />
          <Box
            sx={{
              position: "absolute",
              borderRadius: "15px",
              zIndex: 50,
              width: "365px",
              height: "120px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.25)",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
