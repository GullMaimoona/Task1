import React from "react";

export const PricingFeatures = () => {
  return (
    <div className="items-center justify-center bg-[#101010] px-[10.3px] py-[88.5px]">
      <div className="flex items-center justify-center gap-[57px] bg-[#101010] px-[66.5px]">
        <p className="flex items-center justify-center text-center text-[72px] font-bold leading-[120%] tracking-[0%] text-[#FFFFFF]">
          Flexible, Fair and Risk-Free Pricing.
        </p>
       </div>
       <div className="flex gap-8 ml-60 mt-14">
      <div className="rounded-2xl bg-green-300 p-8 max-w-[430px] h-96">
    <h1 className="text-black font-inter text-4xl font-bold leading-tight mb-4">
        Flexible
    </h1>
    <p className="text-black text-2xl font-semibold leading-normal">
        If you run out of tasks in any plan, you can switch to a pay-as-you-go until you’re ready for the next plan.
    </p>
</div> 
<div className="rounded-2xl bg-blue-200 p-8 h-96 max-w-[430px]">
    <h1 className="text-black text-4xl font-bold leading-tight mb-4">
        Fair
    </h1>
    <p className="text-black text-2xl font-semibold leading-normal">
    The more tasks agents complete, the less you pay per task. We do not overcharge you for API or AI model usage, bring your own API keys.
    </p>
</div> 
<div className="rounded-2xl bg-yellow-100 p-8 max-w-[430px] h-96">
    <h1 className="text-black font-inter text-4xl font-bold leading-tight mb-4">
        Risk-Free
    </h1>
    <p className="text-black text-2xl font-semibold leading-normal">
    Try SmythOS risk-free before signing up, or talk to our Sales team for tailored plans.
    </p>
</div> 
</div>


    </div>
  );
};
