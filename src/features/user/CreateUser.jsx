import React, { useState } from "react";
import Button from "../../ui/Button";

export default function CreateUser() {
  const [username, setUsername] = useState("");

  return (
    <form className="flex flex-col items-center">
      <p
        className="mb-3 text-sm md:text-base
       text-stone-600"
      >
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />
      {username && (
        <Button to="menu" type="primary">
          Start Ordering
        </Button>
      )}
    </form>
  );
}
