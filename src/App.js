import { useState } from "react";
import "./App.css";

const fakeDb = {
  Cricket: [
    { name: "Dhoni", country: "India" },
    { name: "Rohit Sharma", country: "India" },
    { name: "Virat Kohli", country: "India" },
    { name: "Suresh Raina", country: "India" },
    { name: "Bhuvneshwar Kumar", country: "India" }
  ],

  Badminton: [
    {
      name: "Saina Nehwal",
      country: "India"
    },
    {
      name: "P.V Sindhu",
      country: "India"
    },
    {
      name: "Saina Nehwal",
      country: "India"
    },
    {
      name: "Jwala Gutta",
      country: "India"
    },
    {
      name: "Pullela Gopichand",
      country: "India"
    }
  ],
  TableTennis: [
    {
      name: "Manav Thakkar",
      country: "India"
    },
    {
      name: "Sathiyan Gnanasekaran",
      country: "India"
    },
    {
      name: "Mouma Das",
      country: "India"
    },
    {
      name: "Achanta Sharath Kamal.",
      country: "India"
    }
  ],
  Football: [
    {
      name: "Climax Lawrence",
      country: "India"
    },
    {
      name: "Shabbir Ali",
      country: "India"
    },
    {
      name: "Bhaichung Bhutia",
      country: "India"
    },
    {
      name: "Sunil Chhetri",
      country: "India"
    }
  ]
};

export default function App() {
  const [category, setCategory] = useState("Cricket");

  function switchCategory(category) {
    console.log(category);
    setCategory(category);
  }

  console.log();

  return (
    <div className="App">
      <h1>Sports Category 🏅</h1>
      <p>Checkout my favorite players. Select a sports to get started</p>

      {Object.keys(fakeDb).map((data) => {
        return <button onClick={() => switchCategory(data)}>{data}</button>;
      })}

      <div>
        <ul>
          {fakeDb[category].map((players) => (
            <li className="liCard">
              <div>{players.name}</div>
              <hr />
              <div>{players.country}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
