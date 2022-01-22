import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Filter from '../filters/Filter'
import TodoListItem from './TodoListItem'

import { selectFilteredTodoIds, selectTodos, todosClearCompleted } from './todoSlice'

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div>
      {count} item{suffix} left
    </div>
  )
}

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds)
  const dispatch = useDispatch()
  const loadingStatus = useSelector((state) => state.todos.status)

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = selectTodos(state).filter((todo) => !todo.completed)
    return uncompletedTodos.length
  })

  if (loadingStatus === 'loading') {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg text-center py-4">
        Loading
      </div>
    )
  }

  const renderedListItems = todoIds.map((todoId) => (
    <TodoListItem key={todoId} id={todoId} />
  ))

  const onClearCompleted = () => {
    dispatch(todosClearCompleted())
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg">
      <ul>{renderedListItems}</ul>
      <div className="flex justify-between text-gray-500 p-4">
        <RemainingTodos count={todosRemaining} />
        <div className="mm:hidden">
          <Filter />
        </div>
        <button onClick={onClearCompleted}>Clear Completed</button>
      </div>
    </div>
  )
}

export default TodoList
