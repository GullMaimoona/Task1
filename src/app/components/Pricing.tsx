import { Check } from "lucide-react";
import React from "react";

const tempData = [
  {
    title: "Free",
    description: "For developers and early exploration.",
    priceInt: "0",
    priceDec: "",
    buttonText: "Try it free",
    buttonDark: true,
    salesButton: "",
    detailsMsg: "Free plan features",
    keyPoints: ["Lowest Server Priority", "10 Agents", "Visual Editor", ""],
  },
  {
    title: "Starter",
    description: "For individuals with basic production agents.",
    priceInt: "19",
    priceDec: "99",
    buttonText: "Sign up",
    buttonDark: false,
    salesButton: "",
    detailsMsg: "Everything in free, plus",
    keyPoints: [
      "Upgraded Task Servers",
      "Unlimited Agents",
      "Production Agents",
      "",
    ],
  },
  {
    title: "Professional",
    description: "For individuals & teams turning workflows into agents.",
    priceInt: "169",
    priceDec: "",
    buttonText: "Sing up",
    buttonDark: false,
    salesButton: "Contact Sales",
    detailsMsg: "Everything in starter, plus",
    keyPoints: [
      "Unlimited Users",
      "Shared Workspace",
      "Shared Key Vault",
      "Premier Support",
    ],
  },
  {
    title: "Company",
    description: "For companies scaling agents across teams.",
    priceInt: "169",
    priceDec: "",
    buttonText: "Contact Sales",
    buttonDark: true,
    salesButton: "",
    detailsMsg: "Everything in pro, plus",
    keyPoints: [
      "Enterprise Grade SLA",
      "SAML single-sign on",
      "Custom Data Retention",
      "Enterprise Support",
    ],
  },
];

export const Pricing = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-[40px] bg-[#F6F6F8] pb-[121px] pt-[48px]">
      {tempData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-stretch gap-[12px] rounded-[36px] border-[1px] border-[#757575] bg-[#FFFFFF] px-[32px] py-[36px]"
        >
          <p className="text-[40px] font-bold leading-[150%] tracking-[0%] text-[#403F3E]">
            {item.title}
          </p>
          <p className="inline-flex h-[93px] max-w-[281px] text-wrap text-[24px] font-light leading-[120%] tracking-[0%] text-[#403F3E]">
            {item.description}
          </p>
          <div className="flex flex-col gap-[6px] pb-[22px] pt-[36px] text-[#403F3E]">
            <p className="text-[20px] font-light leading-[120%] tracking-[0%] ">
              Starting from
            </p>
            <div className="inline-flex items-start justify-start gap-[7px]">
              <p className="text-[24px] font-semibold leading-[120%] tracking-[0%]">
                $
              </p>
              <div className="inline-flex items-center justify-start gap-[7px]">
                <p className="text-[48px] font-semibold leading-[120%] tracking-[0%]">
                  {item.priceInt}
                </p>
                {item.priceDec && (
                  <sup className="text-[24px] font-semibold leading-[120%] tracking-[0%]">
                    .{item.priceInt}
                  </sup>
                )}
                <p className="text-end text-[20px] font-medium leading-[120%] tracking-[0%]">
                  USD/mo
                </p>
              </div>
            </div>
            <p className="text-[24px] font-normal leading-[120%] tracking-[0%] ">
              Billed annually
            </p>
          </div>
          <button
            className={`inline-flex w-full items-center justify-center rounded-full ${item.buttonDark ? "bg-[#565656]" : "bg-[#4DC987]"} py-[23px] text-[28px] font-semibold leading-[120%] tracking-[0%] text-[#FFFFFF]`}
          >
            {item.buttonText}
          </button>
          <p className="flex h-[26px] items-center justify-center text-[20px] font-normal leading-[150%] tracking-[0%] text-[#56BAE8] underline">
            {item.salesButton}
          </p>
          <div className="flex flex-col gap-[16px] py-[32px]">
            <p className="ml-[7px] text-[20px] font-bold leading-[120%] tracking-[0%] text-[#403F3E]">
              {item.detailsMsg}:
            </p>
            <ul className="flex flex-col gap-[10px]">
              {item.keyPoints.map((point, index) => (
                <li key={index} className="inline-flex items-center">
                  {point && <Check color="#4DC987" size={25} strokeWidth={3} />}
                  <p className="ml-[7px] text-[20px] font-normal leading-[120%] tracking-[0%] text-[#403F3E]">
                    {point ? <span>{point}</span> : <span>&nbsp;</span> }
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
