import PropTypes from "prop-types";
import "./CraftingGridStyles.css";
import Item from "../Item/Item";

/**
 *
 * @param {object} props
 * @param {React.ReactElement} [props.topLeft] topLeft Item component
 * @param {React.ReactElement} [props.topMiddle] topMiddle Item component
 * @param {React.ReactElement} [props.topRight] topRight Item component
 * @param {React.ReactElement} [props.middleLeft] middleLeft Item component
 * @param {React.ReactElement} [props.middleMiddle] middleMiddle Item component
 * @param {React.ReactElement} [props.middleRigth] middleRigth Item component
 * @param {React.ReactElement} [props.bottomLeft] bottomLeft Item component
 * @param {React.ReactElement} [props.bottomMiddle] bottomMiddle Item component
 * @param {React.ReactElement} [props.bottomRigth] bottomRigth Item component
 * @param {React.ReactElement} props.result result Item component
 * @returns
 */
const CraftingGrid = (props) => {
  const {
    topLeft = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
    topMiddle = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
    topRight = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
    middleLeft = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
    middleMiddle = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
    middleRigth = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
    bottomLeft = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
    bottomMiddle = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
    bottomRigth = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
    result = <Item amount={0} img="" imgTitle="empty" isEmpty={true} />,
  } = props;

  return (
    <>
      <div className="CraftingGridContainer">
        <div className="grid">{topLeft}</div>
        <div className="grid">{topMiddle}</div>
        <div className="grid">{topRight}</div>
        <div className="grid">{middleLeft}</div>
        <div className="grid">{middleMiddle}</div>
        <div className="grid">{middleRigth}</div>
        <div className="grid">{bottomLeft}</div>
        <div className="grid">{bottomMiddle}</div>
        <div className="grid">{bottomRigth}</div>

        <div className="grid product">{result}</div>
      </div>
    </>
  );
};

CraftingGrid.propTypes = {
  topLeft: PropTypes.element,
  topMiddle: PropTypes.element,
  topRight: PropTypes.element,
  middleLeft: PropTypes.element,
  middleMiddle: PropTypes.element,
  middleRigth: PropTypes.element,
  bottomLeft: PropTypes.element,
  bottomMiddle: PropTypes.element,
  bottomRigth: PropTypes.element,
  result: PropTypes.element,
};

export default CraftingGrid;
