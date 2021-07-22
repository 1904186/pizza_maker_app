
import { createSlice} from '@reduxjs/toolkit'

const initialState= {
  name: '',
  address: '',
  phoneNo: '',
  email: ''
}

const userinfo = createSlice({
    name: "user",
  // INITIAL STATE
  initialState,
  // REDUCER
  reducers: {
    chooseName: (state, action) => { state.name = action.payload },
    chooseAddress: (state, action) => { state.address = action.payload },
    choosePhoneNo: (state, action) => { state.phoneNo = action.payload },
    chooseEmail: (state, action) => { state.email = action.payload },
    resetUser:()=>{
      return initialState   
    }
  }
})


export const userReducer =userinfo.reducer

// ACTIONS
export const { chooseName, chooseAddress, choosePhoneNo, chooseEmail, resetUser } = userinfo.actions