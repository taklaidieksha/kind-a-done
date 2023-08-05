export function Card ({ persona }) {
    return(
        <div className="h-[260px] w-[130px] p-2 bg-yellow-500 border-2 rounded-md border-orange-500">
          <img className="w-[125px] h-[150px]" src={persona.image} alt="asd" />
          <h2>{persona.name}</h2>
          <div className="flex justify-center items-center text-xs flex-col">
             <p>{persona.goal1}</p>
             <p>{persona.goal2}</p>
             <p>{persona.goal3}</p>
            </div>
        </div>
);
}