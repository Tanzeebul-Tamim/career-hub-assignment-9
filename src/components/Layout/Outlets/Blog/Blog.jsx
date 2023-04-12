import React from "react";

const Blog = () => {
  return (
    <div className="text-stone-800">
      <div className="text-center mt-12 mb-20 text-3xl">
        <p className="font-bold">Things you should know as a web-developer</p>
      </div>
      <div className="text-xl mx-20">
        <ol style={{listStyle: "disc"}}>
            <li>
              <p className="font-bold">When should you use context API?</p>
              <p>- You should use the Context API in React when you need to pass data down to multiple components without having to explicitly pass props through every level of the component tree.</p>
            </li>
            <li>
              <p className="font-bold">What is a custom hook?</p>
              <p>- A custom hook is a reusable function in React that allows you to extract component logic into a separate function, making it easier to share code between components.</p>
            </li>
            <li>
              <p className="font-bold">What is useRef?</p>
              <p>- useRef is a hook in React that creates a mutable reference that persists across renders, allowing you to access and modify the properties of a DOM element or other value without triggering a re-render of your component.</p>
            </li>
            <li>
              <p className="font-bold">What is useMemo?</p>
              <p>- useMemo is a hook in React that memoizes the result of a function so that it is only re-computed when its dependencies have changed, which can improve performance by avoiding unnecessary re-renders.</p>
            </li>
        </ol>
      </div>
    </div>
  );
};

export default Blog;
