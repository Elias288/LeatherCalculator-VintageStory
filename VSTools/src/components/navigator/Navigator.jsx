import NavigatorButton from "../NavigatorButton/NavigatorButton";
import PropTypes from "prop-types";
import "./navigator.css";

/**
 *
 * @param {object} param0
 * @param {(section: string) => void} param0.setSelectSection
 * @returns
 */
const Navigator = ({ setSelectSection }) => {
  return (
    <nav>
      <NavigatorButton
        text="Leather Calculator"
        action={() => setSelectSection("leatherCalculator")}
      />
      <NavigatorButton
        text="Alloy Calculator"
        action={() => setSelectSection("alloyCalculator")}
      />
      <NavigatorButton
        text="WindMill"
        action={() => setSelectSection("windmill")}
      />
      <NavigatorButton
        text="Translate Mods"
        action={() => setSelectSection("translateMods")}
      />
    </nav>
  );
};

Navigator.propTypes = {
  setSelectSection: PropTypes.func,
};

export default Navigator;
