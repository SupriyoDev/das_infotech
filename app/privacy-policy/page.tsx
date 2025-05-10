import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const datas = [
  {
    title: "Commitment to our Privacy",
    value: `We are committed to protecting your privacy. We will only use the
            information that we collect about you lawfully and transparently.
            This Privacy Policy outlines how we handle your personal information
            and data.`,
  },
  {
    title: "Marketing Communication",
    value: `The types of personal information we may collect include:

Your name
Address
Phone number
Email address`,
  },
  {
    title: "Accuracy and Access to Your Information",
    value: `We are committed to ensuring that the information we hold about you is accurate and up-to-date. You have the right to check the information we hold about you at any time by emailing us. If you find any inaccuracies, we will correct or delete them promptly.`,
  },
  {
    title: "Security of Your Information",
    value: `We take the security of your personal information seriously. The personal information we hold will be stored securely in accordance with our internal security policies and applicable laws.


`,
  },
  {
    title: "Use of Cookies and Tracking Technology",
    value: `We may use technology to track the patterns of behavior of visitors to our site. This may include the use of "cookies," which are stored on your browser. You can usually modify your browser settings to prevent this from happening. The information collected in this way can be used to identify you unless you modify your browser settings to reject cookies.
`,
  },
  {
    title: "Contact Us",
    value: `If you have any questions or comments about our privacy practices, please contact us at:
Email: info@dit.in
Phone: +91 9434340767`,
  },
  {
    title: "Changes to Our Privacy Policy",
    value: `We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
    Thank you for trusting DAS INFOTECH Pvt. Ltd. with your personal information. Your privacy is important to us, and we are committed to protecting it.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className=" container p-4 mt-10">
      <div className=" flex flex-col items-center">
        <p className=" text-4xl font-extrabold text-slate-700">
          PRIVACY POLICY
        </p>
        <div className=" w-[6%] h-[5px] bg-red-400 mt-3"></div>
      </div>

      <Accordion type="single" collapsible className="w-full ">
        {datas.map((data, i) => (
          <AccordionItem value={"item" + i + 1} key={i}>
            <AccordionTrigger className="text-2xl hover:no-underline">
              {data.title}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              {data.value}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PrivacyPolicy;
