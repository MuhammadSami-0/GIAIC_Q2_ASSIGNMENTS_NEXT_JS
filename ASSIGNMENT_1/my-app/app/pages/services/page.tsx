// pages/services/index.js
import Link from 'next/link';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li>
          <Link href={"http://localhost:3000/pages/services/app_development"}>App Development</Link>
        </li>
        <li>
          <Link href="http://localhost:3000/pages/services/website_development">Website Development</Link>
        </li>
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default Services;
