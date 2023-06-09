import React, { FC, useEffect, useState } from 'react';
import './App.css';
import Loader from './Components/Loader';
import TodoList from './Components/TodoList';

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 10000);
  }, [])
  return (
    <div className="App">
      {loading ? <Loader /> : <TodoList />}
    </div>
  );
}

export default App;
