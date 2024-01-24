import NavigatorButton from "../NavigatorButton/NavigatorButton";
import "./navigator.css";

const Navigator = () => {
  return (
    <nav>
      <NavigatorButton text="Leather Calculator" />
      <NavigatorButton text="Alloy Calculator" />
      <NavigatorButton text="WindMill" />
      <NavigatorButton text="Translate Mods" />
    </nav>
  );
};

export default Navigator;
