import React, { forwardRef, useRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function (
  { targetTime, timeRemaing, handleReset },
  ref
) {
  const dailogRef = useRef();
  const userLost = timeRemaing <= 0;
  const formattedTime = (timeRemaing / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaing / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dailogRef.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dailogRef} className="result-modal">
      {userLost && <h2>You Lost!!</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You stopped the timer with <strong>{formattedTime} seconds left</strong>
      </p>
      <form method="dialog">
        <button onClick={handleReset}>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
