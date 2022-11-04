import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.scss";

export default function Search({ setParam }) {
  const [name, setName] = useState("");
  const changeHandler = (e) => {
    e.preventDefault();

    setParam(name);
  };
  return (
    <div className="form">
      <form onSubmit={changeHandler}>
        <input
          className="input"
          type="text"
          placeholder="Search your movie"
          onChange={(e) => {
            setParam((prev) => (prev = e.target.value));
          }}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
