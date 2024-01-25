import React from "react";

const pricingFeaturesData = [
  {
    title: "Flexible",
    color: "bg-green-300",
    content:
      "If you run out of tasks in any plan, you can switch to a pay-as-you-go until you’re ready for the next plan.",
  },
  {
    title: "Fair",
    color: "bg-blue-200",
    content:
      "The more tasks agents complete, the less you pay per task. We do not overcharge you for API or AI model usage, bring your own API keys.",
  },
  {
    title: "Risk-Free",
    color: "bg-yellow-100",
    content: "Try SmythOS risk-free before signing up, or talk to our Sales team for tailored plans.",
  },
];

export const PricingFeatures = () => {
  return (
    <div className="items-center justify-center bg-[#101010] px-[10.3px] py-[88.5px]">
      <div className="flex items-center justify-center gap-[57px] bg-[#101010] px-[66.5px]">
        <p className="flex items-center justify-center text-center text-[72px] font-bold leading-[120%] tracking-[0%] text-[#FFFFFF]">
          Flexible, Fair and Risk-Free Pricing.
        </p>
      </div>
      <div className="flex gap-8 ml-60 mt-14">
        {pricingFeaturesData.map((feature, index) => (
          <div
            key={index}
            className={`rounded-2xl ${feature.color} p-8 max-w-[430px] h-96`}
          >
            <h1 className="text-black font-inter text-4xl font-bold leading-tight mb-4">
              {feature.title}
            </h1>
            <p className="text-black text-2xl font-semibold leading-normal">
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
