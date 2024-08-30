import { useState } from "react";
function Chat({ contact }) {
  const [text, setText] = useState("");
  return (
    <>
      <section>
        <textarea
          value={text}
          placeholder={"Chat to "}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <button>Send to {contact.email}</button>
      </section>
    </>
  );
}

export default Chat;
