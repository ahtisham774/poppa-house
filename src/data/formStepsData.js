// src/data/formStepsData.js
export const getFormSteps = (serviceType, packageType) => {
  // Common steps for all services
  const commonSteps = [
    {
      title: 'Personal Information',
      inline: true,
      fields: [
        {
          name: 'fullName',
          label: 'Full Name',
          type: 'text',
          placeholder: 'Enter your full name',
          required: true
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'Enter your email address',
          required: true
        },
        {
          name: 'phoneNumber',
          label: 'Phone Number',
          type: 'tel',
          placeholder: 'Enter your phone number',
          required: true
        },
        {
          name: 'address',
          label: 'Address',
          type: 'text',
          placeholder: 'Enter your address',
          required: true
        },
        {
          name: 'city',
          label: 'City',
          type: 'select',
          placeholder: 'Select City',
          required: true,
          options: [
            { value: 'london', label: 'London' },
            { value: 'manchester', label: 'Manchester' },
            { value: 'birmingham', label: 'Birmingham' },
            { value: 'leeds', label: 'Leeds' }
          ]
        },
        {
          name: 'stateProvince',
          label: 'State/Province',
          type: 'select',
          placeholder: 'Select state/province',
          required: true,
          options: [
            { value: 'england', label: 'England' },
            { value: 'scotland', label: 'Scotland' },
            { value: 'wales', label: 'Wales' },
            { value: 'northernIreland', label: 'Northern Ireland' }
          ]
        },
        {
          name: 'postalCode',
          label: 'Postal Code',
          type: 'text',
          placeholder: 'Enter your postal code',
          required: true
        },
        {
          name: 'country',
          label: 'Country',
          type: 'select',
          placeholder: 'Select Country',
          required: true,
          options: [
            { value: 'uk', label: 'United Kingdom' },
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'au', label: 'Australia' }
          ]
        }
      ]
    }
  ]

  // Service-specific steps
  const serviceSteps = {
    cleaning: {
      oneoff: [
        // {
        //   title: "Personal Information",
        //   fields: [
        //     {
        //       name: "fullName",
        //       label: "Full Name",
        //       type: "text",
        //       placeholder: "Enter your full name",
        //       required: true
        //     },
        //     {
        //       name: "email",
        //       label: "Email Address",
        //       type: "email",
        //       placeholder: "Enter your email address",
        //       required: true
        //     },
        //     {
        //       name: "phoneNumber",
        //       label: "Phone Number",
        //       type: "tel",
        //       placeholder: "Enter your phone number",
        //       required: true
        //     },
        //     {
        //       name: "address",
        //       label: "Address",
        //       type: "text",
        //       placeholder: "Enter your address",
        //       required: true
        //     },
        //     {
        //       name: "city",
        //       label: "City",
        //       type: "select",
        //       placeholder: "Select City",
        //       required: true,
        //       options: [
        //         { value: "london", label: "London" },
        //         { value: "manchester", label: "Manchester" },
        //         { value: "birmingham", label: "Birmingham" },
        //         { value: "leeds", label: "Leeds" }
        //       ]
        //     },
        //     {
        //       name: "stateProvince",
        //       label: "State/Province",
        //       type: "select",
        //       placeholder: "Select state/province",
        //       required: true,
        //       options: [
        //         { value: "england", label: "England" },
        //         { value: "scotland", label: "Scotland" },
        //         { value: "wales", label: "Wales" },
        //         { value: "northernIreland", label: "Northern Ireland" }
        //       ]
        //     },
        //     {
        //       name: "postalCode",
        //       label: "Postal Code",
        //       type: "text",
        //       placeholder: "Enter your postal code",
        //       required: true
        //     },
        //     {
        //       name: "country",
        //       label: "Country",
        //       type: "select",
        //       placeholder: "Select Country",
        //       required: true,
        //       options: [
        //         { value: "uk", label: "United Kingdom" },
        //         { value: "us", label: "United States" },
        //         { value: "ca", label: "Canada" },
        //         { value: "au", label: "Australia" }
        //       ]
        //     }
        //   ]
        // },
        {
          title: 'Cleaning Service Details',
          sections: [
            {
              fields: [
                {
                  name: 'cleaningType',
                  label: 'Type of Cleaning',
                  type: 'select',
                  required: true,
                  placeholder: 'Select the type of cleaning',
                  options: [
                    {
                      value: 'general',
                      label:
                        'General Cleaning (Surface dusting, vacuuming, mopping, and sanitizing)'
                    },
                    { value: 'deep', label: 'Deep Cleaning' },
                    { value: 'move-in', label: 'Move-in/Move-out Cleaning' },
                    {
                      value: 'post-construction',
                      label: 'Post-Construction Cleaning'
                    },
                    { value: 'other', label: 'Other' }
                  ]
                }
              ]
            },
            {
              conditions: [{ field: 'cleaningType', value: 'other' }],
              fields: [
                {
                  name: 'otherCleaningType',
                  label: 'Please specify other cleaning type',
                  type: 'text',
                  placeholder: 'Enter the specific cleaning type',
                  required: true
                }
              ]
            },
            {
              fields: [
                {
                  name: 'propertyType',
                  label: 'Property Type',
                  type: 'radio-group',
                  required: true,
                  inline: true,
                  options: [
                    {
                      value: 'apartment',
                      label: 'Apartment',

                      subFields: [
                        {
                          name: 'specificAreas',
                          label:
                            'Specific Areas to Clean (Apartments & Houses)',
                          description:
                            'Check all that apply based on your property type',
                          type: 'checkbox-group',
                          options: [
                            {
                              name: 'bedroom',
                              value: '',
                              label: 'Bedroom (Sweeping, Mopping, Vacuuming)',
                              subFields: [
                                {
                                  name: 'bedroomCount',
                                  label: 'Number of bedrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'bedroomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'otherRooms',
                              value: '',
                              label:
                                'Other rooms (Sweeping, Mopping, Vacuuming)',
                              subFields: [
                                {
                                  name: 'otherRoomsCount',
                                  label: 'Number of other rooms',
                                  type: 'number',
                                  value: '',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'otherRoomsFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  value: '',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'walls',
                              label: 'Walls & Baseboards',
                              value: ''
                            },
                            {
                              name: 'windows',
                              label: 'Windows & Glass Surfaces',
                              value: ''
                            },
                            {
                              name: 'kitchen',
                              label:
                                'Kitchen (Countertops, Appliances, Sink, etc.)',
                              subFields: [
                                {
                                  name: 'kitchenCount',
                                  label: 'Number of kitchens',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'kitchenFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'cabinets',
                              label: 'Inside Cabinets & Cupboards'
                            },
                            {
                              name: 'bathrooms',
                              label: 'Bathrooms (Tiles, Showers, Toilets)',
                              subFields: [
                                {
                                  name: 'bathroomCount',
                                  label: 'Number of bathrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'bathroomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            { name: 'carpet', label: 'Carpet & Upholstery' },
                            { name: 'balcony', label: 'Balcony/Patio' },
                            {
                              name: 'other',
                              label: 'Other',
                              subFields: [
                                {
                                  name: 'otherAreaDescription',
                                  label: 'Please specify',
                                  type: 'text',
                                  placeholder: 'Describe the area',
                                  required: true
                                },
                                {
                                  name: 'otherAreaCount',
                                  label: 'Count',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      value: 'house',
                      label: 'House',
                      subFields: [
                        {
                          name: 'specificAreas',
                          label:
                            'Specific Areas to Clean (Apartments & Houses)',
                          description:
                            'Check all that apply based on your property type',
                          type: 'checkbox-group',
                          options: [
                            {
                              name: 'bedroom',
                              value: '',
                              label: 'Bedroom (Sweeping, Mopping, Vacuuming)',
                              subFields: [
                                {
                                  name: 'bedroomCount',
                                  label: 'Number of bedrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'bedroomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'otherRooms',
                              value: '',
                              label:
                                'Other rooms (Sweeping, Mopping, Vacuuming)',
                              subFields: [
                                {
                                  name: 'otherRoomsCount',
                                  label: 'Number of other rooms',
                                  type: 'number',
                                  value: '',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'otherRoomsFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  value: '',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'walls',
                              label: 'Walls & Baseboards',
                              value: ''
                            },
                            {
                              name: 'windows',
                              label: 'Windows & Glass Surfaces',
                              value: ''
                            },
                            {
                              name: 'kitchen',
                              label:
                                'Kitchen (Countertops, Appliances, Sink, etc.)',
                              subFields: [
                                {
                                  name: 'kitchenCount',
                                  label: 'Number of kitchens',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'kitchenFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'cabinets',
                              label: 'Inside Cabinets & Cupboards'
                            },
                            {
                              name: 'bathrooms',
                              label: 'Bathrooms (Tiles, Showers, Toilets)',
                              subFields: [
                                {
                                  name: 'bathroomCount',
                                  label: 'Number of bathrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'bathroomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            { name: 'carpet', label: 'Carpet & Upholstery' },
                            { name: 'balcony', label: 'Balcony/Patio' },
                            {
                              name: 'other',
                              label: 'Other',
                              subFields: [
                                {
                                  name: 'otherAreaDescription',
                                  label: 'Please specify',
                                  type: 'text',
                                  placeholder: 'Describe the area',
                                  required: true
                                },
                                {
                                  name: 'otherAreaCount',
                                  label: 'Count',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      value: 'office',
                      label: 'Office',
                      subFields: [
                        {
                          name: 'specificAreas',
                          label: 'Specific Areas to Clean (Office)',
                          description:
                            'Check all that apply based on your property type',
                          type: 'checkbox-group',
                          options: [
                            {
                              name: 'surface',
                              value: '',
                              label: 'Work Desks & Surfaces'
                            },
                            {
                              name: 'floors',
                              label: 'Floors (Vacuuming, Mopping)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfFloors',
                                  label: 'Number of floors',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'floorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'breakRooms',
                              label: 'Windows & Glass Partitions',
                              value: ''
                            },
                            {
                              name: 'restrooms',
                              label: 'Restrooms (Toilets, Sinks, Mirrors)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfRestrooms',
                                  label: 'Number of Restrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'restRoomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'kitchen',
                              label:
                                'Kitchen/Break Room (Appliances, Counters)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfKitchens',
                                  label: 'Number of Kitchens',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'kitchenFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'meetingRooms',
                              label: 'Meeting/Conference Rooms',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfMeetingRooms',
                                  label: 'Number of Meeting Rooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'meetingRoomsFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'airVents',
                              label: 'Air Vents & Light Fixtures',
                              value: ''
                            },
                            {
                              name: 'commonAreas',
                              label: 'Common Areas (Lobbies, Waiting Areas)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfCommonAreas',
                                  label: 'Number of Common Areas',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'commonAreasFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'other',
                              label: 'Other',
                              value: '',
                              subFields: [
                                {
                                  name: 'otherAreas',
                                  label: 'Please specify',
                                  type: 'text',

                                  required: true
                                },
                                {
                                  name: 'otherAreasCount',
                                  label: 'Count',
                                  type: 'number',
                                  min: 0,
                                  required: true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      value: 'commercial',
                      label: 'Commercial Space',
                      subFields: [
                        {
                          name: 'specificAreas',
                          label: 'Specific Areas to Clean (Commercial Space)',
                          description:
                            'Check all that apply based on your property type',
                          type: 'checkbox-group',
                          options: [
                            {
                              name: 'floors',
                              value: '',
                              label:
                                'Floors (Deep Cleaning, Polishing, Waxing)',
                              subFields: [
                                {
                                  name: 'numberOfFloors',
                                  label: 'Number of floors',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'floorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },

                            {
                              name: 'walls',
                              label: 'Walls & Baseboards',
                              value: ''
                            },
                            {
                              name: 'breakRooms',
                              label: 'Windows & Glass Partitions',
                              value: ''
                            },
                            {
                              name: 'shelvingAreas',
                              label: 'Shelving & Display Areas',
                              value: '',
                              subFields: [
                                {
                                  name: 'shelvingFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  full: true,
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'highTrafficAreas',
                              label: 'High-Traffic Areas (Entrances, Hallways)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfHighTrafficAreas',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  full: true,
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'restrooms',
                              label:
                                'Restrooms (Toilets, Urinals, Sinks, Mirrors)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfRestrooms',
                                  label: 'Number of Restrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'meetingRoomsFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'breakArea',
                              label: 'Kitchen/Break Area',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfKitchens',
                                  label: 'Number of Kitchens',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'kitchenFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'warehouseAreas',
                              label: 'Warehouse/Storage Areas',
                              value: '',
                              subFields: [
                                {
                                  name: 'warehouseFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  full: true,
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'other',
                              label: 'Other',
                              value: '',
                              subFields: [
                                {
                                  name: 'otherAreas',
                                  label: 'Please specify',
                                  type: 'text',

                                  required: true
                                },
                                {
                                  name: 'otherAreasCount',
                                  label: 'Count',
                                  type: 'number',
                                  min: 0,
                                  required: true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      value: 'other',
                      label: 'Other',
                      subFields: [
                        {
                          name: 'otherPropertyType',
                          label: 'Please specify the property type',
                          type: 'text',
                          placeholder: 'Enter the specific property type',
                          required: true
                        },
                        {
                          name: 'roomTypes',
                          type: 'room-type'
                        }
                      ]
                    }
                  ]
                }
              ]
            },

            {
              fields: [
                {
                  label: 'Additional Property Details',
                  description:
                    'Please provide any additional details about your property.',
                  type: 'label'
                },
                {
                  name: 'totalFloorArea',
                  label: 'Total Floor Area (in m²)',
                  type: 'number',
                  min: 0,
                  step: 0.1,
                  required: true
                },
                {
                  name: 'ceilingHeight',
                  label: 'Ceiling Height',
                  type: 'radio-group',
                  inline: true,
                  required: true,
                  options: [
                    { value: 'standard', label: 'Standard (2.4m–2.7m)' },
                    { value: 'high', label: 'High (2.8m+)' }
                  ]
                },
                {
                  name: 'additionalDetails',
                  label: 'Any Other Important Property Details?',
                  type: 'textarea',
                  placeholder: 'Please describe the property details...',
                  rows: 5
                }
              ]
            }
          ]
        },
        {
          title: 'Location & Availability',
          inline: true,
          fields: [
            {
              name: 'serviceAddress',
              label: 'Service Address',
              type: 'text',
              placeholder: 'Enter your address',
              required: true
            },
            {
              name: 'serviceCity',
              label: 'City',
              type: 'select',
              placeholder: 'Select City',
              required: true,
              options: [
                { value: 'london', label: 'London' },
                { value: 'manchester', label: 'Manchester' },
                { value: 'birmingham', label: 'Birmingham' },
                { value: 'leeds', label: 'Leeds' }
              ]
            },
            {
              name: 'serviceStateProvince',
              label: 'State/Province',
              type: 'select',
              placeholder: 'Select state/province',
              required: true,
              options: [
                { value: 'england', label: 'England' },
                { value: 'scotland', label: 'Scotland' },
                { value: 'wales', label: 'Wales' },
                { value: 'northernIreland', label: 'Northern Ireland' }
              ]
            },
            {
              name: 'servicePostalCode',
              label: 'Postal Code',
              type: 'text',
              placeholder: 'Enter your postal code',
              required: true
            },
            {
              name: 'serviceCountry',
              label: 'Country',
              type: 'select',
              placeholder: 'Select Country',
              required: true,
              options: [
                { value: 'uk', label: 'United Kingdom' },
                { value: 'us', label: 'United States' },
                { value: 'ca', label: 'Canada' },
                { value: 'au', label: 'Australia' }
              ]
            },
            {
              name: 'preferredDate',
              label: 'Preferred Cleaning Date',
              type: 'date',
              min: new Date().toISOString().split('T')[0],
              required: true
            },
            {
              name: 'preferredTimeSlot',
              label: 'Preferred Time Slot',
              type: 'radio-group',
              inline: true,
              required: true,
              options: [
                { value: 'morning', label: 'Morning' },
                { value: 'afternoon', label: 'Afternoon' },
                { value: 'evening', label: 'Evening' }
              ]
            },
            {
              name: 'presentDuringCleaning',
              label: 'Will you be present during the cleaning?',
              type: 'radio-group',
              inline: true,
              required: true,
              options: [
                { value: 'yes', label: 'Yes, I will be available' },
                { value: 'no', label: 'No, but I will arrange access' }
              ]
            },
            {
              name: 'parkingAvailable',
              label: 'Is there parking available for our team?',
              type: 'radio-group',
              inline: true,
              required: true,
              options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ]
            },
            {
              name: 'accessInstructions',
              label: 'Are there any special instructions for access?',
              type: 'textarea',
              placeholder:
                'Enter any access instructions, security codes, key pick up information, etc...',
              rows: 3
            }
          ]
        },
        {
          title: 'Condition & Special Requests',
          fields: [
            {
              name: 'currentCondition',
              label: 'How would you describe the current condition?',
              type: 'radio-group',
              required: true,
              options: [
                {
                  value: 'lightly',
                  label: 'Lightly Used (Minimal dust and dirt)'
                },
                {
                  value: 'moderately',
                  label:
                    'Moderately Dirty (Visible dirt, minor stains, buildup)'
                },
                {
                  value: 'heavily',
                  label:
                    'Heavily Soiled (Deep stains, grease, grime, neglected space)'
                }
              ]
            },
            {
              name: 'specialAttentionItems',
              label:
                'Are there any specific areas or items that need special attention?',
              type: 'radio-group',
              inline: true,
              options: [
                { value: 'windows', label: 'Windows' },
                { value: 'walls', label: 'Walls' },
                { value: 'carpet', label: 'Carpet/Upholstery' },
                { value: 'cabinets', label: 'Inside Cabinets' },
                {
                  value: 'other',
                  label: 'Other',
                  subFields: [
                    {
                      name: 'otherSpecialAttention',
                      label: 'Please specify the area or items',
                      type: 'text',
                      placeholder: 'Enter the specific area or items..',
                      required: true
                    }
                  ]
                }
              ]
            },

            {
              name: 'pets',
              label: 'Do you have pets?',
              type: 'radio-group',
              required: true,
              inline: true,
              options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ]
            },
            {
              name: 'additionalRequests',
              label: 'Additional Requests or Special Instructions',
              type: 'textarea',
              placeholder:
                'Enter any additional requests or special instructions...',
              rows: 4
            },
            {
              name: 'urgency',
              label: 'Indicate the Urgency of your Service Request',
              type: 'radio-group',
              isList: true,
              required: true,
              options: [
                {
                  value: 'emergency',

                  label: 'Emergency',
                  description:
                    'Immediate action required. For urgent cleaning (e.g., hazardous spills, urgent sanitization): service will begin within 3-6 hours'
                },
                {
                  value: 'priority',
                  label: 'Priority',
                  description:
                    'High priority service. The service will be scheduled and started within 24 hours'
                },
                {
                  value: 'standard',
                  label: 'Standard',
                  description:
                    'Routine maintenance with flexible scheduling. The service will be scheduled within 48-72 hours (2-3 working days)'
                }
              ]
            }
          ]
        },
        {
          title: 'Upload Pictures or Videos',

          sections: [
            {
              description:
                'For accurate pricing and service planning, please upload clear images/videos of the area.',
                type: 'submission',
                fields: [
                {
                  name: 'termsAgreed',
                  label: '',
                  type: 'checkbox-group',
                  inline: true,
                  required: true,
                  full: true,
                  options: [
                    {
                      value: 'terms',
                      name: 'terms',
                      label:
                        'I confirm that the details provided are accurate, and I agree to the terms of service.'
                    },
                    
                  ]
                }
              ]
            }
          ]
        }
      ],
      subscription: [
        // Subscription-specific steps for cleaning service
        {
          title: 'Subscription Plan Selection',
          description: 'Choose your preferred cleaning frequency',
          fields: [
            {
              name: 'subscriptionPlan',
              label: '',
              type: 'radio-group',
              isList: true,
              required: true,
              options: [
                {
                  value: 'monthly',
                  label: 'Monthly',
                  description: '12 cleanings per year'
                },
                {
                  value: 'quarterly',
                  label: 'Quarterly',
                  description: '4 cleanings per year'
                },
                {
                  value: 'biannually',
                  label: 'Biannually',
                  description: '2 cleanings per year'
                },
                {
                  value: 'annually',
                  label: 'Annually',
                  description: '1 cleaning per year'
                }
              ]
            }
          ]
        },
        {
          title: 'Cleaning Service Details',
          sections: [
            {
              fields: [
                {
                  name: 'cleaningType',
                  label: 'Type of Cleaning',
                  type: 'select',
                  required: true,
                  placeholder: 'Select the type of cleaning',
                  options: [
                    {
                      value: 'general',
                      label:
                        'General Cleaning (Surface dusting, vacuuming, mopping, and sanitizing)'
                    },
                    { value: 'deep', label: 'Deep Cleaning' },
                    { value: 'move-in', label: 'Move-in/Move-out Cleaning' },
                    {
                      value: 'post-construction',
                      label: 'Post-Construction Cleaning'
                    },
                    { value: 'other', label: 'Other' }
                  ]
                }
              ]
            },
            {
              conditions: [{ field: 'cleaningType', value: 'other' }],
              fields: [
                {
                  name: 'otherCleaningType',
                  label: 'Please specify other cleaning type',
                  type: 'text',
                  placeholder: 'Enter the specific cleaning type',
                  required: true
                }
              ]
            },
            {
              fields: [
                {
                  name: 'propertyType',
                  label: 'Property Type',
                  type: 'radio-group',
                  required: true,
                  inline: true,
                  options: [
                    {
                      value: 'apartment',
                      label: 'Apartment',

                      subFields: [
                        {
                          name: 'specificAreas',
                          label:
                            'Specific Areas to Clean (Apartments & Houses)',
                          description:
                            'Check all that apply based on your property type',
                          type: 'checkbox-group',
                          options: [
                            {
                              name: 'bedroom',
                              value: '',
                              label: 'Bedroom (Sweeping, Mopping, Vacuuming)',
                              subFields: [
                                {
                                  name: 'bedroomCount',
                                  label: 'Number of bedrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'bedroomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'otherRooms',
                              value: '',
                              label:
                                'Other rooms (Sweeping, Mopping, Vacuuming)',
                              subFields: [
                                {
                                  name: 'otherRoomsCount',
                                  label: 'Number of other rooms',
                                  type: 'number',
                                  value: '',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'otherRoomsFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  value: '',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'walls',
                              label: 'Walls & Baseboards',
                              value: ''
                            },
                            {
                              name: 'windows',
                              label: 'Windows & Glass Surfaces',
                              value: ''
                            },
                            {
                              name: 'kitchen',
                              label:
                                'Kitchen (Countertops, Appliances, Sink, etc.)',
                              subFields: [
                                {
                                  name: 'kitchenCount',
                                  label: 'Number of kitchens',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'kitchenFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'cabinets',
                              label: 'Inside Cabinets & Cupboards'
                            },
                            {
                              name: 'bathrooms',
                              label: 'Bathrooms (Tiles, Showers, Toilets)',
                              subFields: [
                                {
                                  name: 'bathroomCount',
                                  label: 'Number of bathrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'bathroomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            { name: 'carpet', label: 'Carpet & Upholstery' },
                            { name: 'balcony', label: 'Balcony/Patio' },
                            {
                              name: 'other',
                              label: 'Other',
                              subFields: [
                                {
                                  name: 'otherAreaDescription',
                                  label: 'Please specify',
                                  type: 'text',
                                  placeholder: 'Describe the area',
                                  required: true
                                },
                                {
                                  name: 'otherAreaCount',
                                  label: 'Count',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      value: 'house',
                      label: 'House',
                      subFields: [
                        {
                          name: 'specificAreas',
                          label:
                            'Specific Areas to Clean (Apartments & Houses)',
                          description:
                            'Check all that apply based on your property type',
                          type: 'checkbox-group',
                          options: [
                            {
                              name: 'bedroom',
                              value: '',
                              label: 'Bedroom (Sweeping, Mopping, Vacuuming)',
                              subFields: [
                                {
                                  name: 'bedroomCount',
                                  label: 'Number of bedrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'bedroomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'otherRooms',
                              value: '',
                              label:
                                'Other rooms (Sweeping, Mopping, Vacuuming)',
                              subFields: [
                                {
                                  name: 'otherRoomsCount',
                                  label: 'Number of other rooms',
                                  type: 'number',
                                  value: '',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'otherRoomsFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  value: '',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'walls',
                              label: 'Walls & Baseboards',
                              value: ''
                            },
                            {
                              name: 'windows',
                              label: 'Windows & Glass Surfaces',
                              value: ''
                            },
                            {
                              name: 'kitchen',
                              label:
                                'Kitchen (Countertops, Appliances, Sink, etc.)',
                              subFields: [
                                {
                                  name: 'kitchenCount',
                                  label: 'Number of kitchens',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'kitchenFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'cabinets',
                              label: 'Inside Cabinets & Cupboards'
                            },
                            {
                              name: 'bathrooms',
                              label: 'Bathrooms (Tiles, Showers, Toilets)',
                              subFields: [
                                {
                                  name: 'bathroomCount',
                                  label: 'Number of bathrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'bathroomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            { name: 'carpet', label: 'Carpet & Upholstery' },
                            { name: 'balcony', label: 'Balcony/Patio' },
                            {
                              name: 'other',
                              label: 'Other',
                              subFields: [
                                {
                                  name: 'otherAreaDescription',
                                  label: 'Please specify',
                                  type: 'text',
                                  placeholder: 'Describe the area',
                                  required: true
                                },
                                {
                                  name: 'otherAreaCount',
                                  label: 'Count',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      value: 'office',
                      label: 'Office',
                      subFields: [
                        {
                          name: 'specificAreas',
                          label: 'Specific Areas to Clean (Office)',
                          description:
                            'Check all that apply based on your property type',
                          type: 'checkbox-group',
                          options: [
                            {
                              name: 'surface',
                              value: '',
                              label: 'Work Desks & Surfaces'
                            },
                            {
                              name: 'floors',
                              label: 'Floors (Vacuuming, Mopping)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfFloors',
                                  label: 'Number of floors',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'floorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'breakRooms',
                              label: 'Windows & Glass Partitions',
                              value: ''
                            },
                            {
                              name: 'restrooms',
                              label: 'Restrooms (Toilets, Sinks, Mirrors)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfRestrooms',
                                  label: 'Number of Restrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'restRoomFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'kitchen',
                              label:
                                'Kitchen/Break Room (Appliances, Counters)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfKitchens',
                                  label: 'Number of Kitchens',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'kitchenFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'meetingRooms',
                              label: 'Meeting/Conference Rooms',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfMeetingRooms',
                                  label: 'Number of Meeting Rooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'meetingRoomsFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'airVents',
                              label: 'Air Vents & Light Fixtures',
                              value: ''
                            },
                            {
                              name: 'commonAreas',
                              label: 'Common Areas (Lobbies, Waiting Areas)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfCommonAreas',
                                  label: 'Number of Common Areas',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'commonAreasFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'other',
                              label: 'Other',
                              value: '',
                              subFields: [
                                {
                                  name: 'otherAreas',
                                  label: 'Please specify',
                                  type: 'text',

                                  required: true
                                },
                                {
                                  name: 'otherAreasCount',
                                  label: 'Count',
                                  type: 'number',
                                  min: 0,
                                  required: true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      value: 'commercial',
                      label: 'Commercial Space',
                      subFields: [
                        {
                          name: 'specificAreas',
                          label: 'Specific Areas to Clean (Commercial Space)',
                          description:
                            'Check all that apply based on your property type',
                          type: 'checkbox-group',
                          options: [
                            {
                              name: 'floors',
                              value: '',
                              label:
                                'Floors (Deep Cleaning, Polishing, Waxing)',
                              subFields: [
                                {
                                  name: 'numberOfFloors',
                                  label: 'Number of floors',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'floorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },

                            {
                              name: 'walls',
                              label: 'Walls & Baseboards',
                              value: ''
                            },
                            {
                              name: 'breakRooms',
                              label: 'Windows & Glass Partitions',
                              value: ''
                            },
                            {
                              name: 'shelvingAreas',
                              label: 'Shelving & Display Areas',
                              value: '',
                              subFields: [
                                {
                                  name: 'shelvingFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  full: true,
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'highTrafficAreas',
                              label: 'High-Traffic Areas (Entrances, Hallways)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfHighTrafficAreas',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  full: true,
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'restrooms',
                              label:
                                'Restrooms (Toilets, Urinals, Sinks, Mirrors)',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfRestrooms',
                                  label: 'Number of Restrooms',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'meetingRoomsFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'breakArea',
                              label: 'Kitchen/Break Area',
                              value: '',
                              subFields: [
                                {
                                  name: 'numberOfKitchens',
                                  label: 'Number of Kitchens',
                                  type: 'number',
                                  min: 1,
                                  required: true
                                },
                                {
                                  name: 'kitchenFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'warehouseAreas',
                              label: 'Warehouse/Storage Areas',
                              value: '',
                              subFields: [
                                {
                                  name: 'warehouseFloorArea',
                                  label: 'Floor Area (in m²)',
                                  type: 'number',
                                  full: true,
                                  min: 0,
                                  step: 0.1,
                                  required: true
                                }
                              ]
                            },
                            {
                              name: 'other',
                              label: 'Other',
                              value: '',
                              subFields: [
                                {
                                  name: 'otherAreas',
                                  label: 'Please specify',
                                  type: 'text',

                                  required: true
                                },
                                {
                                  name: 'otherAreasCount',
                                  label: 'Count',
                                  type: 'number',
                                  min: 0,
                                  required: true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      value: 'other',
                      label: 'Other',
                      subFields: [
                        {
                          name: 'otherPropertyType',
                          label: 'Please specify the property type',
                          type: 'text',
                          placeholder: 'Enter the specific property type',
                          required: true
                        },
                        {
                          name: 'roomTypes',
                          type: 'room-type'
                        }
                      ]
                    }
                  ]
                }
              ]
            },

            {
              fields: [
                {
                  label: 'Additional Property Details',
                  description:
                    'Please provide any additional details about your property.',
                  type: 'label'
                },
                {
                  name: 'totalFloorArea',
                  label: 'Total Floor Area (in m²)',
                  type: 'number',
                  min: 0,
                  step: 0.1,
                  required: true
                },
                {
                  name: 'ceilingHeight',
                  label: 'Ceiling Height',
                  type: 'radio-group',
                  inline: true,
                  required: true,
                  options: [
                    { value: 'standard', label: 'Standard (2.4m–2.7m)' },
                    { value: 'high', label: 'High (2.8m+)' }
                  ]
                },
                {
                  name: 'additionalDetails',
                  label: 'Any Other Important Property Details?',
                  type: 'textarea',
                  placeholder: 'Please describe the property details...',
                  rows: 5
                }
              ]
            }
          ]
        },
        {
          title: 'Location & Availability',
          inline: true,
          fields: [
            {
              name: 'serviceAddress',
              label: 'Service Address',
              type: 'text',
              placeholder: 'Enter your address',
              required: true
            },
            {
              name: 'serviceCity',
              label: 'City',
              type: 'select',
              placeholder: 'Select City',
              required: true,
              options: [
                { value: 'london', label: 'London' },
                { value: 'manchester', label: 'Manchester' },
                { value: 'birmingham', label: 'Birmingham' },
                { value: 'leeds', label: 'Leeds' }
              ]
            },
            {
              name: 'serviceStateProvince',
              label: 'State/Province',
              type: 'select',
              placeholder: 'Select state/province',
              required: true,
              options: [
                { value: 'england', label: 'England' },
                { value: 'scotland', label: 'Scotland' },
                { value: 'wales', label: 'Wales' },
                { value: 'northernIreland', label: 'Northern Ireland' }
              ]
            },
            {
              name: 'servicePostalCode',
              label: 'Postal Code',
              type: 'text',
              placeholder: 'Enter your postal code',
              required: true
            },
            {
              name: 'serviceCountry',
              label: 'Country',
              type: 'select',
              full: true,
              placeholder: 'Select Country',
              required: true,
              options: [
                { value: 'uk', label: 'United Kingdom' },
                { value: 'us', label: 'United States' },
                { value: 'ca', label: 'Canada' },
                { value: 'au', label: 'Australia' }
              ]
            },
            {
              name: 'preferredCleaningDays',
              label: 'Preferred Cleaning Days (Choose at least one)',
              type: 'radio-group',
              inline: true,
              required: true,
              full: true,
              options: [
                { value: 'monday', label: 'Monday' },
                { value: 'tuesday', label: 'Tuesday' },
                { value: 'wednesday', label: 'Wednesday' },
                { value: 'thursday', label: 'Thursday' },
                { value: 'friday', label: 'Friday' },
                { value: 'saturday', label: 'Saturday' },
                { value: 'sunday', label: 'Sunday' }
              ]
            },
            {
              name: 'preferredSpecificDate',
              label: 'Specific Preferred Date(s) for Cleaning',
              type: 'checkbox-group',
              inline: true,
              required: true,
              full: true,
              options: [
                {
                  value: 'iPrefer',
                  label: 'I prefer to be contacted to arrange a suitable date',
                  subFields: [
                    {
                      name: 'preferredDate',
                      label: 'Preferred Cleaning Date',
                      type: 'date',
                      full: true,
                      min: new Date().toISOString().split('T')[0],
                      required: true
                    }
                  ]
                }
              ]
            },

            {
              name: 'preferredTimeSlot',
              label: 'Preferred Time Slot',
              type: 'radio-group',
              inline: true,
              required: true,
              options: [
                { value: 'morning', label: 'Morning' },
                { value: 'afternoon', label: 'Afternoon' },
                { value: 'evening', label: 'Evening' }
              ]
            },
            {
              name: 'presentDuringCleaning',
              label: 'Will you be present during the cleaning?',
              type: 'radio-group',
              inline: true,
              required: true,
              options: [
                { value: 'yes', label: 'Yes, I will be available' },
                { value: 'no', label: 'No, but I will arrange access' }
              ]
            },
            {
              name: 'parkingAvailable',
              label: 'Is there parking available for our team?',
              type: 'radio-group',
              inline: true,
              required: true,
              options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ]
            },
            {
              name: 'accessInstructions',
              label: 'Are there any special instructions for access?',
              type: 'textarea',
              placeholder:
                'Enter any access instructions, security codes, key pick up information, etc...',
              rows: 3
            }
          ]
        },
        {
          title: 'Condition & Special Requests',
          fields: [
            {
              name: 'currentCondition',
              label: 'How would you describe the current condition?',
              type: 'radio-group',
              required: true,
              options: [
                {
                  value: 'lightly',
                  label: 'Lightly Used (Minimal dust and dirt)'
                },
                {
                  value: 'moderately',
                  label:
                    'Moderately Dirty (Visible dirt, minor stains, buildup)'
                },
                {
                  value: 'heavily',
                  label:
                    'Heavily Soiled (Deep stains, grease, grime, neglected space)'
                }
              ]
            },
            {
              name: 'specialAttentionItems',
              label:
                'Are there any specific areas or items that need special attention?',
              type: 'radio-group',
              inline: true,
              options: [
                { value: 'windows', label: 'Windows' },
                { value: 'walls', label: 'Walls' },
                { value: 'carpet', label: 'Carpet/Upholstery' },
                { value: 'cabinets', label: 'Inside Cabinets' },
                {
                  value: 'other',
                  label: 'Other',
                  subFields: [
                    {
                      name: 'otherSpecialAttention',
                      label: 'Please specify the area or items',
                      type: 'text',
                      placeholder: 'Enter the specific area or items..',
                      required: true
                    }
                  ]
                }
              ]
            },

            {
              name: 'pets',
              label: 'Do you have pets?',
              type: 'radio-group',
              required: true,
              inline: true,
              options: [
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ]
            },
            {
              name: 'additionalRequests',
              label: 'Additional Requests or Special Instructions',
              type: 'textarea',
              placeholder:
                'Enter any additional requests or special instructions...',
              rows: 4
            }
          ]
        },
        {
          title: 'Payment & Subscription Details',
          fields: [
            {
              name: 'preferredPaymentMethod',
              label: 'Preferred Payment Method',
              type: 'radio-group',
              required: true,
              options: [
                {
                  value: 'directDebit',
                  label: 'Direct Debit'
                },
                {
                  value: 'creditDebitCard',
                  label: 'Credit/Debit Card'
                },
                {
                  value: 'bankTransfer',
                  label: 'Bank Transfer'
                },
                {
                  value: 'other',
                  label: 'Other',
                  subFields: [
                    {
                      name: 'otherPaymentMethod',
                      label: 'Please specify other payment method',
                      type: 'text',
                      placeholder: 'Enter the payment method',
                      required: true
                    }
                  ]
                }
              ]
            },
            {
              name: 'subscriptionStartDate',
              label: 'Subscription Start Date',
              type: 'date',
              full: true,
              min: new Date().toISOString().split('T')[0],
              required: true
            },
            {
              name: 'subscriptionAutoRenewal',
              label: 'Would you like to set up auto-renewal?',
              type: 'radio-group',
              options: [
                { value: 'Yes', label: 'Yes, auto-renew my subscription' },
                { value: 'No', label: 'No, I will manually renew' }
              ]
            }
          ]
        },
        {
          title: 'Upload Pictures or Videos',
          sections: [
            {
              description:
                'For accurate pricing and service planning, please upload clear images/videos of the area.',
              type: 'submission',
              stepNumber: 5, // This will be used to display the step number in the title
              isSubscription: true, // Set to true for subscription forms
              fields: [
                {
                  name: 'termsAgreed',
                  label: '',
                  type: 'checkbox-group',
                  inline: true,
                  required: true,
                  full: true,
                  options: [
                    {
                      value: 'terms',
                      name: 'terms',
                      label:
                        'I confirm that the details provided are accurate, and I agree to the terms of service.'
                    },
                    {
                      value: 'acknowledge',
                      name: 'acknowledge',
                      label:
                        ' I acknowledge that I can cancel my subscription with at least 7  days’ notice before the next billing cycle.'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    garden: {
      oneoff: [
        {
          title: 'Garden & Lawn Maintenance Service Details',
          fields: [
            {
              name: 'gardenServices',
              label: 'Select the services you require',
              description: 'Check all that apply based on your preferences',
              type: 'checkbox-group',
              options: [
                { value: 'mowing', label: 'Lawn Mowing & Edging' },
                { value: 'weeding', label: 'Garden Weeding & Mulching' },
                { value: 'hedges', label: 'Hedge Trimming & Pruning' },
                { value: 'trees', label: 'Tree & Shrub Maintenance' },
                { value: 'cleanup', label: 'Seasonal Cleanup' },
                {
                  value: 'redesign',
                  label:
                    'Garden Redesign & Decoration (Includes specialist consultation, layout planning, and redecoration)'
                }
              ]
            },
            {
              name: 'propertyType',
              label: 'Property Type',
              type: 'radio-group',
              required: true,
              options: [
                { value: 'residential', label: 'Residential' },
                { value: 'commercial', label: 'Commercial' },
                { value: 'other', label: 'Other' }
              ]
            },
            {
              name: 'briefDescription',
              label: 'Brief Description of the Outdoor Space',
              type: 'textarea',
              placeholder:
                'Enter brief description of the outdoor space E.g., size, layout, current state of maintenance',
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
          title: 'Repair Service Details',
          fields: [
            {
              name: 'repairServices',
              label: 'Select the Repairs You Need',
              description: 'Check all that apply based on your preferences',
              type: 'checkbox-group',
              options: [
                {
                  value: 'plumbing',
                  label: 'Plumbing & Water Systems',
                  subOptions: [
                    { value: 'leaks', label: 'Leak Detection & Repair' },
                    { value: 'taps', label: 'Tap & Showerhead Replacement' },
                    {
                      value: 'blockage',
                      label: 'Pipe & Drain Blockage Clearing'
                    },
                    {
                      value: 'waterHeater',
                      label: 'Water Heater Repair/Installation'
                    },
                    { value: 'other', label: 'Other' }
                  ]
                },
                {
                  value: 'electrical',
                  label: 'Electrical & Lighting',
                  subOptions: [
                    {
                      value: 'powerOutage',
                      label: 'Power Outage Troubleshooting'
                    },
                    {
                      value: 'switches',
                      label: 'Switches, Sockets & Wiring Repair'
                    },
                    { value: 'lighting', label: 'Light Fixture Replacement' },
                    {
                      value: 'circuitBreaker',
                      label: 'Circuit Breaker Issues'
                    },
                    { value: 'other', label: 'Other' }
                  ]
                },
                {
                  value: 'structural',
                  label: 'Structural Repairs',
                  subOptions: [
                    { value: 'walls', label: 'Wall Cracks & Plastering' },
                    { value: 'roof', label: 'Roof & Gutter Repairs' },
                    { value: 'doors', label: 'Door & Window Repairs' },
                    {
                      value: 'flooring',
                      label: 'Flooring Repairs (Tiles, Wood, etc.)'
                    },
                    { value: 'other', label: 'Other' }
                  ]
                },
                {
                  value: 'hvac',
                  label: 'Heating & Cooling Systems',
                  subOptions: [
                    { value: 'radiator', label: 'Radiator Servicing & Repair' },
                    { value: 'boiler', label: 'Boiler Servicing & Repair' },
                    {
                      value: 'ac',
                      label: 'Air Conditioning Repair/Installation'
                    },
                    {
                      value: 'ventilation',
                      label: 'Ventilation System Cleaning'
                    },
                    { value: 'other', label: 'Other' }
                  ]
                },
                {
                  value: 'appliances',
                  label: 'Appliances & Fixtures',
                  subOptions: [
                    { value: 'washer', label: 'Washing Machine/Dryer Repair' },
                    { value: 'fridge', label: 'Fridge/Freezer Repair' },
                    { value: 'cooker', label: 'Gas/Electric Cooker Repair' },
                    { value: 'other', label: 'Other' }
                  ]
                }
              ]
            },
            {
              name: 'issueDescription',
              label: 'Describe the issue in detail',
              type: 'textarea',
              placeholder:
                'Please provide as much detail as possible about the issue...',
              required: true
            }
          ]
        },
        {
          title: 'Repair Condition & Urgency',
          fields: [
            {
              name: 'urgencyLevel',
              label: 'How urgent is this request?',
              type: 'radio-group',
              required: true,
              options: [
                {
                  value: 'preventive',
                  label: 'Preventive (Check-up & minor fixes)'
                },
                {
                  value: 'routine',
                  label: 'Routine (Needs fixing soon but not urgent)'
                },
                {
                  value: 'priority',
                  label: 'High Priority (Fix within 48 hours)'
                },
                {
                  value: 'emergency',
                  label: 'Emergency (Same-day or immediate response)'
                }
              ]
            },
            {
              name: 'troubleshootingDone',
              label: 'Troubleshooting Done Before Requesting Service',
              type: 'checkbox-group',
              options: [
                { value: 'powerSupply', label: 'Checked Power Supply' },
                { value: 'waterValve', label: 'Turned Off Water Valve' },
                { value: 'circuitBreaker', label: 'Reset Circuit Breaker' },
                { value: 'other', label: 'Other' }
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
  }

  // Combine common steps with service-specific steps
  return [...commonSteps, ...(serviceSteps[serviceType]?.[packageType] || [])]
}
