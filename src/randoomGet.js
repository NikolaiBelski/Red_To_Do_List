
export const  getRandomTodoRequest = async(todoId) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`
    return await fetch(url).then(item => item.json())
  }