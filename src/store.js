// 从 @reduxjs/toolkit 导入 configureStore 函数
import { configureStore } from "@reduxjs/toolkit";
// 导入购物车状态切片
import cartReducer from "./CartSlice";

// 使用 configureStore 创建 Redux store
const store = configureStore({
  // 定义根 reducer 对象
  reducer: {
    // 'cart' 是 store 中的切片名称，由 cartReducer 管理
    cart: cartReducer,
  },
});

// 导出 store 以供应用使用（例如在 <Provider store={store}> 中）
export default store;
