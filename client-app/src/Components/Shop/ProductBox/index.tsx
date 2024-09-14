import { Box, Typography } from "@mui/material";

import FilledStar from "Assets/icons/star-fill.svg";
import HalfFilledStar from "Assets/icons/star-half-fill.svg";
import EmptyStar from "Assets/icons/star-empty.svg";

import { IProduct } from "Utils/types";
import { useEffect, useState } from "react";

type Props = {
  product: IProduct;
};

function ProductBox({ product }: Props) {
  const [ratingArr, setRatingArr] = useState<number[]>([]);

  const setRatingArray = () => {
    const arr = [];
    for (let i = 1, x = 5; i < x; i++) {
      arr.push(1);
    }

    let rating = 0;
    product.reviews.map((review) => (rating = rating + review.rating));

    const star = rating / product.reviews?.length;

    const decimal = parseInt((star % 1).toFixed(2).substring(2));

    if (decimal >= 75) {
      arr.push(0);
    } else if (decimal >= 50) {
      arr.push(1);
    }

    if (arr.length < 5) {
      for (let i = 0, y = 5 - arr.length; i < y; i++) arr.push(-1);
    }

    setRatingArr(arr);
  };

  useEffect(() => {
    setRatingArray();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        cursor: "pointer",
        transition: "1s ease all",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
        },
      }}
    >
      <div className="w-full h-full shadow-lg rounded-md bg-slate-100">
        <div className="banner_section h-72 text-center relative bg-white">
          {product.mrp !== product.price ? (
            <span className="absolute top-3 left-3 bg-brand-tertiary text-primary-main px-3 py-1 rounded-full">
              Sale
            </span>
          ) : null}
          <img
            src={product.banner}
            alt={`${product.category}-${product.sku}`}
            className="h-full mx-auto"
          />
        </div>
        <div className="info py-4 bg-slate-100 px-4 text-left">
          <Typography
            sx={{
              fontFamily: "gilroy500",
              lineHeight: {
                xs: "18px",
              },
              fontSize: {
                xs: "1rem",
              },
              color: "#0C0635",
              mx: "auto",
            }}
          >
            {product.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "gilroy400",
              lineHeight: {
                xs: "15px",
              },
              fontSize: {
                xs: "0.8rem",
              },
              color: "#0C0635",
              mx: "auto",
              mt: "6px",
            }}
          >
            {product.description.slice(0, 70)}...
          </Typography>

          <div className="rating mt-4 flex gap-1">
            <div className="stars flex">
              {ratingArr.map((rate, index) => {
                if (rate === 1) {
                  return <img key={index} src={FilledStar} alt="star" />;
                } else if (rate === -1) {
                  return <img key={index} src={EmptyStar} alt="star" />;
                } else {
                  return <img key={index} src={HalfFilledStar} alt="star" />;
                }
              })}
            </div>
            {/* <div className="rating text-brand-primary">{product.rating.star}</div> */}
            <div className="total text-primary-main">
              ({product.reviews.length})
            </div>
          </div>

          <div className="flex justify-start gap-3 price">
            <Typography
              sx={{
                fontFamily: "gilroy600",
                lineHeight: {
                  xs: "20px",
                },
                fontSize: {
                  xs: "1.2rem",
                },
                color: "#9077d2",
                mt: "16px",
                textDecoration:
                  product.mrp === product.price ? "" : "line-through",
              }}
            >
              Rs. {(Math.round(product.mrp * 100) / 100).toLocaleString()}
            </Typography>

            {product.mrp !== product.price ? (
              <Typography
                sx={{
                  fontFamily: "gilroy500",
                  lineHeight: {
                    xs: "20px",
                  },
                  fontSize: {
                    xs: "1.2rem",
                  },
                  color: "#0C0635",
                  mt: "16px",
                }}
              >
                Rs. {(Math.round(product.price * 100) / 100).toLocaleString()}
              </Typography>
            ) : null}
          </div>
        </div>
      </div>
    </Box>
  );
}

export default ProductBox;
