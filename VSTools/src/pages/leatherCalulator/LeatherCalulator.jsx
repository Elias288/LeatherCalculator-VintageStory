import { useState } from "react";

import "./leatherCalculatorStyles.css";
import hideRaw from "./assets/Hide-raw.png";
import logAcacia from "./assets/Log-acacia.png";
import logOak from "./assets/Log-oak.png";
import lime from "./assets/lime.png";
import poweredBorax from "./assets/Powdered_borax.png";
import limewater from "./assets/Limewater.png";
import diluitedBorax from "./assets/Diluited_Borax.png";
import weakTannin from "./assets/Weak_tannin.png";
import strongTannin from "./assets/Strong_tannin.png";

const LeatherCalculator = () => {
  const [byHide, setByHide] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [shoppingList, setShoppingList] = useState({
    amountOfHides: 0,
    amountOfLogs: 0,
    amountOfLime: 0,
    amountOfPoweredBorax: 0,
    amountOfLimewater: 0,
    amountOfDiluitedBorax: 0,
    amountOfWeakTanin: 0,
    amountOfStronTanin: 0,
  });
  const [hideRange, setHideRange] = useState(1);

  return (
    <section className="leatherCalculator">
      <h1>Leather Calculator</h1>

      <div className="selectHide">
        <div className="toggleLeather">
          <h3>Calculate by amount of hide/leather</h3>

          <label className="switch">
            <input type="checkbox" onChange={() => setByHide(!byHide)} />
            <span className="slider"></span>
          </label>
        </div>

        <h3>Select leather size:</h3>

        {byHide && (
          <div className="buttonsContainer">
            <button onClick={() => setSelectedSize("small")}>
              <img src={hideRaw} alt="Small hide raw" id="smallHideRaw" />
              <label>Small</label>
            </button>

            <button onClick={() => setSelectedSize("medium")}>
              <img src={hideRaw} alt="Medium hide raw" id="mediumHideRaw" />
              <label>Medium</label>
            </button>

            <button onClick={() => setSelectedSize("large")}>
              <img src={hideRaw} alt="Large hide raw" id="largeHideRaw" />
              <label>Large</label>
            </button>

            <button onClick={() => setSelectedSize("huge")}>
              <img src={hideRaw} alt="Huge hide raw" id="hugeHideRaw" />
              <label>Huge</label>
            </button>
          </div>
        )}

        {selectedSize !== "" && (
          <>
            <div className="hideRange">
              <p>
                Amount of {byHide ? selectedSize + " " + "hide" : "leather"}{" "}
                {hideRange}
              </p>
              <span>1</span>

              <input
                type="range"
                min={1}
                max={10}
                onChange={(e) => setHideRange(e.target.value)}
                defaultValue={1}
              />

              <span>25</span>
            </div>

            <div className="shoppingList">
              <h3>Shop List</h3>

              <div className="item">
                <p>Hide</p>
                <img src={hideRaw} alt="Hide" />
                <p>
                  <span>{shoppingList.amountOfHides}</span>
                </p>
              </div>

              <div className="item">
                <p>Oak or Acacia logs</p>
                <div>
                  <img src={logOak} alt="log oak" />
                  <img src={logAcacia} alt="log acacia" />
                  <span>{shoppingList.amountOfLogs}</span>
                </div>
              </div>

              <div className="item">
                <p>Lime or Powered Borax</p>
                <div>
                  <img src={lime} alt="lime" />
                  <img src={poweredBorax} alt="powered borax" />
                </div>
                <div>
                  <span>{shoppingList.amountOfLime}</span>
                  <span>{shoppingList.amountOfPoweredBorax}</span>
                </div>
              </div>

              <div className="item">
                <p>Limewater or Diluited Borax</p>
                <div>
                  <img src={limewater} alt="limewater" />
                  <img src={diluitedBorax} alt="diluited borax " />
                </div>
                <div>
                  <span>{shoppingList.amountOfLimewater}</span>
                  <span>{shoppingList.amountOfDiluitedBorax}</span>
                </div>
              </div>

              <div className="item">
                <p>Weak tanin</p>
                <img src={weakTannin} alt="weak tanin" />
                <span>{shoppingList.amountOfWeakTanin}</span>
              </div>

              <div className="item">
                <p>Strong tanin</p>
                <img src={strongTannin} alt="strong tanin" />

                <span>{shoppingList.amountOfStronTanin}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LeatherCalculator;
