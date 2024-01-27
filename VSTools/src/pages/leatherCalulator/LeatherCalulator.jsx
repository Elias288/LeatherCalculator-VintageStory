import { useRef, useState } from "react";

import "./leatherCalculatorStyles.css";
import hideRaw from "./assets/Hide-raw.png";
import hideSoaked from "./assets/Hide_soaked.png";
import hideScraped from "./assets/Hide_scraped.png";
import preparedHide from "./assets/Prepared_hide.png";
import leather from "./assets/Leather.png";
import logAcacia from "./assets/Log-acacia.png";
import logOak from "./assets/Log-oak.png";
import lime from "./assets/lime.png";
import poweredBorax from "./assets/Powdered_borax.png";
import limewater from "./assets/Limewater.png";
import diluitedBorax from "./assets/Diluited_Borax.png";
import weakTannin from "./assets/Weak_tannin.png";
import strongTannin from "./assets/Strong_tannin.png";
import barrel from "./assets/Barrel.png";
import water from "./assets/Water-blob.png";
import knife from "./assets/Knife-flint.png";

/**
 * @typedef {object} sizeValues
 * @property {string} name
 * @property {number} amountLiquidPerHide
 * @property {number} amountLeather
 * @property {number} maxHidePerBarrel
 */

const HIDE_SIZES = {
  SMALL: {
    name: "small",
    amountLiquidPerHide: 2,
    cantLeather: 1,
    maxHidePerBarrel: 25,
  },
  MEDIUM: {
    name: "medium",
    amountLiquidPerHide: 4,
    cantLeather: 2,
    maxHidePerBarrel: 12,
  },
  LARGE: {
    name: "large",
    amountLiquidPerHide: 6,
    cantLeather: 3,
    maxHidePerBarrel: 8,
  },
  HUGE: {
    name: "huge",
    amountLiquidPerHide: 10,
    cantLeather: 5,
    maxHidePerBarrel: 5,
  },
};

const EMPTY_SHOPPING_LIST = {
  amountOfHides: 0,
  amountOfLogs: 0,
  amountOfLime: 0,
  amountOfPoweredBorax: 0,
  amountOfLimewater: 0,
  amountOfDiluitedBorax: 0,
  amountOfTanin: 0,
};

