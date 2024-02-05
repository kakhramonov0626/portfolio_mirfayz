import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { firestor } from '../../firebase'

const apiMiddleware =(store)=>(next)=>(action)=>{
    if(action.type==="apiCall"){
        const refCollection =collection(firestor,action.payload.collection)
        if(action.payload.method==="GET"){
            getDocs(refCollection).then((res)=>{
                const todos =res.docs.map((item)=>{
                    return { ...item.data(),id:item.id}
                });
              store.dispatch(action.payload.onSuccess(todos))
            })
        } 
        // POST
        else if(action.payload.method==="POST"){

            if(store.getState().todo.curent===""){
                addDoc(refCollection,action.payload.data).then((res)=>{
                    store.dispatch(action.payload.onSuccess())
                })
            }else{
                 const oneDoc=  doc(refCollection,store.getState().todo.curent)
                updateDoc(oneDoc,action.payload.data).then((res)=>{
                    store.dispatch(action.payload.onSuccess())
                    store.getState().todo.isOpen=action.payload.data.isOpen
                })
            }
        }
        // delete
        else if(action.payload.method==="DELETE"){
          const oneDoc= doc(refCollection,action.payload.id)
          deleteDoc(oneDoc).then((res)=>{
                store.dispatch(action.payload.onSuccess())
          })
        }
    }else(
        next(action)
    )

}
export default apiMiddleware
