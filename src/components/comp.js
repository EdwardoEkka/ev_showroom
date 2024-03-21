import React from 'react';
import './PricingPlan.css'; 

const PriceCard = ({ plan, price, features }) => (
  <div className={`price-card ${plan.toLowerCase()}`}>
    <h3>{plan}</h3>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <p className="price">{price}/Mo</p>
    <button className="choose-plan">Choose Plan</button>
  </div>
);

const PricingPlan = () => (
  <section className="pricing-plan">
    <h2>Pricing Plan</h2>
    <div className="toggle-buttons">
      <button>Annual</button>
      <button>Monthly</button>
    </div>
    <div className="price-cards">
      <PriceCard
        plan="Basic"
        price="9.95"
        features={['10 projects', '5 GB of storage', 'Basic support']}
      />
      <PriceCard
        plan="Pro"
        price="19.99"
        features={['50 projects', '50 GB of storage', 'Priority support']}
      />
      <PriceCard
        plan="Ultimate"
        price="29.99"
        features={['Unlimited projects', '150 GB of storage', 'Dedicated support']}
      />
    </div>
  </section>
);

export default PricingPlan;