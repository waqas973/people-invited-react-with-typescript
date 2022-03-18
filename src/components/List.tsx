import React from "react";
import { People } from "../App";

interface Props {
  people: People[];
}

const List: React.FC<Props> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li className="List">
        <div className="List-header">
          <img className="List-img" src={person.url} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note}</p>
      </li>
    ));
  };
  return <ul>{renderList()}</ul>;
};

export default List;
