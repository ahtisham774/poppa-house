// src/data/maintenanceData.js
export const maintenanceServices = [
  {
    key: 'cleaning',
    title: 'Cleaning Service',
    icon: (
      <svg width="30" height="30" fill="none">
        <rect width="30" height="30" fill="#EEF5FD" rx="15" />
        <path d="M21 10l-1 10H10l-1-10" stroke="#1B2943" strokeWidth="2" />
        <rect x="13" y="8" width="4" height="2" rx="1" fill="#1B2943" />
      </svg>
    ),
    description: 'Deep property cleaning for home or office',
    formTitle: 'Book a professional cleaning service tailored to your space!'
  },
  {
    key: 'garden',
    title: 'Garden & Lawn Maintenance',
    icon: (
      <svg width="30" height="30" fill="none">
        <rect width="30" height="30" fill="#EEF5FD" rx="15" />
        <path d="M15 8l6 13M15 8l-6 13" stroke="#1B2943" strokeWidth="2" />
      </svg>
    ),
    description: 'Lawn mowing, trimming, and plant care',
    formTitle: 'Get your outdoor space in top shape with our expert garden and lawn maintenance service!'
  },
  {
    key: 'repair',
    title: 'Repair Service',
    icon: (
      <svg width="30" height="30" fill="none">
        <rect width="30" height="30" fill="#EEF5FD" rx="15" />
        <path d="M15 11v8M19 15h-8" stroke="#1B2943" strokeWidth="2" />
      </svg>
    ),
    description: 'General repairs for household or office needs',
    formTitle: 'Get professional repairs done quickly and efficiently!'
  }
];

export const packageTypes = [
  {
    key: 'oneoff',
    title: 'One-off Service',
    description: 'For a single, on-demand visit/service',
  },
  {
    key: 'subscription',
    title: 'Subscription Based Service',
    description: 'Recurring scheduled visits/services',
  }
];