const LeatherCalculator = () => {
  const range = useRef(null);
  const [byHide, setByHide] = useState(true);
  const [selectedSizeValues, setSelectedSizeValue] = useState(
    /** @type {sizeValues} */ ({
      name: "",
      amountLeather: 1,
      amountLiquidPerHide: 0,
      maxHidePerBarrel: 0,
    })
  );
  const [shoppingList, setShoppingList] = useState(EMPTY_SHOPPING_LIST);
  const [hideRange, setHideRange] = useState(/** @type {number} */ 1);

  /**
   * Set size hide values
   * @param {sizeValues} sizeValues size of selected hide
   */
  const selectHideSize = (sizeValues) => {
    // setea los valores del tamaño seleccionado
    setSelectedSizeValue(sizeValues);
    // reinicia el range
    setHideRange(1);
    // reinicia la lista del shopping

    calculate(1, sizeValues.amountLiquidPerHide);
  };

  const onRangeChange = (e) => {
    const value = e.target.value;
    setHideRange(value);

    calculate(value, selectedSizeValues.amountLiquidPerHide);
  };

  /**
   * Calcula las cantidades de los diferentes items
   * @param {number} amountOfHides
   * @param {number} amountOfLiquidPerHide
   */
  const calculate = (amountOfHides, amountOfLiquidPerHide) => {
    setShoppingList({
      ...shoppingList,
      amountOfHides,
      amountOfLogs: Math.ceil((amountOfHides * amountOfLiquidPerHide) / 10), // toma el valor más cercano a 10 por la cantidad de logs y lo multiplica por 3 (2 weak tanin, 1 strong tanin)
      amountOfLime: amountOfHides * amountOfLiquidPerHide,
      amountOfPoweredBorax:
        Math.ceil((amountOfHides * amountOfLiquidPerHide) / 5) * 2,
      amountOfLimewater: amountOfHides * amountOfLiquidPerHide,
      amountOfDiluitedBorax:
        Math.ceil((amountOfHides * amountOfLiquidPerHide) / 5) * 5,
      amountOfTanin:
        Math.ceil((amountOfHides * amountOfLiquidPerHide) / 10) * 10,
    });
  };

  return (
    <section className="leatherCalculator">
      <h1>Leather Calculator</h1>

      <div className="selectHide">
        <div className="toggleLeather">
          <h3>Calculate by amount of hide/leather</h3>

          <label className="switch">
            <input type="checkbox" /* onChange={() => setByHide(!byHide)} */ />
            <p className="slider"></p>
          </label>
        </div>

        <h3>Select leather size:</h3>

        {byHide && (
          <div className="buttonsContainer">
            <button
              onClick={() => selectHideSize(HIDE_SIZES.SMALL)}
              className={
                selectedSizeValues.name === HIDE_SIZES.SMALL.name
                  ? "Selected"
                  : "notSelected"
              }
            >
              <img
                src={hideRaw}
                alt="Small hide raw"
                id="smallHideRaw"
                title="Small hide raw"
              />
              <label>Small</label>
            </button>

            <button
              onClick={() => selectHideSize(HIDE_SIZES.MEDIUM)}
              className={
                selectedSizeValues.name === HIDE_SIZES.MEDIUM.name
                  ? "Selected"
                  : "notSelected"
              }
            >
              <img
                src={hideRaw}
                alt="Medium hide raw"
                id="mediumHideRaw"
                title="Medium hide raw"
              />
              <label>Medium</label>
            </button>

            <button
              onClick={() => selectHideSize(HIDE_SIZES.LARGE)}
              className={
                selectedSizeValues.name === HIDE_SIZES.LARGE.name
                  ? "Selected"
                  : "notSelected"
              }
            >
              <img
                src={hideRaw}
                alt="Large hide raw"
                id="largeHideRaw"
                title="Large hide raw"
              />
              <label>Large</label>
            </button>

            <button
              onClick={() => selectHideSize(HIDE_SIZES.HUGE)}
              className={
                selectedSizeValues.name === HIDE_SIZES.HUGE.name
                  ? "Selected"
                  : "notSelected"
              }
            >
              <img
                src={hideRaw}
                alt="Huge hide raw"
                id="hugeHideRaw"
                title="Huge hide raw"
              />
              <label>Huge</label>
            </button>
          </div>
        )}

        {selectedSizeValues.name !== "" && (
          <>
            <div className="hideRange">
              <p>
                Amount of{" "}
                {byHide ? selectedSizeValues.name + " " + "hide" : "leather"}{" "}
                {hideRange}
              </p>
              <p>1</p>

              <input
                type="range"
                min={1}
                max={selectedSizeValues.maxHidePerBarrel}
                onChange={onRangeChange}
                value={hideRange}
                ref={range}
              />

              <p>{selectedSizeValues.maxHidePerBarrel}</p>
            </div>

            <div className="shoppingList">
              <h3>Shop List</h3>

              {/* HIDE */}
              <div className="item">
                <p>Hide</p>
                <img src={hideRaw} alt="Hide" title="Hide" />
                <p>{shoppingList.amountOfHides}</p>
              </div>

              {/* LOGS */}
              <div className="item">
                <p>Oak or Acacia logs</p>
                <div>
                  <img src={logOak} alt="log oak" title="log oak" />
                  <img src={logAcacia} alt="log acacia" title="log acacia" />
                  <p>{shoppingList.amountOfLogs * 3}</p>
                </div>
              </div>

              {/* LIME AND POWERED BORAX */}
              <div className="item">
                <p>Lime or Powered Borax</p>
                <div>
                  <img src={lime} alt="lime" title="lime" />
                  <img
                    src={poweredBorax}
                    alt="powered borax"
                    title="powered borax"
                  />
                </div>
                <div>
                  <p>{shoppingList.amountOfLime}</p>
                  <p>{shoppingList.amountOfPoweredBorax}</p>
                </div>
              </div>

              {/* LIMEWATER AND DILUITED BORAX */}
              <div className="item">
                <p>Limewater or Diluited Borax</p>
                <div>
                  <img src={limewater} alt="limewater" title="limewater" />
                  <img
                    src={diluitedBorax}
                    alt="diluited borax "
                    title="diluited borax"
                  />
                </div>
                <div>
                  <p>{shoppingList.amountOfLimewater}l</p>
                  <p>{shoppingList.amountOfDiluitedBorax}l</p>
                </div>
              </div>

              {/* WEAK TANIN */}
              <div className="item">
                <p>Weak tanin</p>
                <img src={weakTannin} alt="weak tanin" title="weak tanin" />
                <p>{shoppingList.amountOfTanin * 2}l</p>
              </div>

              {/* STRONG TANIN */}
              <div className="item">
                <p>Strong tanin</p>
                <img
                  src={strongTannin}
                  alt="strong tanin"
                  title="strong tanin"
                />

                <p>{shoppingList.amountOfTanin}l</p>
              </div>
            </div>

            <div className="manufacturingPath">
              <h3>Manufacturing path</h3>

              <div className="solvent">
                <p>
                  <strong>Solvent</strong>
                </p>

                <div className="diluitedBorax">
                  <img src={barrel} alt="barrel" title="barrel" />

                  <div>
                    <img src={water} alt="water" title="water" />
                    <p>{shoppingList.amountOfLime}</p>
                  </div>

                  <div>
                    <img src={lime} alt="lime" title="lime" />
                    <p>{shoppingList.amountOfLime}</p>
                  </div>
                </div>
                <div className="limewater">
                  <img src={barrel} alt="barrel" title="barrel" />

                  <img src={water} alt="water" title="water" />
                  <p>{shoppingList.amountOfPoweredBorax}</p>

                  <img
                    src={poweredBorax}
                    alt="powered borax"
                    title="powered borax"
                  />
                  <p>{shoppingList.amountOfPoweredBorax}</p>
                </div>
              </div>

              <div className="soakedHide">
                <p>
                  <strong>soakedHide</strong>
                </p>
                <img src={barrel} alt="barrel" title="barrel" />
                <div>
                  <img src={limewater} alt="limewater" title="limewater" />
                  <p>{shoppingList.amountOfLimewater}</p>
                </div>
                <div>
                  <img
                    src={diluitedBorax}
                    alt="diluited Borax"
                    title="diluited Borax"
                  />
                  <p>{shoppingList.amountOfDiluitedBorax}</p>
                </div>
                <div>
                  <img src={hideRaw} alt="hideRaw" title="hide Raw" />
                  <p>{hideRange}</p>
                </div>
                <div>
                  <img src={hideSoaked} alt="hideSoaked" title="hide Soaked" />
                  <p>{hideRange}</p>
                </div>
              </div>

              <div className="ScrapedHide">
                <p>
                  <strong>ScrapedHide</strong>
                </p>
                <div>
                  <img src={hideSoaked} alt="hideSoaked" title="hide Soaked" />
                  <p>{hideRange}</p>
                </div>
                <div>
                  <img src={knife} alt="knife" title="knife" />
                  <p>1</p>
                </div>
                <div>
                  <img
                    src={hideScraped}
                    alt="hideScraped"
                    title="hide Scraped"
                  />
                  <p>{hideRange}</p>
                </div>
              </div>

              <div className="weakTanin">
                <p>
                  <strong>weakTanin</strong>
                </p>

                <img src={barrel} alt="barrel" title="barrel" />
                <div>
                  <img src={water} alt="water" title="water" />
                  <p>{shoppingList.amountOfTanin}l</p>
                </div>

                <div>
                  <img src={logOak} alt="log oak" title="log oak" />
                  <img src={logAcacia} alt="log acacia" title="log acacia" />
                  <p>{shoppingList.amountOfLogs}</p>
                </div>

                <div>
                  <img src={weakTannin} alt="weak tanin" title="weak tanin" />
                  <p>{shoppingList.amountOfTanin}l</p>
                </div>

                <p>x2</p>
              </div>

              <div className="preparedHide">
                <p>
                  <strong>preparedHide</strong>
                </p>

                <img src={barrel} alt="barrel" title="barrel" />

                <div>
                  <img src={weakTannin} alt="weak tanin" title="weak tanin" />
                  <p>{shoppingList.amountOfTanin}l</p>
                </div>

                <div>
                  <img
                    src={hideScraped}
                    alt="hideScraped"
                    title="hide Scraped"
                  />
                  <p>{hideRange}</p>
                </div>

                <div>
                  <img src={preparedHide} alt="log acacia" title="log acacia" />
                  <p>{hideRange}</p>
                </div>
              </div>

              <div className="strongTanin">
                <p>
                  <strong>strongTanin</strong>
                </p>

                <img src={barrel} alt="barrel" title="barrel" />

                <div>
                  <img src={weakTannin} alt="weak tanin" title="weak tanin" />
                  <p>{shoppingList.amountOfTanin}l</p>
                </div>

                <div>
                  <img src={logOak} alt="log oak" title="log oak" />
                  <img src={logAcacia} alt="log acacia" title="log acacia" />
                  <p>{shoppingList.amountOfLogs}</p>
                </div>

                <div>
                  <img
                    src={strongTannin}
                    alt="strongTannin"
                    title="strong Tannin"
                  />
                  <p>{shoppingList.amountOfTanin}l</p>
                </div>
              </div>

              <div className="leather">
                <p>
                  <strong>leather</strong>
                </p>

                <img src={barrel} alt="barrel" title="barrel" />

                <div>
                  <img
                    src={strongTannin}
                    alt="strongTannin"
                    title="strong Tannin"
                  />
                  <p>{shoppingList.amountOfTanin}l</p>
                </div>

                <div>
                  <img
                    src={preparedHide}
                    alt="preparedHide"
                    title="prepared Hide"
                  />
                  <p>{hideRange}</p>
                </div>

                <div>
                  <img src={leather} alt="leather" title="leather" />
                  <p>{hideRange}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LeatherCalculator;
