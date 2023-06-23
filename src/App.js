// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";

// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         {/* Should contain one Skill component
//         for each web dev skill that you have,
//         customized with props */}
//         <SkillList />
//       </div>
//     </div>
//   );
// }
// function Avatar () {
//   return <img className="avatar" src="mahito.jpg" alt="mahito_jjk" />;
// }

// function Intro() {
//   return
//   <div>
//     <h1>Bernard Simon</h1>
//     <p>Front-End web developer and student at federal university dutsin ma katsina state. When not coding or
//         studing Physics, I like to play football and watch Anime, to cook (and eat a little), or to
//         just enjoy my lone time in my room.</p>
//   </div>
// }

// function SkillList() {
//   return(
//     <div className="skill-list">
//       <Skill skill="React" emoji="💪" color="blue" />
//       <Skill skill="HTML+CSS" emoji="💪" color="orange" />
//       <Skill skill="JavaScript" emoji="💪" color="yellow" />
    
//     </div>
//   )
// }

// function Skill(props) {
//   return(
//     <div className="skill" style={{backgroundColor: props.color}}>
// <span>{props.skill}</span>
// <span>{props.emoji}</span>
//     </div>
//   )
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
