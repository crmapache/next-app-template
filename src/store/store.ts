import { configureStore } from '@reduxjs/toolkit'

import { homePageReducer } from '@components/features/home/page'

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
