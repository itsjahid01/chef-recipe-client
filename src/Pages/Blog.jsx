import React from "react";
import { FaDownload } from "react-icons/fa";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import "./styles.css";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="App container mx-auto">
      <div className="w-9/12 mx-auto p-5">
        <Pdf targetRef={ref} filename="blog-example.pdf">
          {({ toPdf }) => (
            <div className="text-center mb-5">
              <button onClick={toPdf} className="btn ">
                <span className="mr-2 ">
                  <FaDownload />
                </span>
                Download to pdf
              </button>
            </div>
          )}
        </Pdf>
        <div ref={ref}>
          <p className="text-lg font-semibold ">
            1.Tell us the differences between uncontrolled and controlled
            components?
          </p>
          <p>
            <span className="text-lg font-semibold text-green-500">Ans: </span>
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
          <br />
          <p className="text-lg font-semibold ">
            2.How to validate React props using PropTypes?{" "}
          </p>
          <p>
            <span className="text-lg font-semibold text-green-500">Ans: </span>
            Props and PropTypes are important mechanisms for passing read-only
            attributes between React components. We can use React props, short
            for properties, to send data from one component to another. If a
            component receives the wrong type of props, it can cause bugs and
            unexpected errors in your app. Since JavaScript doesn’t have a
            built-in type checking solution, many developers use extensions like
            TypeScript and Flow. However, React has an internal mechanism for
            props validation called PropTypes.
          </p>
          <br />
          <p className="text-lg font-semibold ">
            3.Tell us the difference between nodejs and express js.?
          </p>
          <p>
            <span className="text-lg font-semibold text-green-500">Ans: </span>
            JS web application framework that provides a robust set of features
            for web and mobile applications. In other words, NodeJS is the
            package, which provides the JavaScript run-time environment, whereas
            Express is a framework that sits on top of NodeJS and helps us to
            handle requests and responses.
          </p>
          <br />
          <p className="text-lg font-semibold ">
            4. What is a custom hook, and why will you create a custom hook ?
          </p>
          <p>
            <span className="text-lg font-semibold text-green-500">Ans: </span>
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
