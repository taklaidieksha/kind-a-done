import React, { useState } from "react";
import "./index.css";
import { peopleData } from "./hardcoded";
import Leaderboard from "./components/Leaderboard";
import TopThree from "./components/TopThree";

function App() {
  const [newPerson, setNewPerson] = useState({
    name: "",
    goal1: "",
    goal2: "",
    goal3: "",
    likes: 0,
    image:
      "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg",
  });

  const [people, setPeople] = useState(peopleData);
  const [newPersonAdded, setNewPersonAdded] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPersonWithId = { ...newPerson, id: people.length + 1 };
    setPeople((prevPeople) => [...prevPeople, newPersonWithId]);
    setNewPersonAdded(true);
  };

  return (
    <div className="bg-purple-900 min-h-screen">
         <div className="h-40 w-screen relative">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/media/img/goalit.png"
        />
      </div>
      <div className="flex justify-center items-center p-4">
        <form
          onSubmit={handleSubmit}
          className="h-[290px] w-[200px] bg-yellow-400 p-2 flex flex-col gap-2 justify-center items-center border-4 rounded-md border-orange-900 relative z-0"
        >
          <label htmlFor="new">Goals for today:</label>
          <label htmlFor="name">Name</label>
          <input
            className="z-20"
            type="text"
            name="name"
            value={newPerson.name}
            onChange={handleInputChange}
          />
          <label htmlFor="goal1">Goals</label>
          <input
            className="z-20"
            type="text"
            name="goal1"
            value={newPerson.goal1}
            onChange={handleInputChange}
          />
          <input
            className="z-20"
            type="text"
            name="goal2"
            value={newPerson.goal2}
            onChange={handleInputChange}
          />
          <input
            className="z-20"
            type="text"
            name="goal3"
            value={newPerson.goal3}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-transparent z-20 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Button
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-screen h-[350px] p-4 flex justify-center items-center ">
          <Leaderboard people={people} />
          {newPersonAdded && (
            <div
              key={people.length + 1}
              className="h-[290px] w-[130px] p-2 bg-yellow-500 border-2 rounded-md border-orange-500 m-2"
            >
              <img
                className="w-[125px] h-[150px]"
                src={newPerson.image}
                alt={newPerson.name}
              />
              <h2>{newPerson.name}</h2>
              <div className="flex justify-center items-center text-xs flex-col">
                <p>{newPerson.goal1}</p>
                <p>{newPerson.goal2}</p>
                <p>{newPerson.goal3}</p>
              </div>
              <div>
                <p className="">Likes: 0</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
