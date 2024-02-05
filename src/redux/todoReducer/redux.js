import{configureStore}from'@reduxjs/toolkit'
import slice from '../todoReducer'
import apiMiddleware from '../apiMedliver/apimedil'


const store = configureStore({
    reducer:{
        todo:slice.reducer
    },
    middleware:()=>[apiMiddleware]
})
export default store