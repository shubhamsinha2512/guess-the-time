import { useEffect, useRef, useState } from "react";

export default function Player() {
  const nameRef = useRef();
  const [name, setName] = useState(null);

  const handleNameChange = () => {
    setName(nameRef.current.value);
    nameRef.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input ref={nameRef} type="text" />
        <button onClick={handleNameChange}>Set Name</button>
      </p>
    </section>
  );
}
