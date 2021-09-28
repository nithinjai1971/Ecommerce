import { createSlice } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    currentUser: null,
    productList: [
      {
        id: uuid(),
        title: "Titan G clara 1200",
        imgURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmP-4HGlFaskWrr0OajgCAispB9NJlO7jdA&usqp=CAU",
        mrp: 2500,
      },
      {
        id: uuid(),
        title: "Sonata C series",
        imgURL:
          "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        mrp: 2300,
      },
      {
        id: uuid(),
        title: "Titan Z Classic",
        imgURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmP-4HGlFaskWrr0OajgCAispB9NJlO7jdA&usqp=CAU",
        mrp: 2400,
      },
      {
        id: uuid(),
        title: "Sonata C series",
        imgURL:
          "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2020/10/Masthead-Mobile@2x-3.jpg",
        mrp: 1550,
      },
      {
        id: uuid(),
        title: "Titan A bz",
        imgURL:
          "https://5.imimg.com/data5/BB/QL/YD/ANDROID-76371972/product-jpeg-500x500.jpg",
        mrp: 1700,
      },
      {
        id: uuid(),
        title: "Titan C series",
        imgURL:
          "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Top-Skeleton-Watches-1.jpg",
        mrp: 2000,
      },
      {
        id: uuid(),
        title: "Titan N Series 240",
        imgURL: "https://www.coverwatches.com/assets/Vorseite/uhr-cover.png",
        mrp: 770,
      },
      {
        id: uuid(),
        title: "Titan A series 345",
        imgURL:
          "https://i.guim.co.uk/img/media/beb50a8974a33b6109dc29ff14f0cfd359ee68fa/0_121_1673_1003/master/1673.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=1e1c70869ab0f5f8344de0051d34e081",
        mrp: 1900,
      },
      {
        id: uuid(),
        title: "Titan S class 255",
        imgURL:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-mens-watches-1-1628600605.jpg?crop=1xw:1xh;center,top&resize=480:*",
        mrp: 3000,
      },
      {
        id: uuid(),
        title: "Titan H series 55",
        imgURL:
          "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        mrp: 999,
      },
      {
        id: uuid(),
        title: "Titan L Class 99",
        imgURL: "https://m.media-amazon.com/images/I/71sP8fzZACL._UL1249_.jpg",
        mrp: 3400,
      },
      {
        id: uuid(),
        title: "Titan 22C",
        imgURL:
          "https://media.gq-magazine.co.uk/photos/5fca181cea319833403830d6/master/w_2121,h_1414,c_limit/04112020_Watches_11.jpg",
        mrp: 1875,
      },
      {
        id: uuid(),
        title: "Titan J Class 33",
        imgURL:
          "https://cdn.shopify.com/s/files/1/2996/3226/files/bwc_home_hero_apogee_deepspace_aug2021_mob_x800.jpg?v=1628691824",
        mrp: 3900,
      },
    ],
    currentProductList: [],
    cart: [],
    pagination: {
      currentPage: 1,
      totalPages: 0,
    },
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },

    setUser: (state, action) => {
      state.currentUser = action.payload;
    },

    paginator: (state, action) => {
      state.pagination.currentPage = action.payload;
      let page = state.pagination.currentPage || 1,
        per_page = 5,
        offset = (page - 1) * per_page,
        paginatedItems = state.productList.slice(offset).slice(0, per_page);
      state.pagination.totalPages = Math.ceil(
        state.productList.length / per_page
      );

      state.currentProductList = paginatedItems;
    },

    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },

    setSearchedProducts: (state, action) => {
      const globalRegex = new RegExp(`${action.payload}`, "gi");
      let tempData = [];
      for (let i = 0; i < state.productList.length; i++) {
        if (globalRegex.test(state.productList[i].title)) {
          tempData.push(state.productList[i]);
        }
      }
      state.currentProductList = tempData;
    },

    increaseProductQuantity: (state, action) => {
      let tempArray = [];
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload) {
          tempArray.push({
            ...state.cart[i],
            quantity: (state.cart[i].quantity += 1),
          });
        } else {
          tempArray.push(state.cart[i]);
        }
      }
      state.cart = tempArray;
    },

    decreaseProductQuantity: (state, action) => {
      let tempArray = [];
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload) {
          if (state.cart[i].quantity > 1) {
            tempArray.push({
              ...state.cart[i],
              quantity: (state.cart[i].quantity -= 1),
            });
          } else {
            tempArray.push(state.cart[i]);
          }
        } else {
          tempArray.push(state.cart[i]);
        }
      }
      state.cart = tempArray;
    },
  },
});

export const {
  addToCart,
  setSearchedProducts,
  setUser,
  getProdDetails,
  paginator,
  setCurrentPage,
  increaseProductQuantity,
  decreaseProductQuantity,
} = appSlice.actions;

export const selectProdById = (state, prodId) =>
  state.productList.find((product) => product.id === prodId);

export default appSlice.reducer;
