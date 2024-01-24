import PropTypes from "prop-types";
import "./NavigatorButtonStyles.css";

/**
 *  Boton de navegación
 * @param {Object} params
 * @param {string} params.text
 * @param {() => void} params.action
 * @returns
 */
const NavigatorButton = ({ text, action }) => {
  return <button onClick={action}>{text}</button>;
};

NavigatorButton.propTypes = {
  /** texto del botón */
  text: PropTypes.string.isRequired,
  /** acción del botón */
  action: PropTypes.func,
};

export default NavigatorButton;