// src/data/formStepsData.js
export const getFormSteps = (serviceType, packageType) => {
  // Common steps for all services
  const commonSteps = [
    {
      title: "Personal Information",
      fields: [
        { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
        { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address", required: true },
        { name: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", required: true },
        { name: "address", label: "Address", type: "text", placeholder: "Enter your address", required: true },
        { name: "city", label: "City", type: "select", placeholder: "Select City", required: true,
          options: [
            { value: "london", label: "London" },
            { value: "manchester", label: "Manchester" },
            { value: "birmingham", label: "Birmingham" },
            { value: "leeds", label: "Leeds" }
          ]
        },
        { name: "stateProvince", label: "State/Province", type: "select", placeholder: "Select state/province", required: true,
          options: [
            { value: "england", label: "England" },
            { value: "scotland", label: "Scotland" },
            { value: "wales", label: "Wales" },
            { value: "northernIreland", label: "Northern Ireland" }
          ]
        },
        { name: "postalCode", label: "Postal Code", type: "text", placeholder: "Enter your postal code", required: true },
        { name: "country", label: "Country", type: "select", placeholder: "Select Country", required: true,
          options: [
            { value: "uk", label: "United Kingdom" },
            { value: "us", label: "United States" },
            { value: "canada", label: "Canada" },
            { value: "australia", label: "Australia" }
          ]
        }
      ]
    }
  ];

  // Service-specific steps
  const serviceSteps = {
    cleaning: {
      oneoff: [
        {
          title: "Cleaning Service Details",
          sections: [
            {
              fields: [
                { 
                  name: "cleaningType", 
                  label: "Type of Cleaning", 
                  type: "select", 
                  required: true,
                  placeholder: "Select the type of cleaning",
                  options: [
                    { value: "general", label: "General Cleaning (Surface dusting, vacuuming, mopping, and sanitizing)" },
                    { value: "deep", label: "Deep Cleaning" },
                    { value: "move-in", label: "Move-in/Move-out Cleaning" },
                    { value: "post-construction", label: "Post-Construction Cleaning" },
                    { value: "other", label: "Other" }
                  ]
                }
              ]
            },
            {
              conditions: [{ field: "cleaningType", value: "other" }],
              fields: [
                { name: "otherCleaningType", label: "Please specify other cleaning type", type: "text", placeholder: "Enter the specific cleaning type", required: true }
              ]
            },
            {
              fields: [
                {
                  name: "propertyType",
                  label: "Property Type",
                  type: "radio-group",
                  required: true,
                  options: [
                    { value: "apartment", label: "Apartment" },
                    { value: "house", label: "House" },
                    { value: "office", label: "Office" },
                    { value: "commercial", label: "Commercial Space" },
                    { value: "other", label: "Other" }
                  ]
                }
              ]
            },
            {
              conditions: [{ field: "propertyType", value: "other" }],
              fields: [
                { name: "otherPropertyType", label: "Please specify property type", type: "text", placeholder: "Enter the specific property type", required: true }
              ]
            }
          ]
        },
        {
          title: "Location & Availability",
          fields: [
            { name: "serviceAddress", label: "Service Address", type: "text", placeholder: "Enter your address", required: true },
            { name: "serviceCity", label: "City", type: "select", placeholder: "Select City", required: true,
              options: [
                { value: "london", label: "London" },
                { value: "manchester", label: "Manchester" },
                { value: "birmingham", label: "Birmingham" },
                { value: "leeds", label: "Leeds" }
              ]
            },
            { name: "serviceStateProvince", label: "State/Province", type: "select", placeholder: "Select state/province", required: true,
              options: [
                { value: "england", label: "England" },
                { value: "scotland", label: "Scotland" },
                { value: "wales", label: "Wales" },
                { value: "northernIreland", label: "Northern Ireland" }
              ]
            },
            { name: "servicePostalCode", label: "Postal Code", type: "text", placeholder: "Enter your postal code", required: true },
            { name: "serviceCountry", label: "Country", type: "select", placeholder: "Select Country", required: true,
              options: [
                { value: "uk", label: "United Kingdom" },
                { value: "us", label: "United States" },
                { value: "canada", label: "Canada" },
                { value: "australia", label: "Australia" }
              ]
            },
            { name: "preferredDate", label: "Preferred Date", type: "date", required: true },
            { 
              name: "preferredTimeSlot", 
              label: "Preferred Time Slot", 
              type: "radio-group", 
              required: true,
              inline: true,
              options: [
                { value: "morning", label: "Morning" },
                { value: "afternoon", label: "Afternoon" },
                { value: "evening", label: "Evening" }
              ]
            },
            { 
              name: "presentDuringCleaning", 
              label: "Will you be present during the cleaning?", 
              type: "radio-group", 
              required: true,
              inline: true,
              options: [
                { value: "yes", label: "Yes, I will be available" },
                { value: "no", label: "No, but I will arrange access" }
              ]
            },
            { 
              name: "parkingAvailable", 
              label: "Is there parking available for our team?", 
              type: "radio-group", 
              required: true,
              inline: true,
              options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" }
              ]
            },
            { name: "accessInstructions", label: "Are there any special instructions for access?", type: "textarea", placeholder: "Enter any access Instructions, security codes, key pick up information, etc..." }
          ]
        },
        {
          title: "Condition & Special Requests",
          fields: [
            { 
              name: "currentCondition", 
              label: "How would you describe the current condition?", 
              type: "radio-group", 
              required: true,
              options: [
                { value: "lightly", label: "Lightly Used (Minimal dust and dirt)" },
                { value: "moderately", label: "Moderately Dirty (Visible dirt, minor stains, buildup)" },
                { value: "heavily", label: "Heavily Soiled (Deep stains, grease, grime, neglected space)" }
              ]
            },
            { name: "additionalDetails", label: "Additional Requests or Special Instructions", type: "textarea", placeholder: "Enter any additional requests or special instructions..." }
          ]
        },
        {
          title: "Upload Pictures or Videos",
          description: "For accurate pricing and service planning, please upload clear images/videos of the area.",
          fields: [
            { name: "photos", label: "Upload your files", type: "file", description: "Drag and drop or click to browse files" }
          ]
        },
        {
          title: "Review & Submit",
          fields: [
            { name: "termsAgreed", label: "I confirm that the details provided are accurate, and I agree to the terms of service.", type: "checkbox", required: true }
          ]
        }
      ],
      subscription: [
        // Subscription-specific steps for cleaning service
        {
          title: "Subscription Plan Selection",
          description: "Choose your preferred cleaning frequency",
          fields: [
            { 
              name: "subscriptionPlan", 
              label: "Choose your preferred cleaning frequency", 
              type: "radio-group", 
              required: true,
              options: [
                { value: "monthly", label: "Monthly", description: "12 cleanings per year" },
                { value: "quarterly", label: "Quarterly", description: "4 cleanings per year" },
                { value: "biannually", label: "Biannually", description: "2 cleanings per year" },
                { value: "annually", label: "Annually", description: "1 cleaning per year" }
              ]
            }
          ]
        }
        // Additional steps similar to one-off service
      ]
    },
    garden: {
      oneoff: [
        {
          title: "Garden & Lawn Maintenance Service Details",
          fields: [
            {
              name: "gardenServices",
              label: "Select the services you require",
              description: "Check all that apply based on your preferences",
              type: "checkbox-group",
              options: [
                { value: "mowing", label: "Lawn Mowing & Edging" },
                { value: "weeding", label: "Garden Weeding & Mulching" },
                { value: "hedges", label: "Hedge Trimming & Pruning" },
                { value: "trees", label: "Tree & Shrub Maintenance" },
                { value: "cleanup", label: "Seasonal Cleanup" },
                { value: "redesign", label: "Garden Redesign & Decoration (Includes specialist consultation, layout planning, and redecoration)" }
              ]
            },
            {
              name: "propertyType",
              label: "Property Type",
              type: "radio-group",
              required: true,
              options: [
                { value: "residential", label: "Residential" },
                { value: "commercial", label: "Commercial" },
                { value: "other", label: "Other" }
              ]
            },
            { 
              name: "briefDescription", 
              label: "Brief Description of the Outdoor Space", 
              type: "textarea", 
              placeholder: "Enter brief description of the outdoor space E.g., size, layout, current state of maintenance", 
              required: true 
            }
          ]
        }
        // Additional steps similar to cleaning service
      ],
      subscription: [
        // Subscription-specific steps for garden service
      ]
    },
    repair: {
      oneoff: [
        {
          title: "Repair Service Details",
          fields: [
            {
              name: "repairServices",
              label: "Select the Repairs You Need",
              description: "Check all that apply based on your preferences",
              type: "checkbox-group",
              options: [
                { 
                  value: "plumbing", 
                  label: "Plumbing & Water Systems",
                  subOptions: [
                    { value: "leaks", label: "Leak Detection & Repair" },
                    { value: "taps", label: "Tap & Showerhead Replacement" },
                    { value: "blockage", label: "Pipe & Drain Blockage Clearing" },
                    { value: "waterHeater", label: "Water Heater Repair/Installation" },
                    { value: "other", label: "Other" }
                  ]
                },
                { 
                  value: "electrical", 
                  label: "Electrical & Lighting",
                  subOptions: [
                    { value: "powerOutage", label: "Power Outage Troubleshooting" },
                    { value: "switches", label: "Switches, Sockets & Wiring Repair" },
                    { value: "lighting", label: "Light Fixture Replacement" },
                    { value: "circuitBreaker", label: "Circuit Breaker Issues" },
                    { value: "other", label: "Other" }
                  ]
                },
                { 
                  value: "structural", 
                  label: "Structural Repairs",
                  subOptions: [
                    { value: "walls", label: "Wall Cracks & Plastering" },
                    { value: "roof", label: "Roof & Gutter Repairs" },
                    { value: "doors", label: "Door & Window Repairs" },
                    { value: "flooring", label: "Flooring Repairs (Tiles, Wood, etc.)" },
                    { value: "other", label: "Other" }
                  ]
                },
                { 
                  value: "hvac", 
                  label: "Heating & Cooling Systems",
                  subOptions: [
                    { value: "radiator", label: "Radiator Servicing & Repair" },
                    { value: "boiler", label: "Boiler Servicing & Repair" },
                    { value: "ac", label: "Air Conditioning Repair/Installation" },
                    { value: "ventilation", label: "Ventilation System Cleaning" },
                    { value: "other", label: "Other" }
                  ]
                },
                { 
                  value: "appliances", 
                  label: "Appliances & Fixtures",
                  subOptions: [
                    { value: "washer", label: "Washing Machine/Dryer Repair" },
                    { value: "fridge", label: "Fridge/Freezer Repair" },
                    { value: "cooker", label: "Gas/Electric Cooker Repair" },
                    { value: "other", label: "Other" }
                  ]
                }
              ]
            },
            { 
              name: "issueDescription", 
              label: "Describe the issue in detail", 
              type: "textarea", 
              placeholder: "Please provide as much detail as possible about the issue...", 
              required: true 
            }
          ]
        },
        {
          title: "Repair Condition & Urgency",
          fields: [
            { 
              name: "urgencyLevel", 
              label: "How urgent is this request?", 
              type: "radio-group", 
              required: true,
              options: [
                { value: "preventive", label: "Preventive (Check-up & minor fixes)" },
                { value: "routine", label: "Routine (Needs fixing soon but not urgent)" },
                { value: "priority", label: "High Priority (Fix within 48 hours)" },
                { value: "emergency", label: "Emergency (Same-day or immediate response)" }
              ]
            },
            {
              name: "troubleshootingDone",
              label: "Troubleshooting Done Before Requesting Service",
              type: "checkbox-group",
              options: [
                { value: "powerSupply", label: "Checked Power Supply" },
                { value: "waterValve", label: "Turned Off Water Valve" },
                { value: "circuitBreaker", label: "Reset Circuit Breaker" },
                { value: "other", label: "Other" }
              ]
            }
          ]
        }
        // Additional steps similar to other services
      ],
      subscription: [
        // Subscription-specific steps for repair service
      ]
    }
  };

  // Combine common steps with service-specific steps
  return [
    ...commonSteps,
    ...(serviceSteps[serviceType]?.[packageType] || [])
  ];
};