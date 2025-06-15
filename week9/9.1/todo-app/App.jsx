export default function App(){
    const [todos,setTodos] = useState([{
        title:"go to gym",
        description:"hit regularly",
        done:false
    }]);

    function addTodo(){
        let newArray =[];
        for(let i=0;i<todos.length;i++){
            newArray.push(todos[i]);
        }
        newArray.push({

            title:document.getElementById("title").value,
            description:document.getElementById("description").value,
            done:true
        });
        setTodos(newArray);
    }

    return (<div>
    <input id="title" type = "text" placeholder="Title"></input>
    <input id="description" type = "text" placement ="Descrition"></input>
    <button onClick={addTodo}>Add Todo</button> 
    <br />
   {todos.map((<Todo 
   title={todo[0].title} 
   description={todo[0].descrition} 
   done ={todo[0].done} 
   />  ))}
    </div>
    );
}
function Todo(props){
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <h3>{props.done ?"task is done" : "task in not done" }</h3>
    </div>
}