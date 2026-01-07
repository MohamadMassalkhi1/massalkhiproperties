import React, { useState } from 'react';
import { Home, Building2, Calculator, Users, Mail, Phone, ChevronDown, ChevronUp, FileText, Shield, CheckCircle, TrendingUp } from 'lucide-react';

const MassalkhiWebsite = () => {
  const [activePage, setActivePage] = useState('home');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeTab, setActiveTab] = useState('down20');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestType: 'buying',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const projects = [
    {
      id: 1,
      name: "Oakridge Townhomes",
      location: "Mississauga, ON",
      type: "Townhomes",
      units: "12 Units",
      bedrooms: "3-4 Bedrooms",
      status: "Planning Phase",
      expectedCompletion: "Q4 2026",
      priceRange: "$650,000 - $750,000",
      description: "Modern 3-4 bedroom townhomes designed for families seeking ethical home ownership in a well-established community",
      features: ["Attached garage", "Modern finishes", "Open concept layout", "Energy efficient"]
    },
    {
      id: 2,
      name: "Riverside Residences",
      location: "Ottawa, ON",
      type: "Multi-Unit Building",
      units: "24 Units",
      bedrooms: "2-3 Bedrooms",
      status: "Coming Soon",
      expectedCompletion: "Q2 2027",
      priceRange: "$450,000 - $600,000",
      description: "Contemporary residential building with 2 and 3-bedroom units near public transit and amenities",
      features: ["Rooftop terrace", "Underground parking", "Fitness center", "Storage lockers"]
    },
    {
      id: 3,
      name: "Maple Grove Homes",
      location: "Toronto, ON",
      type: "Detached Homes",
      units: "8 Units",
      bedrooms: "4-5 Bedrooms",
      status: "Pre-Development",
      expectedCompletion: "Q1 2028",
      priceRange: "$850,000 - $1,100,000",
      description: "Premium single-family homes in an established Toronto neighborhood with excellent schools",
      features: ["Large lots", "Premium finishes", "Double garage", "Basement included"]
    }
  ];

  const financingExamples = {
    down20: {
      title: "20% Down Payment",
      downPayment: 20,
      monthlyRate: 1.0,
      term: 80,
      example: {
        price: 300000,
        down: 60000,
        remaining: 240000,
        monthly: 3000
      }
    },
    down25: {
      title: "25% Down Payment",
      downPayment: 25,
      monthlyRate: 1.0,
      term: 80,
      example: {
        price: 300000,
        down: 75000,
        remaining: 225000,
        monthly: 2812.50
      }
    },
    down30: {
      title: "30% Down Payment",
      downPayment: 30,
      monthlyRate: 1.1,
      term: 80,
      example: {
        price: 300000,
        down: 90000,
        remaining: 210000,
        monthly: 2625
      }
    }
  };

  const faqs = [
    {
      q: "How does the interest-free ownership model work?",
      a: "Massalkhi Properties offers alternative ownership structures that do not involve conventional interest-based financing. Typically, this involves an initial down payment followed by fixed monthly payments over an agreed period. The total price is determined upfront with full transparency. Each arrangement is formalized through legal contracts. Specific terms vary by project and are subject to availability and individual circumstances."
    },
    {
      q: "Who is eligible to participate?",
      a: "Our projects are open to Canadian residents and qualified international buyers who meet standard legal and financial requirements for property ownership in Canada. Eligibility criteria vary by project. We conduct standard due diligence as required by Canadian law. We recommend consulting with your legal and financial advisors before making any commitments."
    },
    {
      q: "What is the typical timeline from registration to ownership?",
      a: "Timelines vary significantly based on project status, development phase, and individual circumstances. Pre-development projects may take 18-36 months or longer. We provide realistic timelines during the consultation process and keep registered parties informed throughout the development cycle. All timelines are estimates and subject to change based on regulatory approvals and construction realities."
    },
    {
      q: "Are these ownership structures compliant with Canadian law?",
      a: "Yes. All our ownership structures are designed to comply with Canadian federal and provincial laws. We work with qualified legal professionals to ensure our contracts and processes meet all regulatory requirements. Each transaction is documented through proper legal channels. We encourage all potential buyers to seek independent legal advice."
    },
    {
      q: "How is this different from a conventional mortgage?",
      a: "Conventional mortgages involve borrowing money with interest charges over time. Our model involves direct ownership arrangements without interest-based debt. The property transaction is structured as a purchase agreement with transparent, fixed payment terms. Legal ownership details and protections are outlined in formal contracts. This is not a lending arrangement, Massalkhi Properties develops and sells properties."
    },
    {
      q: "Can I customize my home?",
      a: "Customization options depend on the project and development stage. Early registrants may have more flexibility with finishes and minor layout modifications. Customization requests are subject to feasibility, cost adjustments, and project timelines. We discuss available options during the consultation process."
    },
    {
      q: "What happens if I can no longer continue with payments?",
      a: "All contracts include provisions for various scenarios including payment difficulties. Options may include payment rescheduling, contract transfer, or other solutions as outlined in your specific agreement. Circumstances are handled on a case-by-case basis in accordance with the signed contract and applicable Canadian law. Early communication is essential."
    },
    {
      q: "Do you offer investment opportunities?",
      a: "We occasionally work with qualified investors who share our ethical approach to real estate development. Investment structures vary and are subject to securities regulations. We do not make investment promises or guarantee returns. Interested parties should express interest through our form, and we will provide information about available opportunities when applicable."
    },
    {
      q: "What inspections and warranties are included?",
      a: "All properties are built to meet or exceed Ontario Building Code requirements. New construction includes Tarion warranty protection as required by law. Pre-delivery inspections are conducted, and buyers have the opportunity for final walkthroughs. Specific warranty terms are outlined in purchase agreements."
    },
    {
      q: "Can I sell the property before completing all payments?",
      a: "Transfer provisions vary by contract. Some agreements may allow for early buyout or transfer of ownership rights, subject to approval and adherence to contract terms. Any transfers must comply with the original purchase agreement and may be subject to fees. Consult your contract and legal advisor for specifics."
    }
  ];

  const testimonials = [
    {
      initial: "A",
      text: "The transparency and ethical approach made all the difference. Finally, a path to homeownership that aligns with my values.",
      location: "Toronto, ON"
    },
    {
      initial: "M",
      text: "Professional team, clear communication, and a structure that actually works for families like ours.",
      location: "Mississauga, ON"
    },
    {
      initial: "S",
      text: "After years of searching for alternatives, Massalkhi Properties provided exactly what we needed.",
      location: "Ottawa, ON"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://formspree.io/f/mbdlnlbr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interestType: formData.interestType,
        project: formData.project,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        _subject: `${formData.interestType === 'buying' ? 'Buyer' : formData.interestType === 'investing' ? 'Investor' : 'General'} Inquiry - ${formData.name}`
      }),
    });

    if (response.ok) {
      alert('Thank you! Your interest has been submitted successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interestType: 'buying',
        project: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } else {
      alert('There was an error. Please try again.');
    }
  } catch (error) {
    alert('Error submitting form. Please email us directly at info@massalkhiproperties.com');
  }
};

const handleContactSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://formspree.io/f/mbdlnlbr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.interestType,
        message: formData.message,
        _subject: `Contact Form - ${formData.interestType} - ${formData.name}`
      }),
    });

    if (response.ok) {
      alert('Thank you! Your message has been sent.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interestType: 'buying',
        project: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } else {
      alert('There was an error. Please try again.');
    }
  } catch (error) {
    alert('Error submitting form. Please email us directly at info@massalkhiproperties.com');
  }
};

  const renderHome = () => (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,#f59e0b_12%,transparent_12.5%,transparent_87%,#f59e0b_87.5%,#f59e0b),linear-gradient(150deg,#f59e0b_12%,transparent_12.5%,transparent_87%,#f59e0b_87.5%,#f59e0b),linear-gradient(30deg,#f59e0b_12%,transparent_12.5%,transparent_87%,#f59e0b_87.5%,#f59e0b),linear-gradient(150deg,#f59e0b_12%,transparent_12.5%,transparent_87%,#f59e0b_87.5%,#f59e0b)] bg-[length:80px_140px] bg-[position:0_0,0_0,40px_70px,40px_70px]"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Home Ownership<br />
            <span className="text-yellow-500">Without Interest.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Massalkhi Properties develops residential real estate with transparent, interest-free ownership structures, helping Canadians achieve homeownership through ethical alternative finance models.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => setActivePage('interest')}
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition shadow-lg"
            >
              Express Interest
            </button>
            <button 
              onClick={() => setActivePage('projects')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Massalkhi Properties</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We're committed to making ethical home ownership accessible through transparent, interest-free structures
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interest-Free Structures</h3>
              <p className="text-gray-600">Alternative ownership models that eliminate conventional interest-based debt</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition shadow-lg">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Terms</h3>
              <p className="text-gray-600">Clear pricing and payment structures defined upfront with no hidden costs</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ethical Ownership</h3>
              <p className="text-gray-600">Grounded in fairness, transparency, and long-term relationship building</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Long-Term Focus</h3>
              <p className="text-gray-600">Sustainable development that prioritizes people over profit maximization</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our interest-free ownership model is straightforward and designed with your values in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-yellow-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Down Payment</h3>
              <p className="text-gray-600">Make an initial down payment (typically 20-30%) to secure your property</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Fixed Payments</h3>
              <p className="text-gray-600">Pay fixed monthly amounts with no interest charges or variable rates</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Own Your Home</h3>
              <p className="text-gray-600">Complete payments and receive full legal ownership of your property</p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setActivePage('financing')}
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition inline-flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              View Financing Examples
            </button>
          </div>
        </div>
      </section>

      {/* Project Preview */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Current Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Quality residential developments across Ontario designed for ethical ownership
          </p>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Coming Soon!
          </p>

          {/* <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map(project => (
              <div key={project.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 h-48 flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500">{project.expectedCompletion}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-1 flex items-center gap-2">
                    <span>📍</span> {project.location}
                  </p>
                  <p className="text-gray-600 mb-1">{project.type} • {project.units}</p>
                  <p className="text-gray-600 mb-4">{project.bedrooms}</p>
                  <p className="font-semibold text-yellow-700 mb-4">{project.priceRange}</p>
                  <button 
                    onClick={() => setActivePage('projects')}
                    className="text-yellow-600 font-semibold hover:text-yellow-700 transition"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button 
              onClick={() => setActivePage('projects')}
              className="border-2 border-yellow-600 text-yellow-700 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition"
            >
              View All Projects
            </button>
          </div> */}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Real experiences from families who chose ethical home ownership
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  {testimonial.initial}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Trust Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Built on Trust and Transparency</h2>
          <p className="text-lg text-gray-600 mb-8">
            Massalkhi Properties was founded to address a fundamental challenge: enabling home ownership for individuals who seek alternatives to conventional interest-based financing. We combine professional real estate development with ethical financial principles, creating opportunities that align with our clients' values.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
              <p className="text-gray-700">Interest-Free Structures</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">Legal</div>
              <p className="text-gray-700">Fully Compliant in Canada</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">Clear</div>
              <p className="text-gray-700">Transparent Terms</p>
            </div>
          </div>
          <button 
            onClick={() => setActivePage('about')}
            className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
          >
            Learn More About Us
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-yellow-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-yellow-100">
            Express your interest today and take the first step toward ethical home ownership
          </p>
          <button 
            onClick={() => setActivePage('interest')}
            className="bg-white text-yellow-700 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition shadow-xl"
          >
            Express Interest Now
          </button>
        </div>
      </section>
    </div>
  );


    const renderProjects = () => (
      <div className="px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Coming Soon
          </h1>
          <p className="text-2xl text-gray-600 mb-10">
            Our residential projects are currently in development.
            Stay tuned for upcoming announcements.
          </p>
          <div className="inline-block bg-yellow-100 text-yellow-700 px-6 py-3 rounded-full text-lg font-semibold">
            Interest-Free Home Ownership
          </div>
        </div>
      </div>
    );


  // const renderProjects = () => (
  //   <div className="px-4 py-16">
  //     <div className="max-w-6xl mx-auto">
  //       <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
  //       <p className="text-xl text-gray-600 mb-12">
  //         Explore our current and upcoming residential developments. Each project is designed with quality, sustainability, and ethical ownership in mind.
  //       </p>
        
  //       <div className="space-y-12">
  //         {projects.map(project => (
  //           <div key={project.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition">
  //             <div className="md:flex">
  //               <div className="md:w-2/5 bg-gradient-to-br from-yellow-500 to-yellow-700 h-80 md:h-auto flex items-center justify-center">
  //                 <Building2 className="w-32 h-32 text-white opacity-50" />
  //               </div>
  //               <div className="md:w-3/5 p-8">
  //                 <div className="flex flex-wrap justify-between items-start mb-4">
  //                   <div>
  //                     <h2 className="text-3xl font-bold mb-3">{project.name}</h2>
  //                     <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
  //                       <span className="flex items-center gap-2">📍 {project.location}</span>
  //                       <span className="flex items-center gap-2">🏠 {project.type}</span>
  //                     </div>
  //                     <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
  //                       <span>{project.units}</span>
  //                       <span>•</span>
  //                       <span>{project.bedrooms}</span>
  //                     </div>
  //                   </div>
  //                   <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
  //                     {project.status}
  //                   </span>
  //                 </div>
                  
  //                 <p className="text-gray-700 mb-6">{project.description}</p>
                  
  //                 <div className="mb-6">
  //                   <h4 className="font-semibold mb-3">Features:</h4>
  //                   <div className="grid grid-cols-2 gap-2">
  //                     {project.features.map((feature, idx) => (
  //                       <div key={idx} className="flex items-center gap-2 text-gray-700">
  //                         <CheckCircle className="w-4 h-4 text-yellow-600" />
  //                         <span className="text-sm">{feature}</span>
  //                       </div>
  //                     ))}
  //                   </div>
  //                 </div>
                  
  //                 <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t">
  //                   <div>
  //                     <div className="text-sm text-gray-600">Price Range</div>
  //                     <div className="text-2xl font-bold text-yellow-700">{project.priceRange}</div>
  //                     <div className="text-sm text-gray-500">Expected: {project.expectedCompletion}</div>
  //                   </div>
  //                   <button 
  //                     onClick={() => setActivePage('interest')}
  //                     className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
  //                   >
  //                     Register Interest
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       <div className="mt-16 bg-yellow-50 border-2 border-yellow-600 p-8 rounded-xl">
  //         <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
  //           <Shield className="w-6 h-6 text-yellow-600" />
  //           Project Information Notice
  //         </h3>
  //         <p className="text-gray-700">
  //           All project information is preliminary and subject to change. Timelines, specifications, pricing, and availability are not guaranteed. Project development is subject to municipal approvals, market conditions, and other factors beyond our control. Registering interest does not constitute a commitment or guarantee of availability. All transactions are subject to formal contract execution and legal due diligence.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );

  const renderFinancing = () => {
    const currentExample = financingExamples[activeTab];
    
    return (
      <div className="px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Financing Examples</h1>
          <p className="text-xl text-gray-600 mb-12">
            Explore different payment structures to understand how our interest-free model can work for you
          </p>

          {/* Important Disclaimer Box */}
          <div className="bg-yellow-50 border-2 border-yellow-600 p-6 rounded-xl mb-12">
            <h3 className="text-lg font-bold text-yellow-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Important Disclaimers
            </h3>
            <ul className="space-y-2 text-yellow-900">
              <li>• These examples are illustrative only and do not constitute financial advice</li>
              <li>• Actual terms vary by project, availability, and individual circumstances</li>
              <li>• All arrangements are subject to formal contract execution and legal review</li>
              <li>• Consult with independent legal and financial advisors before making commitments</li>
              <li>• Massalkhi Properties is not a financial institution or lender</li>
            </ul>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 bg-gray-100 p-2 rounded-xl">
            {Object.entries(financingExamples).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 px-6 py-4 rounded-lg font-semibold transition ${
                  activeTab === key
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {data.title}
              </button>
            ))}
          </div>

          {/* Example Details */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Example Scenario: $300,000 Property</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Property Price</div>
                  <div className="text-3xl font-bold text-gray-900">
                    ${currentExample.example.price.toLocaleString()}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Down Payment ({currentExample.downPayment}%)</div>
                  <div className="text-3xl font-bold text-yellow-700">
                    ${currentExample.example.down.toLocaleString()}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Remaining Balance</div>
                  <div className="text-3xl font-bold text-gray-900">
                    ${currentExample.example.remaining.toLocaleString()}
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-600">
                  <div className="text-sm text-gray-600 mb-1">Monthly Payment</div>
                  <div className="text-3xl font-bold text-yellow-700">
                    ${currentExample.example.monthly.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">for {currentExample.term} months</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 p-6 rounded-xl">
              <h4 className="font-bold mb-3 text-gray-900">How This Works:</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• You pay ${currentExample.example.down.toLocaleString()} upfront ({currentExample.downPayment}% down payment)</li>
                <li>• Monthly payments of ${currentExample.example.monthly.toLocaleString()} for {currentExample.term} months</li>
                <li>• Total paid: ${currentExample.example.price.toLocaleString()} (no interest added)</li>
                <li>• Fixed payments - no variable rates or hidden charges</li>
                <li>• Clear path to full ownership in {Math.round(currentExample.term / 12)} years</li>
              </ul>
            </div>
          </div>

          {/* Key Principles */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-6">Key Principles of Our Model</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">No Interest Charges</h4>
                  <p className="text-gray-300">Payment amounts are based on the agreed property price, not interest accumulation</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Fixed Terms</h4>
                  <p className="text-gray-300">Payment amounts and schedules are predetermined and don't change over time</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Transparent Pricing</h4>
                  <p className="text-gray-300">Total cost is known upfront before any commitment is made</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Legal Protection</h4>
                  <p className="text-gray-300">All agreements documented through proper legal channels with qualified professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-gray-900">The Process</h3>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Initial Consultation</h4>
                <p className="text-gray-700">
                  Meet with our team to discuss your needs, review available projects, and understand the ownership structure. We assess mutual fit and answer all your questions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Agreement & Down Payment</h4>
                <p className="text-gray-700">
                  Once terms are agreed upon, formal contracts are executed and the initial down payment secures your property. All terms are clearly documented.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Regular Fixed Payments</h4>
                <p className="text-gray-700">
                  Make your predetermined monthly payments. No surprises, no changing rates, just consistent progress toward full ownership.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-2">Full Ownership Transfer</h4>
                <p className="text-gray-700">
                  Upon completion of all payments, full legal ownership transfers to you with clear title, documented through proper legal channels.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Notice */}
          <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Before Proceeding</h3>
            <p className="text-gray-700 mb-4">
              We strongly encourage all potential buyers to consult with independent legal counsel and financial advisors before entering any property agreement. Our team can provide project information and answer questions, but we do not provide legal or financial advice.
            </p>
            <p className="text-gray-700">
              Every individual's circumstances are unique, and professional guidance is essential for informed decision-making. The examples above are simplified illustrations and actual terms will vary based on property value, project specifics, and individual qualifications.
            </p>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setActivePage('interest')}
              className="bg-yellow-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition"
            >
              Discuss Your Situation
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderAbout = () => (
    <div className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Massalkhi Properties</h1>
        
        <div className="prose prose-lg max-w-none space-y-10">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Massalkhi Properties was founded to create ethical pathways to home ownership for Canadians who seek alternatives to conventional interest-based financing. We believe that home ownership should be accessible to individuals who, for personal, religious, or ethical reasons, prefer not to engage with traditional mortgage structures.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to develop quality residential properties while offering transparent, fair, and interest-free ownership arrangements that align with the values of our clients.
            </p>
          </section>

          <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-2 border-yellow-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Exist</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Canadian real estate market has historically offered limited options for individuals who avoid interest-based financial products. For many Muslims, as well as others who hold similar ethical or religious convictions, conventional mortgages are not a viable option.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We recognized this gap and set out to create a professional, legally compliant solution. Massalkhi Properties combines real estate development expertise with alternative financing structures inspired by Islamic finance principles, adapted for the Canadian legal context and made accessible to all who share these values.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-yellow-600 p-6 rounded-r-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-yellow-600" />
                  Ethical Foundation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every decision we make is guided by principles of fairness, transparency, and mutual respect. We do not believe in profiting through interest-based debt or exploiting information asymmetries. Our business model prioritizes long-term relationships over short-term gains.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-yellow-600 p-6 rounded-r-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-yellow-600" />
                  Transparency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We provide clear, understandable information about our projects, pricing, and processes. All terms are disclosed upfront. We answer questions honestly and encourage clients to seek independent advice.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-yellow-600 p-6 rounded-r-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                  Compliance and Professionalism
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We operate fully within Canadian legal frameworks. Our contracts are prepared by qualified legal professionals, our developments meet all regulatory requirements, and we maintain the highest standards of professional conduct.
                </p>
              </div>
              
              <div className="bg-white border-l-4 border-yellow-600 p-6 rounded-r-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-yellow-600" />
                  Inclusivity
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  While our approach is inspired by Islamic finance principles, we welcome clients from all backgrounds who appreciate ethical, interest-free ownership structures. Our doors are open to anyone who shares our values.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We commit to developing quality residential properties with integrity and care. We commit to maintaining transparent communication throughout every phase of the development and ownership process. We commit to treating every client with dignity and respect, recognizing that home ownership is one of life's most significant financial decisions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Most importantly, we commit to never compromising our ethical principles for profit. Our success is measured not just in properties developed, but in families housed, values honored, and trust earned.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Massalkhi Properties is led by experienced professionals with backgrounds in real estate development, legal compliance, and ethical finance. Our team combines technical expertise with a deep commitment to the values that guide our work.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We work with qualified legal counsel, licensed architects and engineers, and trusted construction partners to ensure every project meets the highest standards of quality and compliance.
            </p>
          </section>

          <section className="bg-yellow-50 border-2 border-yellow-600 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Forward</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Massalkhi Properties is building more than homes, we're building a movement toward ethical real estate development in Canada. As we grow, we remain committed to our founding principles while expanding access to interest-free home ownership across the country.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We invite you to join us on this journey toward ethical, transparent, and accessible home ownership.
            </p>
            <button 
              onClick={() => setActivePage('interest')}
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition"
            >
              Start Your Journey
            </button>
          </section>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12">
          Have questions? We're here to help. Reach out through any of the channels below.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-2 border-yellow-200">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Mail className="w-7 h-7 text-yellow-600" />
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a href="mailto:info@massalkhiproperties.com" className="text-yellow-600 hover:text-yellow-700 font-medium">
                    info@massalkhiproperties.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone</div>
                  <p className="text-gray-700">+1 (873) 355-0860</p>
                  <p className="text-sm text-gray-600 mt-1">Monday - Friday, 9 AM - 5 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Office Location</h3>
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Massalkhi Properties</strong><br />
                {/* [Address Line 1]<br />
                [Address Line 2]<br /> */}
                Ottawa,ON<br />
                Canada
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Office visits by appointment only. Please contact us to schedule a meeting.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  placeholder="john@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                placeholder="+X (XXX) XXX-XXXX"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject *
              </label>
              <select
                name="interestType"
                required
                value={formData.interestType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              >
                <option value="buying">Buying Inquiry</option>
                <option value="investing">Investment Opportunity</option>
                <option value="general">General Question</option>
                <option value="partnership">Partnership Inquiry</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                placeholder="Tell us about your inquiry..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ Link */}
        <div className="mt-12 bg-gray-50 p-8 rounded-2xl text-center border-2 border-gray-200">
          <h3 className="text-2xl font-bold mb-4">Looking for Quick Answers?</h3>
          <p className="text-gray-700 mb-6">
            Check our FAQ section for answers to common questions about our processes, eligibility, and ownership models.
          </p>
          <button
            onClick={() => setActivePage('faq')}
            className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
          >
            View FAQ
          </button>
        </div>
      </div>
    </div>
  );

  const renderInterest = () => (
    <div className="px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Express Interest</h1>
        <p className="text-xl text-gray-600 mb-12">
          Take the first step toward ethical home ownership. Complete the form below and our team will be in touch to discuss opportunities that align with your needs.
        </p>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                placeholder="+1 (873) 355-0860"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                I am interested in: *
              </label>
              <select
                name="interestType"
                required
                value={formData.interestType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              >
                <option value="buying">Buying a Home</option>
                <option value="investing">Investment Opportunities</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            {/* <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Project (Optional)
              </label>
              <select
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              >
                <option value="">Select a project</option>
                <option value="oakridge">Oakridge Townhomes - Mississauga</option>
                <option value="riverside">Riverside Residences - Ottawa</option>
                <option value="maple">Maple Grove Homes - Toronto</option>
                <option value="any">Any Available Project</option>
              </select>
            </div> */}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Budget Range (Optional)
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              >
                <option value="">Select a range</option>
                <option value="under-500k">Under $500,000</option>
                <option value="500k-750k">$500,000 - $750,000</option>
                <option value="750k-1m">$750,000 - $1,000,000</option>
                <option value="over-1m">Over $1,000,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Timeline (Optional)
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              >
                <option value="">Select a timeline</option>
                <option value="immediate">Ready to proceed immediately</option>
                <option value="3-6months">Within 3-6 months</option>
                <option value="6-12months">Within 6-12 months</option>
                <option value="12plus">12+ months</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                placeholder="Tell us about your home ownership goals, specific requirements, or any questions you have..."
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-600" />
                Privacy Notice
              </h4>
              <p className="text-sm text-gray-700">
                Your information will be used solely to respond to your inquiry and provide information about Massalkhi Properties and our projects. We do not sell or share personal information with third parties for marketing purposes. By submitting this form, you consent to us contacting you regarding your inquiry.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition shadow-lg"
            >
              Submit Interest Form
            </button>
          </form>
        </div>

        <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl text-center">
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> Submitting this form does not constitute a commitment or guarantee of availability. All opportunities are subject to qualification, availability, and formal contract execution. Our team will review your submission and contact you to discuss next steps.
          </p>
        </div>
      </div>
    </div>
  );

  const renderFAQ = () => (
    <div className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 mb-12">
          Find answers to common questions about our ownership models, processes, and requirements.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-4 text-lg">{faq.q}</span>
                {expandedFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {expandedFAQ === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed bg-gray-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6 text-lg">
            We're here to help. Contact our team for personalized answers to your questions about ethical home ownership.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setActivePage('contact')}
              className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
            >
              Contact Us
            </button>
            <button
              onClick={() => setActivePage('interest')}
              className="border-2 border-yellow-600 text-yellow-700 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition"
            >
              Express Interest
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLegal = () => (
    <div className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Legal & Disclaimers</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-yellow-50 border-2 border-yellow-600 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Disclaimers</h2>
            <p className="text-gray-700">
              The information provided on this website is for general informational purposes only. It does not constitute financial, legal, tax, or investment advice. Massalkhi Properties strongly recommends that all potential buyers and investors consult with independent qualified professionals, including lawyers, accountants, and financial advisors, before making any commitments or decisions related to property ownership.
            </p>
            <p className="text-gray-700">
              All project information, timelines, specifications, pricing, and availability are subject to change without notice. Massalkhi Properties makes no guarantees regarding project completion dates, property features, or availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Financial Advice</h2>
            <p className="text-gray-700">
              Nothing on this website constitutes financial advice or recommendations. Massalkhi Properties is not a financial institution, lender, mortgage broker, or investment advisor. We develop and sell real estate properties using alternative ownership structures. Any financial decisions must be made independently with appropriate professional guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guarantees</h2>
            <p className="text-gray-700 mb-3">
              Massalkhi Properties makes no guarantees regarding:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Property value appreciation or maintenance</li>
              <li>Project completion timelines</li>
              <li>Availability of specific properties or units</li>
              <li>Approval of individual applications or arrangements</li>
              <li>Future market conditions or economic factors</li>
              <li>Regulatory approvals or municipal permits</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Real estate investment carries inherent risks. Past performance or projections do not guarantee future results.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contract Requirements</h2>
            <p className="text-gray-700">
              All property transactions with Massalkhi Properties are subject to formal written contracts prepared by qualified legal professionals. No verbal agreements, preliminary discussions, or website content creates binding obligations. Only executed contracts signed by authorized representatives constitute legally binding commitments.
            </p>
            <p className="text-gray-700">
              Buyers are strongly encouraged to have all contracts reviewed by independent legal counsel before signing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Statement</h2>
            <p className="text-gray-700">
              Massalkhi Properties operates in compliance with all applicable Canadian federal and provincial laws and regulations. Our ownership structures are designed to meet legal requirements while providing alternatives to conventional interest-based financing. However, the legal and regulatory landscape may evolve, and our structures may need to adapt accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              Massalkhi Properties respects your privacy. Personal information collected through this website is used solely for responding to inquiries and providing information about our services. We do not sell, rent, or share personal information with third parties except as required by law or as necessary to fulfill our contractual obligations.
            </p>
            <p className="text-gray-700">
              By submitting information through our website, you consent to our collection and use of that information as described. You may request access to, correction of, or deletion of your personal information by contacting us directly at privacy@massalkhiproperties.ca.
            </p>
          </section>

          <section className="bg-gray-900 text-white p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-gray-300">
              These terms and any disputes arising from the use of this website or transactions with Massalkhi Properties shall be governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.
            </p>
          </section>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(activePage) {
      case 'home': return renderHome();
      case 'projects': return renderProjects();
      case 'financing': return renderFinancing();
      case 'about': return renderAbout();
      case 'interest': return renderInterest();
      case 'contact': return renderContact();
      case 'faq': return renderFAQ();
      case 'legal': return renderLegal();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => setActivePage('home')}
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <img
              src="/logo.png"
              alt="Massalkhi Properties"
              className="h-30 w-auto"
              />

            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 items-center">
              <button 
                onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }} 
                className={`hover:text-yellow-500 transition font-medium ${activePage === 'home' ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => { setActivePage('projects'); setMobileMenuOpen(false); }} 
                className={`hover:text-yellow-500 transition font-medium ${activePage === 'projects' ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => { setActivePage('financing'); setMobileMenuOpen(false); }} 
                className={`hover:text-yellow-500 transition font-medium ${activePage === 'financing' ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : ''}`}
              >
                Financing
              </button>
              <button 
                onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }} 
                className={`hover:text-yellow-500 transition font-medium ${activePage === 'about' ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => { setActivePage('faq'); setMobileMenuOpen(false); }} 
                className={`hover:text-yellow-500 transition font-medium ${activePage === 'faq' ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : ''}`}
              >
                FAQ
              </button>
              <button 
                onClick={() => { setActivePage('contact'); setMobileMenuOpen(false); }} 
                className={`hover:text-yellow-500 transition font-medium ${activePage === 'contact' ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : ''}`}
              >
                Contact
              </button>
              <button 
                onClick={() => { setActivePage('interest'); setMobileMenuOpen(false); }}
                className="bg-yellow-600 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition ml-2"
              >
                Express Interest
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button 
                onClick={() => setActivePage('interest')}
                className="bg-yellow-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition text-sm"
              >
                Get Started
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-yellow-500 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-3">
                <button 
                  onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }} 
                  className={`text-left px-4 py-2 hover:bg-gray-800 rounded transition ${activePage === 'home' ? 'text-yellow-500 bg-gray-800' : ''}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => { setActivePage('projects'); setMobileMenuOpen(false); }} 
                  className={`text-left px-4 py-2 hover:bg-gray-800 rounded transition ${activePage === 'projects' ? 'text-yellow-500 bg-gray-800' : ''}`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => { setActivePage('financing'); setMobileMenuOpen(false); }} 
                  className={`text-left px-4 py-2 hover:bg-gray-800 rounded transition ${activePage === 'financing' ? 'text-yellow-500 bg-gray-800' : ''}`}
                >
                  Financing
                </button>
                <button 
                  onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }} 
                  className={`text-left px-4 py-2 hover:bg-gray-800 rounded transition ${activePage === 'about' ? 'text-yellow-500 bg-gray-800' : ''}`}
                >
                  About
                </button>
                <button 
                  onClick={() => { setActivePage('faq'); setMobileMenuOpen(false); }} 
                  className={`text-left px-4 py-2 hover:bg-gray-800 rounded transition ${activePage === 'faq' ? 'text-yellow-500 bg-gray-800' : ''}`}
                >
                  FAQ
                </button>
                <button 
                  onClick={() => { setActivePage('contact'); setMobileMenuOpen(false); }} 
                  className={`text-left px-4 py-2 hover:bg-gray-800 rounded transition ${activePage === 'contact' ? 'text-yellow-500 bg-gray-800' : ''}`}
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded flex items-center justify-center font-bold">
                  M
                </div>
                <div>
                  <div className="font-bold text-yellow-500">MASSALKHI</div>
                  <div className="text-xs text-gray-400">PROPERTIES</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ethical home ownership through interest-free structures across Canada.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-yellow-500">Company</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => setActivePage('about')} className="block hover:text-yellow-500 transition">About Us</button>
                <button onClick={() => setActivePage('projects')} className="block hover:text-yellow-500 transition">Projects</button>
                <button onClick={() => setActivePage('financing')} className="block hover:text-yellow-500 transition">Financing</button>
                <button onClick={() => setActivePage('interest')} className="block hover:text-yellow-500 transition">Express Interest</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-yellow-500">Support</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => setActivePage('faq')} className="block hover:text-yellow-500 transition">FAQ</button>
                <button onClick={() => setActivePage('contact')} className="block hover:text-yellow-500 transition">Contact</button>
                <button onClick={() => setActivePage('legal')} className="block hover:text-yellow-500 transition">Legal & Privacy</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-yellow-500">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>info@massalkhiproperties.com</p>
                <p>+1 (873) 355-0860</p>
                <p className="pt-4">
                  {/* [Address]<br /> */}
                  Ottawa, ON<br />
                  Canada
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-wrap justify-between items-center text-sm text-gray-400">
            <p>© 2025 Massalkhi Properties. All rights reserved.</p>
            <p>Ethical home ownership • Interest-free structures • Canadian real estate</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MassalkhiWebsite;