// pages/about.js
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our company. We provide excellent services to meet your needs.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default About;
