import React from 'react';
import image8 from '../Assets/faq.jpg'
import Navbar from './Navbar'; 
import Banner from './Banner'; 
import Footer from './Footer'; 
import Airbus from '../Assets/Airbus.jpg'; 

function Faq() {
  return (
    <>
      <Navbar />
      <Banner title="FAQs" background={Airbus} />
      
      <div className="container-fluid bg-secondary p-4">
        <div className="row align-items-center">
          <div className="col-sm-12 col-lg-6">
            <div className="accordion" id="accordionExample">
              {[
                {question: "Q1: What services do you offer?", answer: "A1: We specialize in the sale and acquisition of private jets. Our services include aircraft listing, marketing, brokerage, financing assistance, and post-sale support."},
                {question: "Q2: Why should I buy a private jet?", answer: "A2: Owning a private jet offers unparalleled convenience, privacy, and flexibility in travel. It eliminates the hassles of commercial flights, allowing for direct routes and personalized schedules."},
                {question: "Q3: How do I start the process of buying a private jet?", answer: "A3: Contact our sales team to discuss your needs and preferences. We will guide you through the selection process, including aircraft types, financing options, and any custom requirements you might have."},
                {question: "Q4: What types of private jets are available?", answer: "A4: We offer a range of jets including light jets, midsize jets, heavy jets, and ultra-long-range jets. Each category has different capabilities, passenger capacities, and range."},
                {question: "Q5: How much does a private jet cost?", answer: "A5: Prices vary based on the model, age, condition, and custom features of the jet. Generally, costs can range from a few million dollars for a light jet to over $50 million for larger, long-range jets."},
                {question: "Q6: Can I finance a private jet purchase?", answer: "A6: Yes, we offer various financing options through our network of financial partners. Our team will assist you in finding the best financing solution tailored to your financial situation."},
                {question: "Q7: What factors should I consider when choosing a private jet?", answer: "A7: Consider your typical travel distance, passenger capacity needs, budget, and preferred amenities. Our experts will help you analyze these factors to select the right aircraft."},
                {question: "Q8: How do I sell my private jet?", answer: "A8: Start by contacting us for a valuation. We will list your aircraft, handle marketing, and connect you with potential buyers. Our team manages the entire sales process, ensuring a smooth transaction."},
                {question: "Q9: What is involved in the valuation process?", answer: "A9: Our valuation process includes a thorough inspection of the aircraft, an analysis of market trends, and a review of similar sales. This ensures that your jet is competitively priced."},
                {question: "Q10: How long does it typically take to sell a private jet?", answer: "A10: The timeframe can vary based on market conditions, the type of jet, and its condition. On average, it may take a few months to complete a sale."},
                {question: "Q11: Do you offer aircraft management services?", answer: "A11: Yes, we provide comprehensive aircraft management services, including crew management, maintenance, scheduling, and compliance with regulatory requirements."},
                {question: "Q12: How often does a private jet need maintenance?", answer: "A12: Maintenance schedules vary by aircraft model and usage. Generally, jets require regular inspections and servicing every few months or after a certain number of flight hours."},
                {question: "Q13: Can you assist with refurbishing or customizing a jet?", answer: "A13: Absolutely. We offer refurbishment and customization services to meet your specific preferences, including interior redesigns, new avionics, and exterior paint."},
                {question: "Q14: What regulations must I comply with when owning a private jet?", answer: "A14: Private jet ownership is subject to various regulations, including those from aviation authorities like the FAA (Federal Aviation Administration) or EASA (European Union Aviation Safety Agency). We help ensure compliance with all relevant regulations."},
                {question: "Q15: Are there tax implications when buying or selling a private jet?", answer: "A15: Yes, there can be significant tax implications. We recommend consulting with a tax professional to understand the specific tax benefits and obligations related to your transaction."},
                {question: "Q16: Do you offer pilot and crew training services?", answer: "A16: Yes, we can arrange for pilot and crew training through our network of certified training providers, ensuring your team is well-prepared and qualified."},
                {question: "Q17: What support do you offer after the sale?", answer: "A17: Our post-sale support includes assistance with registration, ongoing maintenance, and management services to ensure your jet remains in top condition."},
                {question: "Q18: How can I contact your team for more information?", answer: "A18: You can reach us via phone, email, or through our website’s contact form. Our dedicated team is available to answer any further questions and provide personalized assistance."},
              ].map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button className={`accordion-button ${index === 0 ? '' : 'collapsed'} text-white bg-dark`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={`collapse${index}`}>
                      {faq.question}
                    </button>
                  </h2>
                  <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''} text-white bg-dark`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 faq-image"  style={{ 
            backgroundImage: `url(${image8})`, // Correctly reference the background image
            backgroundSize: 'cover', 
            
            height: '1024px' // Adjust the height for smaller screens
          }}>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
