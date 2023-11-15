import React, { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "../user/userSlice";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
        className="input mb-8 w-72 py-3"
      />
      {username !== "" && <Button type="primary">Start Ordering</Button>}
    </form>
  );
}
