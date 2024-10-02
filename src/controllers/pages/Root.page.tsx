import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="main">
      <div>
        <div>
          <header className="hero">
            <h1>IAT</h1>
            <p>The API documentation manager base on OpenAPI</p>
          </header>
          
          <section id="detail">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default RootPage;