import './coaches.css';

function Coaches() {
  return (
    <div className="coaches">
        <div className='coach'>
            <h2>Keifer</h2>
            <img src='keifer.jpg' alt='Keifer at the Gym' width={"100%"} height={"100%"}></img>
        </div>
        <div className='coach'>
            <h2>Cody</h2>
            <img src='cody.jpg' alt='Cody at the Gym' width={"100%"} height={"100%"}></img>
        </div>
        <div className='coach'>
            <h2>Kane</h2>
            <img src='kane.png' alt='Kane at the Gym' width={"100%"} height={"100%"}></img>
        </div>
    </div>
  );
}

export default Coaches;