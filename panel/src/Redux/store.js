import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { UserListReducer, userLoginReducer } from "./Reducers/UserReducers";
import { productCreateReducer, productDeleteReducer, productEditReducer, productListReducer } from "./Reducers/ProductReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: UserListReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
});

//LOGIN
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;


const initialState = {
  userLogin: {
    userInfo: userInfoFromLocalStorage
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store