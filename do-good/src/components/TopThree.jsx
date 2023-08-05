// import React from 'react';
// import { peopleData } from "../hardcoded";

// const TopThree = ({ topThreeData }) => {
//   return (
//     <div>
//       {topThreeData.map(person => {
//         const fullPerson = peopleData.find(item => item.id === person.id);
//         const { id, name, goal1, goal2, goal3, likes, image } = fullPerson;

//         return (
//           <div key={id} className="h-[260px] w-[130px] p-2 bg-green-300 border-2 rounded-md border-green-500 m-2">
//             <img className="w-[125px] h-[150px]" src={image} alt={name} />
//             <h2>{name}</h2>
//             <div className="flex justify-center items-center text-xs flex-col">
//               <p>{goal1}</p>
//               <p>{goal2}</p>
//               <p>{goal3}</p>
//               <div className="flex items-center mt-2">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Like</button>
//                 <p className="ml-2">Likes: {likes}</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default TopThree;
