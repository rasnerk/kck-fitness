import './info.css';

function Info() {
  return (
      <div className="info">
          <h1 className='stripe heading'>Fitness is not meant to be difficult...</h1>
          <h1 className='stripe heading'>So let's make it easy together!</h1>
          <h2 className='stripe heading'>Why KCK Fitness?</h2>
          <div className='stripe-green'>
            <p>
              With thousands of different personal trainers, and fitness programs choosing can be stressful!
              At KCK Fitness we understand this, and seek to guide you through a lifestyle change without forcing you
              to starve yourself or eat foods that you don't like! After all, the vast majority of fitness programs
              are no different from what we offer you. However, what we do offer is a step-by-step set plan to help you
              change your life forever. We do not want you to have to come back to us, or any other fitness professional
              ever again! That is why what we offer is not only, accountability, commitment to you and your goals, but 
              an educational experience on health and fitness. 
            </p>
          </div>
          <h2 className='stripe heading'>How do I know that KCK Fitness is right for me?</h2>
          <div className='stripe-green'>
            <p>
              We only take on a limited number of clients so we can give 100% commitment to each and everyones unique goals.
              In most cases we don't know that we are the right fit for you, until discussing your goals, and reasoning for
              wanting to make a lifestyle change! Check out the <a href='#'>Testimonials</a> section to see how we have helped
              change lives, and see what our clients are saying about us! 
            </p>
          </div>
          <h2 className='stripe heading'>Meet the coaches!</h2>
      </div>
  );
}

export default Info;