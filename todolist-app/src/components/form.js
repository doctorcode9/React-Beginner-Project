import {React} from "react";

const Form = ({setTodo, len}) => {
    var itemtoAdd = ""
    const formHandling = (e)=>{
        e.preventDefault() //this line will allows you to prevent the page reloading when you submit a task
        itemtoAdd = e.target.firstChild.value
        if(itemtoAdd !== ""){
            setTodo(state => [...state, {id:len,todo:itemtoAdd}])
        }
        e.target.firstChild.value = ""
    }
    return(
        <div className="Form_container">
            <form onSubmit={formHandling}>
                <input type="text" placeholder="Write a Task..."/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form