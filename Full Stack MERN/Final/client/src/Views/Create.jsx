import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();

  const [formState, setFormState] = useState({
    name: "",
    image: "",
    chests: 0,
    phrase: "",
    position: "",
    pegleg: true,
    eyepatch: true,
    hook: true,
  });

  const [validState, setValidState] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
      [e.target.checked]: e.target.checked,
    });
    if (e.target.type === "checkbox" && !e.target.checked) {
      setFormState({ ...formState, [e.target.name]: false });
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pirates/new", formState)
      .then((res) => {
        setFormState({
          name: "",
          image: "",
          chests: 0,
          phrase: "",
          position: "",
          pegleg: true,
          eyepatch: true,
          hook: true,
        });
        history.push("/pirates");
      })
      .catch((err) => {
        //Handiling Validation
        console.error(err.response);
        const { errors } = err.response.data;
        let errorOBJ = {};
        for (let [key, value] of Object.entries(errors)) {
          errorOBJ[key] = value.message;
        }
        console.log(errorOBJ);
        setValidState(errorOBJ);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>
          Pirate Name:{" "}
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={formState.name}
          />
          {validState.name ? (
            <p style={{ color: "red" }}>{validState.name}</p>
          ) : null}
        </p>
        <p>
          Image URL:{" "}
          <input
            type="text"
            name="image"
            onChange={changeHandler}
            value={formState.image}
          />
          {validState.image ? (
            <p style={{ color: "red" }}>{validState.image}</p>
          ) : null}
        </p>
        <p>
          # of Treasure Chests:{" "}
          <input
            type="number"
            name="chests"
            onChange={changeHandler}
            value={formState.chests}
          />
          {validState.chests ? (
            <p style={{ color: "red" }}>{validState.chests}</p>
          ) : null}
        </p>
        <p>
          Pirate Catch Phrase:{" "}
          <input
            type="text"
            name="phrase"
            onChange={changeHandler}
            value={formState.phrase}
          />
          {validState.phrase ? (
            <p style={{ color: "red" }}>{validState.phrase}</p>
          ) : null}
        </p>
        <p>
          Crew Position:
          <select
            name="position"
            onChange={changeHandler}
            value={formState.position}
          >
            {validState.position ? (
              <p style={{ color: "red" }}>{validState.position}</p>
            ) : null}
            <option value="Captain">Captian</option>
            <option value="First Mate">First mate</option>
            <option value="Quarter Master">Quarter Master</option>
            <option value="Boatswain">Boatswain</option>
            <option value="Powder Monkey">Powder Monkey</option>
          </select>
        </p>
        <p>
          <input
            type="checkbox"
            name="pegleg"
            onChange={changeHandler}
            checked={formState.pegleg}
          />{" "}
          Peg Leg
          {validState.pegleg ? (
            <p style={{ color: "red" }}>{validState.pegleg}</p>
          ) : null}
        </p>
        <p>
          <input
            type="checkbox"
            name="eyepatch"
            onChange={changeHandler}
            checked={formState.eyepatch}
          />{" "}
          Eye Patch
          {validState.eyepatch ? (
            <p style={{ color: "red" }}>{validState.eyepatch}</p>
          ) : null}
        </p>
        <p>
          <input
            type="checkbox"
            name="hook"
            onChange={changeHandler}
            checked={formState.hook}
          />{" "}
          Hook Hand
          {validState.hook ? (
            <p style={{ color: "red" }}>{validState.hook}</p>
          ) : null}
        </p>
        <button type="submit">Add Pirate</button>
      </form>
    </div>
  );
};

export default Create;
