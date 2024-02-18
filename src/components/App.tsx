import { useState } from "react";
import cls from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <h1 className={cls.value}>{count}</h1>
      <button className={cls.button} onClick={increment}>
        <span>Inc</span>
      </button>
      <Outlet />
    </div>
  );
};
