import { configureStore } from "@reduxjs/toolkit";

import useReduser from "../features/auth/authUser";
export const store = configureStore({
  reducer: { auth: useReduser },
});
