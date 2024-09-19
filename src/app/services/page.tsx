// src/app/services/page.tsx
const services1 = [
  {
    category: "Body Waxing",
    services: [
      { name: "Full Arms", price: "$45+" },
      { name: "Half Arms", price: "$30+" },
      { name: "Underarms", price: "$20+" },
      { name: "Full Legs", price: "$65+" },
      { name: "Half Legs", price: "$45+" }
    ]
  },
  {
    category: "More Body Waxing",
    services: [
      { name: "Brazilian (Growth more than 4 weeks)", price: "$65+" },
      { name: "Brazilian Re-do (Growth less than 4 weeks)", price: "$50+" },
      { name: "Extended Bikini", price: "$35+" },
      { name: "Swim Suite Line", price: "$20+" },
      { name: "Buttocks Wax", price: "$20+" },
      { name: "Tummy Wax", price: "$30+" }
    ]
  },
  {
    category: "Full Back Care Treatment",
    services: [
      { name: "Full Back Wax", price: "$60+" },
      { name: "Half Back Wax", price: "$40+" },
      { name: "Lower Back Wax (Only center patch)", price: "$15+" },
      { name: "Full Back Care Treatment (60 mins)", price: "$80" }
    ],
    note: "Cleanse, steam, scrub, extraction, massage, mask, after care lotion. Note: If wax is included in the treatment we skip the steam and do a mild scrub."
  },
  {
    category: "Pre-Exfoliation Treatment",
    services: [
      { name: "Bikini", price: "$20" },
      { name: "Full Legs", price: "$25" },
      { name: "Full Arms", price: "$20" },
      { name: "Underarms", price: "$10" },
      { name: "Full Body (Only full body scrub and after care lotion)", price: "$100" }
    ],
    note: "Cleanse, steam, scrub, ingrown extraction, mask, after care lotion (30 mins)."
  }

];
const services2 = [
  {
    category: "Threading & Waxing",
    services: [
      { name: "Eyebrows", price: "$15" },
      { name: "Upperlips", price: "$7" },
      { name: "Forehead", price: "$8" },
      { name: "Chin & Throat", price: "$10+" },
      { name: "Sides", price: "$10" },
      { name: "Cheeks", price: "$10" },
      { name: "Ears", price: "$10" },
      { name: "Nose", price: "$10" },
      { name: "Neck", price: "$10+" }
    ]
  },
  {
    category: "Tint and Lift for Eyebrows and Lashes",
    services: [
      { name: "Eyebrow Tint", price: "$15 (15 mins)" },
      { name: "Lash Tint", price: "$20 (20 mins)" },
      { name: "Eyebrow Intense Tint", price: "$35 (45 mins)" },
      { name: "Eyebrow Henna", price: "$40 (45 mins)" },
      { name: "Eyebrow Lamination/Lift", price: "$75 (60 mins)" },
      { name: "Lash Lift/Curl/Perm", price: "$65 (50 mins)" }
    ]
  },
  {
    category: "Full Face Treatment",
    services: [
      { name: "Express Full Face", price: "$30", details: "(Eyebrows, upperlip, chin, throat, sides, cheeks and soothing gel)" },
      { name: "Full Face Factor", price: "$60", details: "(Cleanse, wax/thread, mask, moisturizer) (60 mins)" }
    ]
  },
  {
    category: "Paraffin Treatment and Add On's",
    services: [
      { name: "Hands Paraffin", price: "$25 (30 mins)" },
      { name: "Feet Paraffin", price: "$25 (30 mins)" },
      { name: "Face Paraffin", price: "$25 (30 mins)" },
      { name: "Hands and Feet Paraffin", price: "$40 (45 mins)" },
      { name: "Eye Mask", price: "$10 (15 mins)" },
      { name: "Lip Mask", price: "$10 (15 mins)" },
      { name: "Face Mask", price: "$15 (15 mins)" },
      { name: "Post BRZ Mask", price: "$20 (10 mins)" }
    ]
  }
];

