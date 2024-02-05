
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { action } from './redux/todoReducer'
import Rodal from 'rodal';


const App=(props)=>{
    useEffect(()=>{
        props.loadTodos()
    },[])


  

  return (
    <>
        <div className='card' style={{width:"1400px",margin:"auto",height:"76px",background:"rgb(18, 18, 62)",marginTop:"20px"}}>
            <button style={{display:"block",margin:"auto"}} className='align-items-center btn btn-warning' onClick={()=>props.rodal()}>Open Modal</button>
        </div>

        <div style={{width:"1400px",margin:"auto",marginTop:"20px",gap:"10px"}} className='d-flex flex-wrap '>
            {
                props.todos.map((item,i)=><div style={{width:"272px",background:"rgb(18, 18, 62)"}} className='card ' key={item.id}>
                    <h3 style={{background:"rgb(63, 63, 96)",color:"rgb(1, 0, 123)",width:"250px",textAlign:"center"}} onClick={()=>props.openRodal(i)} className='mx-auto card  mt-2'>{item.name}</h3>
                    {/* <button className='btn btn-success mb-2 w-50 mx-auto' onClick={()=>props.edetItm(item)}>edet</button> */}
                    <button className='btn btn-danger mb-2 w-25 mx-auto' onClick={()=>props.delItm(item.id)}>X</button>

                </div>)
            }
        </div>
             
            <Rodal height={350} visible={props.isOpen} onClose={()=>props.rodal()}>
            <div className='card-header'>Add Todos</div>

            <div className='card-body'>
                <input placeholder='which topic...' value={props.inpV} onChange={(e)=>props.getV(e.target.value)} className='form-control mb-2' type="text" />
                <div>
                    {
                        props.NeWvideo.map((item,i)=>{
                            return  <div style={{gap:"10px"}} className='w-75 d-flex' key={i}>
                                <input placeholder='name...' onChange={(e)=>props.SaveName({e:e.target.value,i})} className='form-control mb-2' type="text" />
                                <input placeholder='url...' onChange={(e)=>props.SaveName2({e:e.target.value,i})} className='form-control mb-2' type="text" />
                                <button className='btn btn-danger mb-2 w-25 mx-auto' onClick={(i)=>props.delet(i)} >X</button>

                            </div>
                        })
                    }
                </div>
                <button onClick={()=>props.creatV()} className='btn btn-warning'>Create Video</button>
                <div style={{display:"block",margin:"auto",width:"20%",marginTop:"15px"}}>
                <button onClick={()=>props.save({name:props.inpV,video:props.NeWvideo})} className='btn btn-success w-100'>save</button>
                </div>
            </div>
            </Rodal>
            <Rodal height={300} width={400} visible={props.isOpen2} onClose={()=>props.openRodal()}>
                {
                    props.todos[props.curent]?.video.map((item,i)=>{
                        return (
                            <div key={i}>
                                <h3>{item.vName}</h3>
                                <a href={item.vLink}>{item.vLink}</a>
                            </div>
                        )
                    })
                }
            </Rodal>    
        </>
  )
}
export default connect((state)=>({...state.todo}),action)(App)




















    // function deleteItem(id){
    //     const userCollection=collection(firestor,"users")
    //     const oneUser=doc(userCollection,id)
    //     deleteDoc(oneUser).then((res)=>{
    //         getUsers()
    //     })
    //     setLoad(true)
    // }
    // function save(){
    //     const userCollection=collection(firestor,"users")
    //     if(curent===""){
    //         addDoc(userCollection,userObj).then((res)=>{
    //         getUsers()
    //     })
    //     }else{
    //       const oneUser=  doc(userCollection,curent)
    //       updateDoc(oneUser,userObj).then((res)=>{
    //         getUsers()
    //       })
    //       setCurent("")
    //     }
        
    //     setLoad(true)

    //     setUserObj({name:"",age:""})
    // }
    // function edetItem(itm){
    //     setCurent(itm.id)
    //     delete itm.id
    //     setUserObj(itm)
    // }