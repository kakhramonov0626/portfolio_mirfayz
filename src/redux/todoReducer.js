import{ createSlice} from '@reduxjs/toolkit'
import { collection } from 'firebase/firestore'
import Rodal from 'rodal'

const slice =createSlice({
    name:"todo",
    initialState:{
        todos:[],
        inpV:"",
        curent:"",
        isOpen:false,
        isOpen2:false,
        NeWvideo:[]
    },
    reducers:{
        getTodos:(state,action)=>{
            state.todos=action.payload
            state.inpV=""
            state.curent=""    
            state.NeWvideo=[]
        },
        getV:(state,action)=>{
            state.inpV=action.payload
        },
        // edetItm:(state,action)=>{
        //     state.inpV=action.payload.title
        //     state.curent=action.payload.id
        // },
        rodal:(state,action)=>{
            state.isOpen=!state.isOpen
        },
        openRodal:(state,action)=>{
            state.isOpen2=!state.isOpen2
            state.curent=action.payload
        },
        creatV:(state,action)=>{
            state.NeWvideo.push({
                vName:"",
                vLink:""
            })
        },
        SaveName:(state,action)=>{
            console.log(action.payload);
            state.NeWvideo[action.payload.i].vName=action.payload.e
        },
        SaveName2:(state,action)=>{
            state.NeWvideo[action.payload.i].vLink=action.payload.e
        },
        delet:(state,action)=>{
            state.NeWvideo.splice(action.payload,1)
        }
    }
})

const modal= slice.actions

function loadTodos(){
    return {type:"apiCall",payload:{
        collection:"todos",
        method:"GET",
        onSuccess:modal.getTodos
    }}
}
function save(data){
    return {type:"apiCall",payload:{
        collection:"todos",
        method:"POST",
        onSuccess:loadTodos,
        data,
        
    }}

}

function delItm(id){
    return {type:"apiCall",payload:{
        collection:"todos",
        method:"DELETE",
        onSuccess:loadTodos,
        id
    }}
}


export default slice
export const action ={...slice.actions,loadTodos,save,delItm}
