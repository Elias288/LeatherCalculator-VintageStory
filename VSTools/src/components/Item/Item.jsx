import PropTypes from "prop-types";
import "./ItemStyles.css";

/**
 *
 * @param {object} props
 * @param {string} props.img
 * @param {string} props.imgTitle
 * @param {number} [props.amount]
 * @param {number} [props.itemSize]
 * @param {number} [props.size]
 * @param {boolean} [props.isDual]
 * @param {boolean} [props.isEmpty]
 * @param {string} [props.img2]
 * @param {string} [props.imgTitle2]
 * @returns
 */
const Item = (props) => {
  const {
    amount,
    img,
    imgTitle,
    size,
    itemSize,
    isDual = false,
    isEmpty = false,
    img2,
    imgTitle2,
  } = props;

  if (isEmpty) {
    return (
      <div
        className="ItemContainer"
        style={{ width: size ? size : "60p´x", height: size ? size : "60p´x" }}
      ></div>
    );
  }

  return (
    <>
      <div
        className="ItemContainer"
        style={{
          width: size ? size : "60p´x",
          height: size ? size : "60p´x",
        }}
      >
        {!isDual && (
          <img
            src={img}
            alt={imgTitle}
            title={imgTitle}
            style={{
              width: itemSize ? itemSize : "50px",
              height: itemSize ? itemSize : "50px",
            }}
          />
        )}

        {isDual && (
          <div className="dual">
            <img
              src={img}
              alt={imgTitle}
              title={imgTitle}
              style={{
                width: itemSize ? itemSize : "50px",
                height: itemSize ? itemSize : "50px",
              }}
            />

            <img
              src={img2}
              alt={imgTitle2}
              title={imgTitle2}
              className="image2"
              style={{
                width: itemSize ? itemSize : "50px",
                height: itemSize ? itemSize : "50px",
              }}
            />
          </div>
        )}
        <span>{amount}</span>
      </div>
    </>
  );
};

Item.propTypes = {
  img: PropTypes.string.isRequired,
  imgTitle: PropTypes.string.isRequired,
  amount: PropTypes.number,
  img2: PropTypes.string,
  imgTitle2: PropTypes.string,
  size: PropTypes.number,
  itemSize: PropTypes.number,
  isDual: PropTypes.bool,
  isEmpty: PropTypes.bool,
};

export default Item;
