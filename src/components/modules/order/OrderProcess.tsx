import React from 'react';
import PoloLogo2 from '../shared/PoloLogo2';

const OrderProcess = () => {
    const steps = [
        {
            number: 1,
            title: "Design & Specify",
            paragraphs: [
                "Drop us an email to describe what you want. The more detail and images of other belts/fabrics that you want to match will be a huge help.",
                "We can provide ideas and belt templates to help you design something unique.",
                "Our order form will include a breakdown of what we charge (which varies based on item, features and quantity)."
            ]
        },
        {
            number: 2,
            title: "Approval & Ordering",
            paragraphs: [
                "We will then provide you a design specification for your approval.",
                "When you are happy with the design, complete the order form to then make payment."
            ]
        },
        {
            number: 3,
            title: "Sourcing & Manufacture",
            paragraphs: [
                "Hand made guacho polo belts are of the highest quality and can take time to come together, regardless of quantity. At the time of ordering, we will advise the likely period of time before you will receive your belt.",
                "It can take a number of weeks, so do not hesitate to submit your order to avoid disappointment."
            ]
        }
    ]

    return (
        <section>
            <PoloLogo2 />
            <div className='p-5 sm:p-8 md:p-10'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center my-8 sm:my-12 md:my-16 text-gray-900">
                    THE ORDERING PROCESS
                </h1>

                <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-5">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 text-center">
                                {step.number}. {step.title}
                            </h2>

                            <div className="space-y-4 sm:space-y-6 text-center">
                                {step.paragraphs.map((paragraph, index) => (
                                    <p key={index} className="text-gray-600 text-sm sm:text-base">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default OrderProcess;