import React, { useState } from 'react';
import Auth from './Component/Auth';
import TodoList from './Component/TodoList';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Auth onLogin={() => setIsAuthenticated(true)}  />
      ) : (
        <TodoList onLogout={() => setIsAuthenticated(false)}  />
      )}
    </div>
  );
};

export default App;
