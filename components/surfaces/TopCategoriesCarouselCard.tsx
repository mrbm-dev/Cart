import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ImageCustomHover } from "../layout/ImageCustomHover";
import { CustomCard } from "./CustomCard";

interface TopCategoriesCarouselCardProps {
  srcImage: string;
  category: string;
}
export const TopCategoriesCarouselCard: React.FC<
  TopCategoriesCarouselCardProps
> = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <CustomCard width="354px" height="152px">
        <ImageCustomHover width="321px" height="110px" src={props.srcImage} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bottom: "115px",
            position: "relative",
            zIndex: 20,
            padding: "12px",
          }}
        >
          <Box
            sx={{
              width: "88px",
              height: "24px",
              backgroundColor: "#0F3460",
              borderRadius: "30px",
              padding: "3px 8px",
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {props.category}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "126px",
              height: "24px",
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
      </CustomCard>

      {/* <Box>
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
            top: " 15%",
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
    </Box> */}
    </>
  );
};
