import { kckTestimonials } from '../../lib/testimonials';
import Testimonial from './Testimonial';
import './Testimonials.css';

function Testimonials() {
  return (
    <div className="testimonials">
      {kckTestimonials.map(testimonial => <Testimonial key={testimonial.client} data={testimonial}/> )}
    </div>
  );
}

export default Testimonials;