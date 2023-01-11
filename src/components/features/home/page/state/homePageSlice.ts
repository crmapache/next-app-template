import { createSlice } from '@reduxjs/toolkit'

export interface HomePageState {
  value: number
}

const initialState: HomePageState = {
  value: 0,
}

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = homePageSlice.actions
export const homePageReducer = homePageSlice.reducer
