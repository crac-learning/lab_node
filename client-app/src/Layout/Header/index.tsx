import { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  CircularProgress,
  Toolbar,
  Typography,
} from "@mui/material";

import { useSearchProductMutation } from "Pages/Shop/Redux/Queries";

// import { useAppSelector } from "Store/hooks";
// import { selectUser } from "Pages/Auth/Redux";

import Logo from "Assets/images/logo.png";
import SearchIcon from "Assets/icons/search.svg";
import CartIcon from "Assets/icons/cart.svg";
import UserIcon from "Assets/icons/user.svg";
import WishlistIcon from "Assets/icons/wishlist.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  SHOP,
  FORHIM,
  FORHER,
  ACCESSORIES,
  FOOTWEAR,
  LOGIN,
  ACCOUNT_SETTINGS,
  GAMING,
  ADMIN,
} from "Routes/constant";
import { selectSearchedProducts, setSearchedProducts } from "Pages/Shop/Redux";
import { IProduct } from "Utils/types";
import { useAppDispatch, useAppSelector } from "Store/hooks";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentURL, setCurrentURL] = useState<string>();
  const [showSearchBox, setSearchBoxState] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const triggerRef = useRef(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname || "";
  const searchedProductsList = useAppSelector(selectSearchedProducts);

  const [searchProductTerm] = useSearchProductMutation();

  const getActiveLink = () => {
    if (currentUrl) setCurrentURL(currentUrl.split("/shop/")[1]);
  };

  const searchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && e.target.value.length) {
      setSearchBoxState(true);
      setSearchTerm(e.target.value);
      setLoadingSearch(true);
    } else {
      setSearchBoxState(false);
      setSearchedProductList([]);
      setLoadingSearch(false);
    }
  };

  const setSearchedProductList = (productList: IProduct[]) => {
    dispatch(setSearchedProducts(productList));
  };

  const logout = () => {
    localStorage.clear();
    navigate(LOGIN);
  };

  const openSettings = () => {
    navigate(ACCOUNT_SETTINGS);
  }

  const openGamePage = () => {
    navigate(GAMING);
  }

  const openAdminPage = () => {
    navigate(ADMIN);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 1) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
      { threshold: [1] }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    getActiveLink();
  }, [currentUrl]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.length) {
        console.log("search tems set", searchTerm);
        const productList = await searchProductTerm(searchTerm).unwrap();
        setSearchedProductList(productList.data);
        setLoadingSearch(false);

        console.log("received products", productList);
      }
      // Send Axios request here
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <>
      <div ref={triggerRef} style={{ height: "1px", width: "100%" }}></div>
      <div className="header h-24 w-full relative">
        <div className="container m-auto pt-4 w-full relative">
          <AppBar
            component="nav"
            sx={{
              background: "white !important",
              transition: "all 0.3s ease",
              position: isScrolled ? "fixed" : "sticky",
              top: isScrolled ? "0" : { xs: "0", sm: "1rem" },
              boxShadow: "none",
              right: "auto",
              left: "auto",
              width: "120%",
              maxWidth: "1280px",
              minHeight:"100px",
              height: isScrolled
                ? {
                    lg: "7rem",
                    sm: "5.5rem",
                    xsm: "3.8rem",
                    xxsm: "3.6rem",
                    xs: "3.6rem",
                  }
                : "4  rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Toolbar
              sx={{
                justifyContent: "space-between",
                backgroundColor: "white",
                paddingLeft: "0 !important",
                paddingRight: "0 !important",
                width: isScrolled ? "inherit" : "120%",
              }}
              className="px-0"
            >
              <div className="header_section flex gap-4 justify-between items-center w-full ">
                <div className="logo">
                  <img src={Logo} alt="logo" className="m-auto w-36" />
                </div>
                <div className="menu">
                  <div className="menu_items flex gap-10 font-medium justify-center">
                    <Link to={SHOP}>
                      <div
                        className={`item text-primary-main ${
                          currentURL === "" ? "font-bold" : ""
                        }`}
                      >
                        Home
                      </div>
                    </Link>
                    <Link to={FORHIM}>
                      <div
                        className={`item text-primary-main ${
                          currentURL === "him" ? "font-bold" : ""
                        }`}
                      >
                        For Him
                      </div>
                    </Link>
                    <Link to={FORHER}>
                      <div
                        className={`item text-primary-main ${
                          currentURL === "her" ? "font-bold" : ""
                        }`}
                      >
                        For Her
                      </div>
                    </Link>
                    <Link to={FOOTWEAR}>
                      <div
                        className={`item text-primary-main ${
                          currentURL === "footwear" ? "font-bold" : ""
                        }`}
                      >
                        Footwear
                      </div>
                    </Link>
                    <Link to={ACCESSORIES}>
                      <div
                        className={`item text-primary-main ${
                          currentURL === "accessories" ? "font-bold" : ""
                        }`}
                      >
                        Accessories
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="functions flex gap-3">
                  <div className="search relative">
                    {showSearchBox ? (
                      <div className="absolute w-full shadow-md pt-16 px-2 bg-white rounded-b-md pb-2 text-primary-main max-h-[500px] overflow-y-auto ">
                        {loadingSearch ? (
                          <div className="text-center">
                            <CircularProgress />
                          </div>
                        ) : (
                          <div>
                            {searchedProductsList.length ? (
                              <div>
                                {searchedProductsList.map((product) => (
                                  <Box
                                    sx={{
                                      textAlign: "left",
                                      marginTop: "15px",
                                      paddingTop: "15px",
                                      borderTop:
                                        "0.25px solid rgba(25, 19, 65, 0.25)",
                                    }}
                                  >
                                    <div className="flex gap-3">
                                      <div className="banner w-1/5">
                                        <img
                                          src={product.banner}
                                          alt={product.sku}
                                          className="w-full"
                                        />
                                      </div>
                                      <div className="information w-4/5">
                                        <Typography
                                          sx={{
                                            fontFamily: "gilroy500",
                                            lineHeight: {
                                              xs: "18px",
                                            },
                                            fontSize: {
                                              xs: "0.9rem",
                                            },
                                            color: "#0C0635",
                                            mx: "auto",
                                          }}
                                        >
                                          {product.title}
                                        </Typography>
                                        <Typography
                                          sx={{
                                            fontFamily: "gilroy600",
                                            lineHeight: {
                                              xs: "12px",
                                            },
                                            fontSize: {
                                              xs: "1rem",
                                            },
                                            color: "#9077d2",
                                            marginTop: "8px",
                                          }}
                                        >
                                          Rs.{" "}
                                          {(
                                            Math.round(product.price * 100) /
                                            100
                                          ).toLocaleString()}
                                        </Typography>
                                      </div>
                                    </div>
                                  </Box>
                                ))}
                              </div>
                            ) : (
                              <div>
                                <Typography
                                  sx={{
                                    fontFamily: "gilroy600",
                                    lineHeight: {
                                      xs: "20px",
                                    },
                                    fontSize: {
                                      xs: "1.3rem",
                                    },
                                    color: "#9077d2",
                                    margin: "8px",
                                  }}
                                >
                                  No product found
                                </Typography>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : null}
                    <div className="input relative">
                      <img
                        src={SearchIcon}
                        className="absolute my-auto top-0 bottom-0 ml-3"
                        alt="search"
                      />
                      <input
                        className="w-72 bg-slate-100 rounded-md border border-solid border-primary-main md:px-4 px-3 py-3 md:pl-9 placeholder:text-slate-400 text-primary-main"
                        type="text"
                        name="search"
                        placeholder="Search here..."
                        onChange={searchInputChange}
                      />
                    </div>
                  </div>
                  <div className="account">
                    <div className="icons flex gap-4 items-center">
                      <div className="icon">
                        <img
                          src={WishlistIcon}
                          alt="wishlist"
                          className="w-12"
                        />
                      </div>
                      <div className="icon relative">
                        <img src={CartIcon} alt="cart" className="w-12" />
                        <div className="cart-total absolute rounded-full bg-brand-secondary w-6 font-medium top-0 right-0 shadow-md text-slate-600">
                          2
                        </div>
                      </div>
                      <div
                        className="icon relative"
                        onMouseEnter={() => setShowLogout(true)}
                        onMouseLeave={() => setShowLogout(false)}
                      >
                        <img src={UserIcon} alt="user" className="w-10" />
                        {showLogout ? ( 
                          <>
                          <div
                            className="absolute shadow-md w-fit bg-white rounded-md py-3 px-8 text-primary-main -left-6 mx-auto cursor-pointer"
                            // onClick={logout}
                          >
                            <div className="text-center hover:font-medium border-b w-full py-2 " onClick={logout}>
                              Logout
                            </div>
                            <div className="text-center hover:font-medium py-2" onClick={openSettings}>
                              Settings
                            </div>
                            <div className="text-center hover:font-medium py-2" onClick={openGamePage}>
                              Gaming
                            </div>
                            <div className="text-center hover:font-medium py-2" onClick={openAdminPage}>
                              Admin
                            </div>
                            
                          </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </>
  );
}

export default Header;
