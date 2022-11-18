import {useState, useEffect, useCallback} from 'react'
import './styles.css'
import {getRandomTodoRequest} from './randoomGet'
import {useAsync} from './useAsync'




function App() {

 
      const [todoId, setTodoId] = useState(1);

          
      const {execute,res,error,loading} = useAsync(
        getRandomTodoRequest,
        [todoId],
        [todoId],
        true
      )


  



      return (
        <div className="app">
{error? <>

 <div>{error.message}</div>

    <button onClick={() => execute()}>
      Попробовать еще раз
    </button>

 </> :
  <>

 {loading? 

    (<p className='todo-container'>Ожидайте загрузки</p>) : 
    
    (<p className='todo-container'>{res?.title}</p>)
 
 }
 </>  
 
}

  <div>
    Input todo id (1-100) &nbsp;&nbsp;
   <input type="number"
          disabled = {loading}
          min = {1}
          max = {100}
          value = {todoId}
          onChange = {(e) => setTodoId(e.target.value) }/>
    </div>
    <button onClick={() => execute()}
            disabled = {loading}>
      Нажмите для получения заголовка

    </button>



     </div>
 
    
      )

    }

export default App;
