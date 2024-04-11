import PropTypes from "prop-types";
import "./InventoryStyles.css";

/**
 *
 * @param {object} props
 * @param {React.ReactElement} [props.one]
 * @param {React.ReactElement} [props.two]
 * @param {React.ReactElement} [props.tree]
 * @param {React.ReactElement} [props.four]
 * @param {React.ReactElement} [props.five]
 * @param {React.ReactElement} [props.six]
 * @param {React.ReactElement} [props.seven]
 * @param {React.ReactElement} [props.eight]
 * @param {React.ReactElement} [props.nine]
 * @param {React.ReactElement} [props.ten]
 * @param {React.ReactElement} [props.eleven]
 * @param {React.ReactElement} [props.twelve]
 * @returns
 */
const Inventory = (props) => {
  const {
    one,
    two,
    tree,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
  } = props;

  return (
    <>
      <div className="InventoryContainer">
        <div className="gridContainer">
          <div className="grid">{one}</div>
          <div className="grid">{two}</div>
          <div className="grid">{tree}</div>
          <div className="grid">{four}</div>
          <div className="grid">{five}</div>
          <div className="grid">{six}</div>
          <div className="grid">{seven}</div>
          <div className="grid">{eight}</div>
          <div className="grid">{nine}</div>
          <div className="grid">{ten}</div>
          <div className="grid">{eleven}</div>
          <div className="grid">{twelve}</div>
        </div>
      </div>
    </>
  );
};

Inventory.propTypes = {
  one: PropTypes.element,
  two: PropTypes.element,
  tree: PropTypes.element,
  four: PropTypes.element,
  five: PropTypes.element,
  six: PropTypes.element,
  seven: PropTypes.element,
  eight: PropTypes.element,
  nine: PropTypes.element,
  ten: PropTypes.element,
  eleven: PropTypes.element,
  twelve: PropTypes.element,
};

export default Inventory;
