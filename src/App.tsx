import type { JSX } from "react";
import "./App.css";
import Layout from "./components/Layout";

function App(): JSX.Element {
  return (
    <>
      <div>
        <Layout>hello</Layout>
      </div>
    </>
  );
}

export default App;
