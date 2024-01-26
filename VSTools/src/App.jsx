import Navigator from "./components/navigator/Navigator";
import "./app.css";
import { useState } from "react";
import LeatherCalculator from "./pages/leatherCalulator/LeatherCalulator";

function App() {
  const [selectedSection, setSelectedSection] = useState("");

  const selectSection = (section) => setSelectedSection(section);

  const RenderSection = () => {
    switch (selectedSection) {
      case "leatherCalculator":
        return <LeatherCalculator />;
      default:
        return (
          <section>
            <h1>Not Found</h1>
          </section>
        );
    }
  };

  return (
    <>
      <div className="title">
        <h1>Vintage Story Tools</h1>
      </div>

      <main>
        <Navigator setSelectSection={selectSection} />

        {selectedSection ? <RenderSection /> : <section></section>}
      </main>

      <footer>redes sociales</footer>
    </>
  );
}

export default App;
