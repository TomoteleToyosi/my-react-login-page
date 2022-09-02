import React from "react";
// import Header from "./component/Header/Header";
// import Footer from "./component/Footer/Footer";
// import Note from "./component/Note/Note";
// import Card from "./component/card/Card";
// import beyonce from "./component/assets/beyonce.jpg";
// import jayz from "./component/assets/jayz.jpg";
// import Emoji from "./component/emoji/Emoji";
// import notes from "./notes";
import Login from "./component/Form/Login";

// import { emojipedia } from "./emojipedia";

// const newNumber = emojipedia.map(function (emojiEntry) {
//   return emojiEntry.meaning.substring(0, 100);
// });

// console.log(newNumber);

// console.log(emojipedia);

// var number = [2, 4, 5, 6, 8];

// const newNums = number.map((x) => x * 2);
// console.log(newNums);

// var isloggedin = true;

// function renderConditionally() {
//   return isloggedin === true ? <h1 className="red">Hello</h1> : <Login />;
// }

// const currentTime = new Date(2022, 6, 6, 6).getHours();

// console.log(currentTime);

var userIsRegistered = false;

const App = () => {
  return (
    <div>
      <div className="container">
        <Login IsRegistered={userIsRegistered} />
      </div>

      {/* <Header />
      {notes.map((noteItem) => (
        <Note
          title={noteItem.title}
          key={noteItem.key}
          content={noteItem.content}
        />
      ))}

      <Card
        name="toyosi"
        placeholder="eric is a boy"
        phone="+234-56566768"
        email="tomotee@gmail.com"
        img={beyonce}
      />
      <Card
        name="tosin"
        placeholder="eric is a boy"
        phone="+234-56566767"
        email="tomotee@gmail.com"
        img={jayz}
      />
      <h1 className="header">
        <span>emojipedia</span>
      </h1>
      <Emoji
        emoji="💪"
        name="Tense Biceps"
        description="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />
      <Emoji />
      <Emoji />
      <Footer /> */}
    </div>
  );
};

export default App;