const services3 = [
  {
    category: "Everyday Deals",
    services: [
      { name: "Eyebrows + Eyebrow Tint", price: "$25" },
      { name: "Eyebrows + Eyebrow Tint + Lash Tint", price: "$35" },
      { name: "Eyebrows + Eyebrow Tint + Lash Tint + Lash Lift", price: "$100" },
      { name: "Eyebrows + Eyebrow Intense Tint", price: "$40" },
      { name: "Eyebrows + Eyebrow Intense Tint + Lash Tint", price: "$60" },
      { name: "Eyebrows + Eyebrow Intense Tint + Lash Tint + Lash Lift", price: "$125" },
      { name: "Eyebrows + Eyebrow Henna", price: "$50" },
      { name: "Eyebrows + Eyebrow Henna + Lash Tint", price: "$60" },
      { name: "Eyebrows + Eyebrow Henna + Lash Tint + Lash Lift", price: "$125" },
      { name: "Eyebrows + Eyebrow Lamination", price: "$85" },
      { name: "Eyebrows + Eyebrow Lamination + Lash Tint", price: "$95" },
      { name: "Eyebrows + Eyebrow Lamination + Lash Tint + Lash Lift", price: "$160" }
    ]
  },
  {
    category: "Body Wax Deals",
    services: [
      { name: "Full Arms + Underarms + Eyebrows", price: "$65" },
      { name: "Full Arms + Full Legs + Underarms", price: "$115" },
      { name: "BRZ Re-do + Half Legs + Eyebrows", price: "$80" },
      { name: "Full Legs + Pre-Exfoliation", price: "$75" },
      { name: "Full Body Wax", price: "$200+" },],

      note: "(Does not include face, buttocks, and Brazilian)"
  },
  {
    category: "Wax Passes",
    services: [
      { name: "Brazilian Wax Pass (Buy 10 Get 2 Free)", price: "$650" },
      { name: "Eyebrow Thread/Wax Pass (Buy 8 Get 2 Free)", price: "$120" }
    ]
  }
];

//add easy to read font for this page only


export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12 bg-red-50 font-sans font-light ">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services1.map((service, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black-800 mb-2">
              {service.category}
            </h3>
            <ul>
              {service.services && service.services.map((serviceItem, serviceIndex) => (
                <li key={serviceIndex} className="text-gray-700"> 
                <span className="font-semibold">{serviceItem.name}</span>  <span className="float-right">{serviceItem.price}</span>  
                </li>
              ))}
            </ul>
            {service.note && <p className="text-gray-700 mt-4">{service.note}</p>}
          </div>
        ))}
        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-black-800 mb-2">Important Note</h3>
          <p className="text-gray-700 mt-4">
          Waxing results depend on the type of hair and its growth.
          <br />
          For best results we recommend body hairs to be fully grown: that is 4 weeks later than the last appointment.
          <br />
          Do not scratch yourself after waxing.
          <br />
            Do not scrub and pour hot water for at least 24 hours after the session.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {services2.map((service, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.category}
            </h3>
            <ul>
              {service.services && service.services.map((serviceItem, serviceIndex) => (
                <li key={serviceIndex} className="text-gray-700"> 
                <span className="font-semibold">{serviceItem.name}</span>  <span className="float-right">{serviceItem.price}</span>  
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {services3.map((service, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black-800 mb-2">
              {service.category}
            </h3>
            <ul>
              {service.services && service.services.map((serviceItem, serviceIndex) => (
                <li key={serviceIndex} className="text-gray-700"> 
                <span className="font-semibold text-xs md:text-base">{serviceItem.name}</span>  <span className="float-right text-sm md:text-base">{serviceItem.price}</span>  
                </li>
              ))}
            </ul>
            {service.note && <p className="text-gray-700 mt-4">{service.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
