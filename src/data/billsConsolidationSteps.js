export const billsConsolidationSteps = [
    {
        title: "Personal Information",
        inline: true,
        fields: [
          {
            name: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Enter your full name",
            required: true
          },
          {
            name: "email",
            label: "Email Address",
            type: "email",
            placeholder: "Enter your email address",
            required: true
          },
          {
            name: "phoneNumber",
            label: "Phone Number",
            type: "text",
            placeholder: "Enter your phone number",
            required: true
          },
          {
            name: "address",
            label: "Address",
            type: "text",
            placeholder: "Enter your address",
            required: true
          },
          {
            name: "city",
            label: "City",
            type: "select",
            placeholder: "Select city",
            options: [
              { value: "london", label: "London" },
              { value: "manchester", label: "Manchester" },
              { value: "birmingham", label: "Birmingham" },
              { value: "leeds", label: "Leeds" }
            ],
            required: true
          },
          {
            name: "stateProvince",
            label: "State/Province",
            type: "select",
            placeholder: "Select state/province",
            options: [
              { value: "england", label: "England" },
              { value: "scotland", label: "Scotland" },
              { value: "wales", label: "Wales" },
              { value: "northernIreland", label: "Northern Ireland" }
            ],
            required: true
          },
          {
            name: "postalCode",
            label: "Postal Code",
            type: "text",
            placeholder: "Enter your postal code",
            required: true
          },
          {
            name: "country",
            label: "Country",
            type: "select",
            placeholder: "Select country",
            options: [
              { value: "uk", label: "United Kingdom" },
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "au", label: "Australia" }
            ],
            required: true
          },
          {
            name: "estateAgentName",
            label: "Name of Estate Agent",
            type: "text",
            placeholder: "Enter the name of the estate agent"
          },
          {
            name: "tenancyStartDate",
            label: "Tenancy Start Date",
            type: "date",
            placeholder: "Select a date"
          }
        ]
      },
      {
        title: "Select Your Bills Bundle",
       
        fields: [
          {

            name: "baselineUtility",
            label: "Baseline (Required - Choose One or Both)",
            type: "radio-group",
            options: [
              { value: "electricity", label: "Electricity" },
              { value: "gas", label: "Gas" }
            ],
            required: true
          },
          {
            name: "additionalBills",
            label: "Additional Bills (Optional - Select as needed)",
            type: "checkbox-group",
            options: [
              { name: "water", label: "Water" },
              { name: "tvLicense", label: "TV License" },
              { name: "broadbandTv", label: "Broadband & TV" },
              { name: "councilTax", label: "Council Tax" },
              { name: "other", label: "Other",
                subFields: [
                  {
                    name: "otherBillsDetails",
                    label: "Please specify the other bills",
                    type: "textarea",
                    placeholder: "Enter the specific other bills...",
                    full: true
                  }
                ]
               }
            ]
          },
          {
            name: "consolidationStartDate",
            label: "Start Date for Consolidation",
            type: "date",
            placeholder: "Select a date",
            min: new Date().toISOString().split('T')[0],
            required: true
          }
        ]
      },
      {
        title: "Additional Services & Customization",
        fields: [
          {
            name: "assistanceRequired",
            label: "Do you require assistance with setting up any of these services?",
            type: "radio-group",
            options: [
              { value: "yes", label: "Yes, I need help setting up utilities" },
              { value: "no", label: "No, I have existing services to consolidate" }
            ],
            required: true
          },
          {
            name: "specialRequests",
            label: "Special Requests or Notes",
            type: "textarea",
            placeholder: "Please describe your specific requests e.g., existing provider details, custom billing preferences",
            rows: 4,
            full: true
          },
          {
            name: "termsAgreed",
            label: "I confirm that the details provided are accurate and agree to the terms of service. An agent will get in touch with you within 5 working days.",
            type: "checkbox",
            required: true
          }
        ]
      }
    ];
    
    // Property & Rent Insurance Form Data
    export const propertyInsuranceSteps = [
      {
        title: "Personal Information",
        inline: true,
        fields: [
          {
            name: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Enter your full name",
            required: true
          },
          {
            name: "email",
            label: "Email Address",
            type: "email",
            placeholder: "Enter your email address",
            required: true
          },
          {
            name: "phoneNumber",
            label: "Phone Number",
            type: "text",
            placeholder: "Enter your phone number",
            required: true
          },
          {
            name: "address",
            label: "Address",
            type: "text",
            placeholder: "Enter your address",
            required: true
          },
          {
            name: "city",
            label: "City",
            type: "select",
            placeholder: "Select city",
            options: [
              { value: "london", label: "London" },
              { value: "manchester", label: "Manchester" },
              { value: "birmingham", label: "Birmingham" },
              { value: "leeds", label: "Leeds" }
            ],
            required: true
          },
          {
            name: "stateProvince",
            label: "State/Province",
            type: "select",
            placeholder: "Select state/province",
            options: [
              { value: "england", label: "England" },
              { value: "scotland", label: "Scotland" },
              { value: "wales", label: "Wales" },
              { value: "northernIreland", label: "Northern Ireland" }
            ],
            required: true
          },
          {
            name: "postalCode",
            label: "Postal Code",
            type: "text",
            placeholder: "Enter your postal code",
            required: true
          },
          {
            name: "country",
            label: "Country",
            type: "select",
            placeholder: "Select country",
            options: [
              { value: "uk", label: "United Kingdom" },
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "au", label: "Australia" }
            ],
            required: true
          },
          {
            name: "ownershipStatus",
            label: "Ownership Status",
            type: "select",
            placeholder: "Select ownership status",
            options: [
              { value: "owner", label: "Owner" },
              { value: "tenant", label: "Tenant" },
              { value: "landlord", label: "Landlord" }
            ],
            required: true
          },
          {
            name: "constructionYear",
            label: "Year of Property Construction",
            type: "select",
            placeholder: "Select the year...",
            options: [
              { value: "before1950", label: "Before 1950" },
              { value: "1950-1975", label: "1950-1975" },
              { value: "1976-2000", label: "1976-2000" },
              { value: "after2000", label: "After 2000" }
            ]
          },
          {
            name: "propertyCondition",
            label: "Property Condition",
            type: "radio-group",
            inline: true,
            options: [
              { value: "excellent", label: "Excellent" },
              { value: "good", label: "Good" },
              { value: "requiresRepairs", label: "Requires Repairs" }
            ]
          },
          {
            name: "propertyUsage",
            label: "Property Usage",
            type: "radio-group",
            inline: true,
            options: [
              { value: "ownerOccupied", label: "Owner-Occupied" },
              { value: "rentedOut", label: "Rented Out" },
              { value: "vacantLongPeriods", label: "Vacant for Long Periods" }
            ]
          },
          {
            name: "hasFloodingIssues",
            label: "Has the property experienced flooding, subsidence, or structural issues?",
            type: "radio-group",
            full: true,
            inline: true,
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" }
            ]
          },
          {
            name: "insuranceTypes",
            label: "Choose one or both types of insurance policies",
            type: "checkbox-group",
            full: true,
            options: [
              { 
                value: "propertyInsurance",
                name: "propertyInsurance", 
                label: "Property Insurance (Building & Contents)",
                
              },
              { 
                value: "rentInsurance", 
                name: "rentInsurance",
                label: "Rent Insurance (Rent Guarantee & Liability)",
                
              }
            ]
          }
        ]
      },
      {
        title: "Property Insurance Details",
        conditions: [{ field: 'insuranceTypes', value: 'propertyInsurance' }],
        fields: [
          {
            name: "coverageType",
            label: "Type of Coverage Required",
            type: "select",
            full: true,
            className: "md:col-span-2",
            placeholder: "Select the coverage type",
            options: [
              { value: "basic", label: "Basic Coverage" },
              { value: "standard", label: "Standard Coverage" },
              { value: "comprehensive", label: "Comprehensive Coverage" }
            ]
          },
          {
            name: "rebuildCost",
            label: "Estimated Rebuild Cost (if applicable)",
            type: "number",
            min: 0,
            placeholder: "£"
          },
          {
            name: "contentsValue",
            label: "Value of Contents to Be Insured",
            type: "number",
            min: 0,
            placeholder: "£"
          },
          {
            name: "securityMeasures",
            label: "Security Measures",
            type: "radio-group",
            inline: true,
            options: [
              { value: "alarmSystem", label: "Alarm System" },
              { value: "cctv", label: "CCTV" },
              { value: "secureLocks", label: "Secure Locks" }
            ]
          },
          {
            name: "accidentalDamageCoverage",
            label: "Do you require accidental damage coverage?",
            type: "radio-group",
            inline: true,
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" }
            ]
          }
        ]
      },
      {
        title: "Rent Insurance Details",
        conditions: [{ field: 'insuranceTypes', value: 'rentInsurance' }],
        fields: [
          {
            name: "tenantType",
            label: "Tenant Type",
            type: "select",
            full: true,
            placeholder: "Select tenant type",
            options: [
              { value: "professional", label: "Professional" },
              { value: "student", label: "Student" },
              { value: "dss", label: "DSS / Housing Benefit" }
            ]
          },
          {
            name: "tenantReferenced",
            label: "Tenant Referencing Completed?",
            type: "radio-group",
            inline: true,
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" }
            ]
          },
          {
            name: "agreementType",
            label: "Rental Agreement Type",
            type: "radio-group",
            inline: true,
            options: [
              { value: "fixedTerm", label: "Fixed-Term" },
              { value: "rollingTenancy", label: "Rolling Tenancy" }
            ]
          },
          {
            name: "leaseLength",
            label: "Lease Length (Months)",
            type: "text",
            placeholder: "Enter lease length"
          },
          {
            name: "monthlyRental",
            label: "Monthly Rental Income",
            type: "text",
            placeholder: "£"
          },
          {
            name: "unpaidRentCoverage",
            label: "Unpaid Rent Coverage (months)",
            type: "radio-group",
            inline: true,
            options: [
              { value: "3", label: "3" },
              { value: "6", label: "6" },
              { value: "12", label: "12" }
            ]
          },
          {
            name: "legalExpenseCover",
            label: "Include Legal Expense Cover for Evictions?",
            type: "radio-group",
            inline: true,
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" }
            ]
          }
        ]
      },
      {
        title: "Additional Information",
        fields: [
          {
            name: "additionalRequirements",
            label: "Additional Requirements or Notes",
            type: "textarea",
            placeholder: "Enter any additional requirements or notes",
            rows: 4,
            full: true
          },
          {
            name: "preferredStartDate",
            label: "Preferred Start Date for Insurance",
            type: "date",
            full:true,
            min: new Date().toISOString().split('T')[0]
          },
          {
            name: "termsAgreed",
            full:true,
            label: "I confirm that the details provided are accurate and agree to the terms and conditions. An agent will get in touch with you within 5 working days.",
            type: "checkbox",
            required: true
          }
        ]
      }
    ];
    
