import { createSlice } from "@reduxjs/toolkit"
  export const userdeatials = createSlice({
    name: 'user',
    initialState:{},
    reducers: {
      userDetail:(state,action)=>{
        return{
            ...state,
            ...action.payload
        }

      }
    },
  })
  export const { userDetail } = userdeatials.actions
  export default userdeatials.reducer