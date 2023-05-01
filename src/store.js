import { configureStore } from '@reduxjs/toolkit'
import { userDetail } from './UserDetailsList'

export const store = configureStore({
  reducer: {
    userdata:userDetail
  },
})