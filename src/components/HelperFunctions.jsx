import React, { createContext, useContext, useState, useEffect } from "react";

// 创建一个上下文对象
const WindowSizeContext = createContext(null);

// 自定义Hook来监听窗口大小
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);

    // 组件卸载时清理事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

// 上下文提供者组件
function WindowSizeProvider({ children }) {
  const size = useWindowSize();

  return (
    <WindowSizeContext.Provider value={size}>
      {children}
    </WindowSizeContext.Provider>
  );
}

// Hook来在子组件中获取窗口大小
function useWindowContext() {
  const context = useContext(WindowSizeContext);
  if (!context) {
    throw new Error(
      "useWindowContext must be used within a WindowSizeProvider"
    );
  }
  return context;
}

export { WindowSizeProvider, useWindowContext };
