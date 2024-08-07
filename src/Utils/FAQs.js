import React from "react";

const FAQs = () => {
  const restaurantFAQ = [
    {
      question: "What are your restaurant hours?",
      answer:
        "Our restaurant is open from 11:00 AM to 10:00 PM, Monday through Sunday. For specific holiday hours, please check our website or call us directly.",
      headerId: "headingOne",
      buttonTarget: "collapseOne",
    },
    {
      question: "Do I need a reservation?",
      answer:
        "Reservations are not required but are highly recommended, especially during peak hours and weekends. You can make a reservation online through our website or by calling us at [phone number].",
      headerId: "headingTwo",
      buttonTarget: "collapseTwo",
    },
    {
      question: "Do you offer takeout or delivery services?",
      answer:
        "Yes, we offer both takeout and delivery services. You can place an order online or by calling us. Delivery is available through our website as well as third-party delivery apps.",
      headerId: "headingThree",
      buttonTarget: "collapseThree",
    },
    {
      question: "Do you have a vegetarian or vegan menu?",
      answer:
        "Absolutely! We offer a variety of vegetarian and vegan options. You can view our full menu online, where these options are clearly marked. If you have any specific dietary needs, please let us know.",
      headerId: "headingFour",
      buttonTarget: "collapseFour",
    },
    {
      question: "Are there gluten-free options available?",
      answer:
        "Yes, we offer gluten-free options for many dishes. Our menu indicates which items are gluten-free, and our staff is happy to assist with any questions or dietary concerns.",
      headerId: "headingFive",
      buttonTarget: "collapseFive",
    },
    {
      question: "Can I host a private event at your restaurant?",
      answer:
        "Yes, we offer private event hosting for parties and special occasions. Please contact us at [phone number] or [email address] to discuss your event details and availability.",
      headerId: "headingSix",
      buttonTarget: "collapseSix",
    },
    {
      question: "Do you offer catering services?",
      answer:
        "Yes, we provide catering services for a variety of events. You can review our catering menu online or contact us directly to customize your order and discuss your event requirements.",
      headerId: "headingSeven",
      buttonTarget: "collapseSeven",
    },
    {
      question: "What is your policy on allergies and food sensitivities?",
      answer:
        "We take food allergies and sensitivities very seriously. Please inform our staff of any allergies or dietary restrictions when placing your order, and we will do our best to accommodate your needs.",
      headerId: "headingEight",
      buttonTarget: "collapseEight",
    },
    {
      question: "Do you have a kids’ menu?",
      answer:
        "Yes, we have a kids’ menu with a range of options that are both delicious and nutritious. You can view our kids’ menu online or ask your server for more details when you arrive.",
      headerId: "headingNine",
      buttonTarget: "collapseNine",
    },
    {
      question: "What forms of payment do you accept?",
      answer:
        "We accept various forms of payment, including cash, credit cards, and debit cards. We also accept digital payment methods such as Apple Pay and Google Pay.",
      headerId: "headingTen",
      buttonTarget: "collapseTen",
    },
  ];

  return (
    <div data-aos="zoom-in">
      <h4>Frequently Asked Questions</h4>
      <div className="accordion" id="accordionExample">
        {restaurantFAQ.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={item.headerId}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.buttonTarget}`}
                aria-expanded="false"
                aria-controls={item.buttonTarget}
              >
                {index + 1}. {item.question}
              </button>
            </h2>
            <div
              id={item.buttonTarget}
              className="accordion-collapse collapse"
              aria-labelledby={item.headerId}
              data-bs-parent="#accordionExample"
            >
              <p className="accordion-body">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
