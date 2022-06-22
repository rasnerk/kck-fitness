import { coachList } from "../../lib/coaches";

const Coaches = () => {
  return (
    <div className="coaches">
      {coachList.map(coach => (
        <div key={coach.name} className='coach'>
          <h2>{coach.name}</h2>
          <img src={coach.img} alt={coach.alt} width={"100%"} height={"100%"}></img>
        </div>        
      ))}
    </div>
  );
}

export default Coaches;