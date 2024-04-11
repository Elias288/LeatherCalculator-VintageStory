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
import limewater from "./assets/Limewater-blob.png";
import diluitedBorax from "./assets/Diluited_Borax.png";
import weakTannin from "./assets/Weak_tannin.png";
import strongTannin from "./assets/Strong_tannin.png";
import barrel from "./assets/Barrel.png";
import water from "./assets/Water-blob.png";
import knife from "./assets/Knife-flint.png";
import CraftingGrid from "../../components/CraftingGrid/CraftingGrid";
import Item from "../../components/Item/Item";
import Inventory from "../../components/Inventory/Inventory";
import Barrel from "../../components/barrel/Barrel";

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
    amountLeather: 1,
    maxHidePerBarrel: 25,
  },
  MEDIUM: {
    name: "medium",
    amountLiquidPerHide: 4,
    amountLeather: 2,
    maxHidePerBarrel: 12,
  },
  LARGE: {
    name: "large",
    amountLiquidPerHide: 6,
    amountLeather: 3,
    maxHidePerBarrel: 8,
  },
  HUGE: {
    name: "huge",
    amountLiquidPerHide: 10,
    amountLeather: 5,
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
  const [leatherPerHideAmount, setLeatherPerHideAmount] = useState(1);

  /**
   * Set size hide values
   * @param {sizeValues} sizeValues size of selected hide
   */
  const selectHideSize = (sizeValues) => {
    // setea los valores del tamaño seleccionado
    setSelectedSizeValue(sizeValues);
    // reinicia el range
    setHideRange(1);

    calculate(1, sizeValues.amountLiquidPerHide, sizeValues.amountLeather);
  };

  const onRangeChange = (e) => {
    /** @type {number} */
    const value = Number(e.target.value);
    setHideRange(value);

    calculate(
      value,
      selectedSizeValues.amountLiquidPerHide,
      selectedSizeValues.amountLeather
    );
  };

  /**
   * Calcula las cantidades de los diferentes items
   * @param {number} amountOfHides
   * @param {number} amountOfLiquidPerHide
   * @param {number} amountLeather
   */
  const calculate = (amountOfHides, amountOfLiquidPerHide, amountLeather) => {
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

    // cantidad de cuero por el tamaño
    setLeatherPerHideAmount(amountLeather * amountOfHides);
  };

  return (
    <section className="leatherCalculator">
      <h1>Leather Calculator</h1>

      <div className="selectHide">
        <div className="toggleLeather">
          <h3>Calculate by amount of hide/leather</h3>

          <label className="switch">
            <input type="checkbox" onChange={() => setByHide(true)} />
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
              <div>
                <img
                  src={hideRaw}
                  alt="Small hide raw"
                  id="smallHideRaw"
                  title="Small hide raw"
                />
                <label>Small</label>
              </div>
            </button>

            <button
              onClick={() => selectHideSize(HIDE_SIZES.MEDIUM)}
              className={
                selectedSizeValues.name === HIDE_SIZES.MEDIUM.name
                  ? "Selected"
                  : "notSelected"
              }
            >
              <div>
                <img
                  src={hideRaw}
                  alt="Medium hide raw"
                  id="mediumHideRaw"
                  title="Medium hide raw"
                />
                <label>Medium</label>
              </div>
            </button>

            <button
              onClick={() => selectHideSize(HIDE_SIZES.LARGE)}
              className={
                selectedSizeValues.name === HIDE_SIZES.LARGE.name
                  ? "Selected"
                  : "notSelected"
              }
            >
              <div>
                <img
                  src={hideRaw}
                  alt="Large hide raw"
                  id="largeHideRaw"
                  title="Large hide raw"
                />
                <label>Large</label>
              </div>
            </button>

            <button
              onClick={() => selectHideSize(HIDE_SIZES.HUGE)}
              className={
                selectedSizeValues.name === HIDE_SIZES.HUGE.name
                  ? "Selected"
                  : "notSelected"
              }
            >
              <div>
                <img
                  src={hideRaw}
                  alt="Huge hide raw"
                  id="hugeHideRaw"
                  title="Huge hide raw"
                />
                <label>Huge</label>
              </div>
            </button>
          </div>
        )}

        {selectedSizeValues.name !== "" && (
          <>
            <div className="hideRange">
              <p>
                <strong>
                  Amount of{" "}
                  {byHide ? selectedSizeValues.name + " " + "hide" : "leather"}{" "}
                  {hideRange}
                </strong>
              </p>

              <div>
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
            </div>

            <div className="leatherResultContainer">
              <h3>Leather Result</h3>
              <div className="leatherResult">
                <Item
                  img={leather}
                  imgTitle="Leather"
                  amount={leatherPerHideAmount}
                  itemSize={100}
                  size={100}
                />
              </div>
            </div>

            <div className="shoppingList">
              <h3>Shop List</h3>
              <Inventory
                one={
                  <Item
                    img={hideRaw}
                    amount={+shoppingList.amountOfHides}
                    imgTitle="Hide"
                  />
                }
                two={
                  <Item
                    img={logOak}
                    amount={shoppingList.amountOfLogs * 3}
                    imgTitle="Oak log or Acacia log"
                    img2={logAcacia}
                    amount2={shoppingList.amountOfLogs * 3}
                    imgTitle2="Oak log or Acacia log"
                    isDual={true}
                  />
                }
                tree={
                  <Item
                    img={lime}
                    amount={shoppingList.amountOfLime}
                    imgTitle="Lime or powered Borax"
                    img2={poweredBorax}
                    amount2={shoppingList.amountOfLime}
                    imgTitle2="Lime or powered Borax"
                    isDual={true}
                  />
                }
                four={
                  <Item
                    isDual={true}
                    img={limewater}
                    amount={shoppingList.amountOfLimewater}
                    imgTitle="Limewater or diluited borax"
                    img2={diluitedBorax}
                    amount2={shoppingList.amountOfLimewater}
                    imgTitle2="Limewater or diluited borax"
                  />
                }
                five={
                  <Item
                    img={weakTannin}
                    amount={shoppingList.amountOfTanin * 2}
                    imgTitle="Weak tanin"
                  />
                }
                six={
                  <Item
                    img={strongTannin}
                    amount={shoppingList.amountOfTanin}
                    imgTitle="Strong tanin"
                  />
                }
              />
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

                <Barrel />
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
                <CraftingGrid
                  middleLeft={
                    <Item img={knife} imgTitle="Knife" itemSize={70} />
                  }
                  middleMiddle={
                    <Item
                      img={hideSoaked}
                      imgTitle="Hide soaked"
                      amount={hideRange}
                    />
                  }
                  result={
                    <Item
                      img={hideScraped}
                      imgTitle="Hide soaked"
                      amount={hideRange}
                    />
                  }
                />
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
                  <p>{leatherPerHideAmount}</p>
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
