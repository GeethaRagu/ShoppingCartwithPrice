import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import ProductsList from "./Pages/ProductsList";
import ProductsDetail from "./Pages/ProductsDetail";
import Cart from "./Pages/Cart";


//Create Context
export const mycontext = createContext("");
//Array of objects of Products list
const App = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZorzuakjQ8H52QtGmOSwSrbtHD9gBuWky2vwVmi9Tg&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77ePXlxDaZFcbjunguKBbBpR9FRJYlyd-rBQlmSyyWgnVDsam8XZr9Ez4Wr_d9-HxTwE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQ2G9L6p5VoWlG_Ibu14WwZVAn1-sRZpaWYHHdCv6yGAQC7lJwtlwpK3b511N5zXT4M0&usqp=CAU",
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2020/9/24/1d370c4d-7b38-4711-bbd2-b0e26e4b9e6a.jpg.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztNbktIP7qH8t-XnMPB0moCN-daMhF5bXun0SsscalKwD9jXcN5y5MFJaP3QzA6-l2lU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZorzuakjQ8H52QtGmOSwSrbtHD9gBuWky2vwVmi9Tg&s",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4y0mGv7ZopeIMGe1f1Q9AIVibErKloIIGA&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8xl_GuygaTQHJ8Elxb-8VzE4royER2nCbgt8MywPmXppTp0nFTiFrIxMCxMzDHWZPys&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xdYSheyRgb4_rF1fxUYvFgYn52sVih8U2E0Fy07q5orgwMwldou7NYd4-4alKymJdQU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYqABask3_vxuP3zLIno4NkfJctdhPMnndSCCKeyvP_uhacTzXn75hBetJA2BkrMH2CQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4y0mGv7ZopeIMGe1f1Q9AIVibErKloIIGA&s",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxnSuc17Y3rhgRwr5TkFXfVyVNzmh1pImZA&s",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxnSuc17Y3rhgRwr5TkFXfVyVNzmh1pImZA&s"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRGt2XE4KUL4FdmhJKcJR58844KwjiJIZcA&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15w60OikL_0gSe4rh6JZW6VuVEoNqg1bpr9JAeT5F4J-GNrcKP8nZHOPO7DrSODEHrBs&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73qPY4EtfwUlPaCaT8kpU4RgahsYCM_GEXo8ckG-OGbCteQt0M4kwJTF-VYI_q2Y4qF4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlAXYzXAZc-9QRK-hz4lBalTofp81ssFbJwgOVs-laup3XVYeYl368H8tlUdQItPHjIo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEB2KiA79MDDziKcXP0EVvFGac63FK6Ax47gXM6bucEOdQ5veb9ZBvHt004wbUxC_aJQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRGt2XE4KUL4FdmhJKcJR58844KwjiJIZcA&s",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://icon2.cleanpng.com/20190707/ejz/kisspng-huawei-p3-lite-4g-128gb-dual-sim-black-4gb-ram-48-megapiksel-kamerasyla-huawei-p3-lite-yaknd-5d21cbe1dfbb72.2727915715624959699164.jpg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XWLlxP_r_TsiT3POiUgaWmUDuhRtGs0tqeLEPZXsjZV_gWFHl1oqJ5xTNBF__9ObeyE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWF245R5Fem5S5mdUcEB7ipuG59Bd_Th_DhSq_MgLsQLqXKHvDVf44uBZZOHGZ8JKBo3I&usqp=CAU",
        "https://icon2.cleanpng.com/20190707/ejz/kisspng-huawei-p3-lite-4g-128gb-dual-sim-black-4gb-ram-48-megapiksel-kamerasyla-huawei-p3-lite-yaknd-5d21cbe1dfbb72.2727915715624959699164.jpg",
      ],
    },
  ];
  const [items, setItems] = useState(products);  //state for items
  const [cartcount,setCartCount] =useState(0);  //state for count
  const [selectedproducts,setSelectedProducts] =useState([]);  //state for cart items
  return (
    <>
      <BrowserRouter>
        <mycontext.Provider value={[items, setItems,cartcount,setCartCount,selectedproducts,setSelectedProducts]}>
          <div>
            <Navigation />
          </div>
          <Routes>
            <Route path="/" element={<ProductsList/>}/>
            <Route path="/productslist" element={<ProductsList />} />
            <Route path="/productsdetail/:productid" element={<ProductsDetail/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </mycontext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
