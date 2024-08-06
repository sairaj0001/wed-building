import "../styles/Services.css"
import Card from "../components/Card";
import Timeline from "../components/Timeline";
import Features from '../components/Feature';

export default function Services() {

  return (
    <div className='services-page'>

      <div className='services-container'>
        <h1>Our Services</h1>
        <div className='subtitle'>
          <p> Earum error id voluptatum! ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
      </div>

      <Card />

      <Features />

      <Timeline />

    </div>
  )
}
