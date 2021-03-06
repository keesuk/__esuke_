import ReactCursorPosition from "react-cursor-position";

const Cursor = props => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: { width = 0, height = 0 } = {},
    isActive = false,
    isPositionOutside = false,
    position: { x = 0, y = 0 } = {}
  } = props;
  return (
      <div
        style={{
          position: "absolute",
          left: x - 50,
          top: y - 50,
          width: 100,
          height: 100,
          background: "hotpink"
        }}
      />
    </div>
  );
};

export default Cursor