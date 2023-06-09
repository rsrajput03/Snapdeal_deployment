import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Text } from "@chakra-ui/layout";

import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import SingleProductImageSlider from "./ProductCardSlider";

const SinglegridProduct = ({
  id,
  brand,
  images,
  title,
  offerPrice,
  originalPrice,
  discount,
  rating,
  ratingCount,
  products,
}) => {
  const [show, setShow] = useState(false);
  return (
    <Link to={`${id}`}>
      <Box
        className="shadow"
        transition={"all 0.3s"}
        height={{ base: "320px", md: "350px" }}
        width={{ base: "200px", md: "250px" }}
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        <Box>
          <SingleProductImageSlider
            images={images}
            rating={rating}
            ratingCount={ratingCount}
          />
        </Box>
        <Box px="0px" py="10px" bg="white">
          <Text
            fontWeight={"600"}
            fontSize="0.94rem"
            pl="10px"
            width="100%"
            overflow={"hidden"}
            whiteSpace="nowrap"
            textOverflow={"ellipsis"}
          >
            {brand}
          </Text>
          <Box position={"relative"} bg="white">
            <Text
              fontSize={"0.9rem"}
              color="gray.700"
              pl="10px"
              width="100%"
              overflow={"hidden"}
              whiteSpace="nowrap"
              textOverflow={"ellipsis"}
            >
              {title.substring(0, 30)}
            </Text>
            <Flex
              height={!show && "0"}
              className="wishlistlayer"
              flexDir={"column"}
              align="center"
              position={"absolute"}
              py={"1rem"}
              pb="0"
              bottom={"0"}
              bg="white"
              width={"full"}
              zIndex={show ? "1" : "-100"}
            >
              
              <Text
                width={"100%"}
                fontSize="0.9rem"
                my={"6px"}
                pl="1rem"
                display={!show && "none"}
              >
                Sizes L
              </Text>
            </Flex>
          </Box>
          <Text fontWeight={"bold"} fontSize="0.84rem" my="0.1rem" pl="10px">
            Rs. {offerPrice || 456}{" "}
            <Text
              as="span"
              textDecoration={"line-through"}
              fontWeight="300"
              fontSize="0.8rem"
            >
              Rs.{originalPrice}
            </Text>
            <Text as="span" color={"pink.400"} fontSize="0.7rem" px="4px">
              ({discount || "54%"}off)
            </Text>
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default SinglegridProduct;
