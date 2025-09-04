
import React, { useState } from "react";

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const message = "Hello World!";

  const toggle = () => setShowMessage((prev) => !prev);

  return (
    <div>
      <button onClick={toggle}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && <p>{message}</p>}
    </div>
  );
}

export default ToggleMessage;