import { useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";

import Collection from "Components/Shop/Collection";
import Heading from "Components/Shop/Heading";
import CollectionBox from "Components/Shop/CollectionBox";

import { useAppDispatch, useAppSelector } from "Store/hooks";
import { useLazyBestSellerQuery } from "../Redux/Queries";
import { setBestSellers, selectBestSellers, setAlert } from "../Redux";

import ShopBanner from "Assets/images/shop-banner.jpg";
import SaleBanner from "Assets/images/sale-banner.jpg";
import FastDelivery from "Assets/images/fast-delivery.jpg";
import MoneyBack from "Assets/images/money-back.png";
import CustomerSupport from "Assets/images/customer-support.jpg";

function ShopHome() {
  const dispatch = useAppDispatch();

  const [getBestSellers, { isLoading }] = useLazyBestSellerQuery();

  const fetchBestSellerProducts = async () => {
    try {
      const bestSellers = await getBestSellers().unwrap();

      dispatch(setBestSellers(bestSellers.data));
    } catch (error: any) {
      dispatch(setAlert(error.error));
    }
  };

  const bestSellerProducts = useAppSelector(selectBestSellers);

  useEffect(() => {
    fetchBestSellerProducts();
  }, []);

  return (
    <div className="shop-home">
      {isLoading ? (
        <div className="loading absolute h-screen w-screen left-0 top-0 bg-light-purple-250 z-20">
          <CircularProgress />
          <Typography
            sx={{
              fontFamily: "gilroy500",
              color: "#9077d2",
              lineHeight: {
                xs: "38px",
              },
              fontSize: "1.5rem",
            }}
          >
            Loading products...
          </Typography>
        </div>
      ) : null}
      <div className="container">
        <div className="banner">
          <img src={ShopBanner} alt="shop iphone" />
        </div>
        <div className="collection featured pt-24 pb-16">
          <Collection collection={bestSellerProducts} />
        </div>
        <div className="catogries py-16">
          <Heading text="Our Collections" />
          <div className="collections mt-10 grid gap-4 grid-cols-3 ">
            <CollectionBox
              name="Shirts"
              banner="https://defhawk-assets.s3.ap-south-1.amazonaws.com/ecom-lab/fashion/collection/shirt.jpeg"
            />

            <CollectionBox
              name="Denims"
              banner="https://defhawk-assets.s3.ap-south-1.amazonaws.com/ecom-lab/fashion/collection/denim.jpg"
            />

            <CollectionBox
              name="Jackets"
              banner="https://defhawk-assets.s3.ap-south-1.amazonaws.com/ecom-lab/fashion/collection/jacket.jpg"
            />

            <CollectionBox
              name="Skirts"
              banner="https://defhawk-assets.s3.ap-south-1.amazonaws.com/ecom-lab/fashion/collection/skirt.jpeg"
            />

            <CollectionBox
              name="Shoes"
              banner="https://defhawk-assets.s3.ap-south-1.amazonaws.com/ecom-lab/fashion/collection/shoes.jpg"
            />

            <CollectionBox
              name="Accessories"
              banner="https://defhawk-assets.s3.ap-south-1.amazonaws.com/ecom-lab/fashion/collection/accessories.jpg"
            />
          </div>
        </div>
        <div
          className="my-12 h-[800px]"
          style={{
            backgroundImage: `url('${SaleBanner}')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div className="why-us py-16">
          <div className="reasons flex justify-between items-end">
            <div className="reason">
              <div className="image text-center">
                <img
                  src={FastDelivery}
                  alt="fast delivery"
                  className="w-56 mx-auto"
                />
              </div>
              <div className="heading">
                <Typography
                  sx={{
                    fontFamily: "gilroy500",
                    color: "#0C0635",
                    lineHeight: {
                      xs: "38px",
                    },
                    fontSize: "1.5rem",
                  }}
                >
                  FREE AND FAST DELIVERY
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "gilroy500",
                    color: "#9077d2",
                    lineHeight: {
                      xs: "28px",
                    },
                    fontSize: "1.1rem",
                  }}
                >
                  Free delivery for all orders
                </Typography>
              </div>
            </div>

            <div className="reason">
              <div className="image text-center">
                <img
                  src={CustomerSupport}
                  alt="fast delivery"
                  className="w-56 mx-auto"
                />
              </div>
              <div className="heading">
                <Typography
                  sx={{
                    fontFamily: "gilroy500",
                    color: "#0C0635",
                    lineHeight: {
                      xs: "38px",
                    },
                    fontSize: "1.5rem",
                  }}
                >
                  24/7 CUSTOMER SERVICE
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "gilroy500",
                    color: "#9077d2",
                    lineHeight: {
                      xs: "28px",
                    },
                    fontSize: "1.1rem",
                  }}
                >
                  Friendly 24/7 customer support
                </Typography>
              </div>
            </div>

            <div className="reason">
              <div className="image text-center">
                <img
                  src={MoneyBack}
                  alt="fast delivery"
                  className="h-52 mx-auto"
                />
              </div>
              <div className="heading">
                <Typography
                  sx={{
                    fontFamily: "gilroy500",
                    color: "#0C0635",
                    lineHeight: {
                      xs: "38px",
                    },
                    fontSize: "1.5rem",
                  }}
                >
                  MONEY BACK GUARANTEE
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "gilroy500",
                    color: "#9077d2",
                    lineHeight: {
                      xs: "28px",
                    },
                    fontSize: "1.1rem",
                  }}
                >
                  We reurn money within 30 days
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopHome;
