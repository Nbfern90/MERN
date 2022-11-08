import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const People = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}/?format=json`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        setData({ error: "These are not the droids you are looking for" });
      });
  }, [id]);

  return (
    <div>
      <h1>Person: {data.name}</h1>
      <br />
      <p>Mass: {data.mass}</p>
      <p>Height: {data.height}</p>
      <p>Skin Color: {data.skin_color}</p>
      <p>Hair Color: {data.hair_color}</p>
    </div>
  );
};

export default People;
