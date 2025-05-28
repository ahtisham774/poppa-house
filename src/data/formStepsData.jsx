// src/data/formStepsData.js
export const getFormSteps = (serviceType, packageType) => {
  // Common steps for all services
  const commonSteps = [
    {
      title: 'Personal Information',
      inline: false,
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
          type: 'address'
        }
      ]
    }
  ]

  const gardenServiceSteps = [
    {
      title: 'Garden & Lawn Maintenance Service Details',
      inline: true,
      sections: [
        {
          fields: [
            {
              name: 'gardenServices',
              label: 'Select the services you require',
              description: 'Check all that apply based on your preferences',
              type: 'checkbox-group',
              options: [
                {
                  value: 'mowing',
                  name: 'lawnMowing',
                  label: 'Lawn Mowing & Edging'
                },
                {
                  value: 'weeding',
                  name: 'weeding',
                  label: 'Garden Weeding & Mulching'
                },
                {
                  value: 'hedges',
                  name: 'hedgeTrimming',
                  label: 'Hedge Trimming & Pruning'
                },
                {
                  value: 'trees',
                  name: 'treeShrub',
                  label: 'Tree & Shrub Maintenance'
                },
                {
                  value: 'cleanup',
                  name: 'cleaning',
                  label: 'Seasonal Cleanup'
                },
                {
                  value: 'redesign',
                  name: 'redesign',
                  label:
                    'Garden Redesign & Decoration (Includes specialist consultation, layout planning, and redecoration)'
                }
              ]
            }
          ]
        },
        {
          title: 'Service Area Information',
          grid: 2,
          inline: false,
          fields: [
            {
              name: 'lawnSize',
              label: 'Lawn Size (in m²)',
              type: 'number',
              min: 1,
              required: true
            },
            {
              name: 'gardenArea',
              label: 'Garden Area (in m²)',
              type: 'number',
              min: 0,
              step: 0.1,
              required: true
            },
            {
              name: 'additionalGardenDetails',
              label: 'Additional Maintenance Requirements',
              type: 'textarea',
              placeholder: 'Describe any additional areas to be serviced',
              required: false,
              full: true
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
                  label: 'Residential'
                },
                {
                  value: 'commercial',
                  label: 'Commercial'
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
                      required: true,
                      full: true
                    }
                  ]
                }
              ]
            },
            {
              name: 'description',
              label: 'Brief Description of the Outdoor Space',
              type: 'textarea',
              placeholder: 'Please provide a brief description...',
              required: true,
              full: true
            }
          ]
        }
      ]
    },
    {
      title: 'Location & Availability',
      inline: false,
      fields: [
        {
          name: 'serviceAddress',
          type: 'address'
        },
        {
          name: 'preferredServiceDays',
          label: ' Preferred Service Date',
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
          name: 'likeUsToCall',
          label:
            'If you’re unsure of the best timing, would you like us to call  you to arrange a convenient date?',
          type: 'radio-group',
          full: true,
          required: true,
          options: [
            { value: 'yes', label: 'Yes, please call me to schedule' },
            { value: 'no', label: 'No, I have a preferred date/time' }
          ]
        }
      ]
    },
    {
      title: 'Condition & Special Requests',
      inline: true,
      fields: [
        {
          name: 'currentCondition',
          label:
            'How would you describe the current condition of your  garden/lawn?',
          type: 'radio-group',
          required: true,
          options: [
            {
              value: 'Well-Maintained',
              label: 'Well-Maintained'
            },
            {
              value: 'Moderately Overgrown',
              label: 'Moderately Overgrown'
            },
            {
              value: 'Neglected',
              label: 'Neglected/Needs Extensive Work'
            }
          ]
        },

        {
          name: 'additionalRequests',
          label: 'Special Instructions or Areas Needing Extra Attention',
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
              value: 'High Priority',

              label: 'High Priority',
              description:
                'Service will be scheduled and started within 24 hours'
            },

            {
              value: 'Standard',
              label: 'Standard',
              description:
                'Service will be scheduled within 48-72 hours (2-3 working days)'
            }
          ]
        }
      ]
    },
    {
      title: 'Upload Pictures or Videos (Optional but Recommended)',

      sections: [
        {
          description:
            'For accurate pricing and service planning, please upload  clear images/videos of the area.',
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
                    'I confirm that the details provided are accurate and agree to the  terms of service.'
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  // Service-specific steps
  const serviceSteps = {
    cleaning: {
      oneoff: [
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
          inline: false,
          fields: [
            {
              name: 'serviceAddress',
              type: 'address'
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
              full: true,
              placeholder:
                'Enter any access instructions, security codes, key pick up information, etc...',
              rows: 3
            }
          ]
        },
        {
          title: 'Condition & Special Requests',
          inline: true,
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
                    }
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
          inline: true,
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
          inline: false,
          fields: [
            {
              name: 'serviceAddress',
              type: 'address',
              placeholder: 'Enter your address',
              required: true
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
              full: true,
              placeholder:
                'Enter any access instructions, security codes, key pick up information, etc...',
              rows: 3
            }
          ]
        },
        {
          title: 'Condition & Special Requests',
          inline: true,
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
      oneoff: gardenServiceSteps,
      subscription: [
        // Subscription-specific steps for cleaning service
        {
          title: 'Subscription Plan Selection',
          description: 'Choose your preferred maintenance plan',
          inline: true,
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
                  description: '12 maintenance visits per year'
                },
                {
                  value: 'quarterly',
                  label: 'Quarterly',
                  description: '4 maintenance visits per year'
                },
                {
                  value: 'biannually',
                  label: 'Biannually',
                  description: '2 maintenance visits per year'
                },
                {
                  value: 'annually',
                  label: 'Annually',
                  description: '1 maintenance visits per year'
                }
              ]
            }
          ]
        },
        ...gardenServiceSteps
      ]
    },
    repair: {
      oneoff: [
        {
          title: 'Repair Service Details',
          sections: [
            {
              fields: [
                {
                  label: 'Select the Repairs You Need',
                  description: 'Check all that apply based on your preferences',
                  type: 'label'
                },
                {
                  label: (
                    <span className='flex items-center gap-2 my-4'>
                      <svg
                        width='17'
                        height='17'
                        viewBox='0 0 17 17'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M16 4.34638C16 4.80993 15.9005 5.26843 15.7076 5.69282C15.5148 6.11721 15.2329 6.49824 14.8797 6.81173C14.5266 7.12523 14.1099 7.36437 13.6562 7.51398C13.2024 7.6636 12.7215 7.72043 12.2438 7.68087C11.4163 7.6132 10.5026 7.73367 9.97506 8.35312L4.47463 14.8109C4.30112 15.0154 4.08525 15.1825 3.84091 15.3015C3.59657 15.4205 3.32917 15.4886 3.05594 15.5016C2.7827 15.5146 2.50968 15.4722 2.25444 15.377C1.9992 15.2818 1.7674 15.136 1.57396 14.9489C1.38051 14.7619 1.22972 14.5378 1.13128 14.291C1.03283 14.0442 0.988921 13.7802 1.00237 13.516C1.01582 13.2518 1.08633 12.9932 1.20936 12.757C1.33239 12.5207 1.50522 12.312 1.71672 12.1442L8.39538 6.82643C9.03602 6.31555 9.16061 5.4321 9.09062 4.63269C9.03899 4.05129 9.14549 3.46694 9.39955 2.93763C9.65361 2.40832 10.0464 1.95244 10.5389 1.61525C11.0315 1.27805 11.6067 1.07126 12.2074 1.01538C12.8081 0.959501 13.4135 1.05649 13.9635 1.29671L11.444 3.73214C11.5411 4.13987 11.7549 4.51298 12.0609 4.80884C12.3669 5.10471 12.7527 5.3114 13.1744 5.40533L15.6939 2.96916C15.8908 3.38932 16 3.85558 16 4.34638Z'
                          stroke='#131E47'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      Plumbing & Water Systems
                    </span>
                  ),
                  name: 'plumbingIssues',
                  type: 'checkbox-group',
                  grid: 2,
                  options: [
                    {
                      value: 'leaks',
                      name: 'leaks',
                      label: 'Leak Detection & Repair'
                    },
                    {
                      value: 'taps',
                      name: 'taps',
                      label: 'Tap & Showerhead Replacement'
                    },
                    {
                      value: 'blockage',
                      name: 'blockage',
                      label: 'Pipe & Drain Blockage Clearing'
                    },
                    {
                      value: 'waterHeater',
                      name: 'waterHeater',
                      label: 'Water Heater Repair/Installation'
                    },
                    {
                      value: 'other',
                      name: 'other',
                      label: 'Other',
                      subFields: [
                        {
                          name: 'otherPlumbingIssue',
                          label: 'Please specify the repair needed',
                          type: 'text',
                          placeholder: 'Enter the specific repair service'
                        }
                      ]
                    }
                  ]
                },

                {
                  name: 'electricalIssues',
                  label: (
                    <span className='flex items-center gap-2 my-4'>
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.50002 12V11.25C9.50002 10.3438 10.4856 9.48658 11.125 8.87502C12.0263 8.01346 12.5 6.85596 12.5 5.50002C12.5 3.00002 10.5085 1.00002 8.00002 1.00002C7.40861 0.998368 6.8227 1.11364 6.27599 1.3392C5.72928 1.56476 5.23255 1.89617 4.81436 2.31436C4.39617 2.73255 4.06476 3.22928 3.8392 3.77599C3.61364 4.3227 3.49837 4.90861 3.50002 5.50002C3.50002 6.80752 3.99408 8.04346 4.87502 8.87502C5.51095 9.47533 6.50002 10.3344 6.50002 11.25V12M7.00002 15H9.00002M6.50002 13.5H9.50002M8.00002 12V8.00002'
                          stroke='#131E47'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9.1875 7.5C9.1875 7.5 8.51531 8 8 8C7.48469 8 6.8125 7.5 6.8125 7.5'
                          stroke='#131E47'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      Electrical & Lighting
                    </span>
                  ),
                  type: 'checkbox-group',
                  grid: 2,
                  options: [
                    {
                      value: 'powerOutage',
                      name: 'powerOutage',
                      label: 'Power Outage Troubleshooting'
                    },
                    {
                      value: 'switches',
                      name: 'switches',
                      label: 'Switches, Sockets & Wiring Repair'
                    },
                    {
                      value: 'lighting',
                      name: 'lighting',
                      label: 'Light Fixture Replacement'
                    },
                    {
                      value: 'circuitBreaker',
                      name: 'circuitBreaker',
                      label: 'Circuit Breaker Issues'
                    },
                    {
                      value: 'other',
                       name: 'other',
                      label: 'Other',
                      subFields: [
                        {
                          name: 'otherElectricalIssue',
                          label: 'Please specify the repair needed',
                          type: 'text',
                          placeholder: 'Enter the specific repair service'
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'structuralIssues',
                  label: (
                    <span className='flex items-center gap-2 my-4'>
                      <svg
                        width='15'
                        height='13'
                        viewBox='0 0 15 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M14.5 11.96H13.5V7.28007L13.6462 7.43217C13.7402 7.52974 13.8676 7.58449 14.0004 7.58437C14.1332 7.58425 14.2606 7.52927 14.3544 7.43152C14.4482 7.33378 14.5008 7.20128 14.5007 7.06317C14.5006 6.92506 14.4477 6.79265 14.3538 6.69508L8.20687 0.304364C8.01936 0.109476 7.7651 0 7.5 0C7.2349 0 6.98064 0.109476 6.79313 0.304364L0.64625 6.69508C0.552513 6.79265 0.499884 6.92496 0.499943 7.06288C0.500002 7.20081 0.552742 7.33306 0.646562 7.43055C0.740383 7.52803 0.867598 7.58277 1.00022 7.58271C1.13284 7.58264 1.26001 7.52779 1.35375 7.43022L1.5 7.28007V11.96H0.5C0.367392 11.96 0.240215 12.0148 0.146447 12.1123C0.0526784 12.2098 0 12.3421 0 12.48C0 12.6179 0.0526784 12.7502 0.146447 12.8477C0.240215 12.9452 0.367392 13 0.5 13H14.5C14.6326 13 14.7598 12.9452 14.8536 12.8477C14.9473 12.7502 15 12.6179 15 12.48C15 12.3421 14.9473 12.2098 14.8536 12.1123C14.7598 12.0148 14.6326 11.96 14.5 11.96ZM2.5 6.24009L7.5 1.04015L12.5 6.24009V11.96H9.5V8.32006C9.5 8.18215 9.44732 8.04989 9.35355 7.95237C9.25979 7.85485 9.13261 7.80007 9 7.80007H6C5.86739 7.80007 5.74021 7.85485 5.64645 7.95237C5.55268 8.04989 5.5 8.18215 5.5 8.32006V11.96H2.5V6.24009ZM8.5 11.96H6.5V8.84005H8.5V11.96Z'
                          fill='#131E47'
                        />
                      </svg>
                      Structural Repairs
                    </span>
                  ),
                  type: 'checkbox-group',
                  grid: 2,
                  options: [
                    {
                      value: 'walls',
                      name: 'walls',
                      label: 'Wall Cracks & Plastering'
                    },
                    {
                      value: 'roof',
                      name: 'roof',
                      label: 'Roof & Gutter Repairs'
                    },
                    {
                      value: 'doors',
                      name: 'doors',
                      label: 'Door & Window Repairs'
                    },
                    {
                      value: 'flooring',
                      name: 'flooring',
                      label: 'Flooring Repairs (Tiles, Wood, etc.)'
                    },
                    {
                      value: 'other',
                       name: 'other',
                      label: 'Other',
                      subFields: [
                        {
                          name: 'otherStructuralIssue',
                          label: 'Please specify the repair needed',
                          type: 'text',
                          placeholder: 'Enter the specific repair service'
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'heatingAndCoolingIssues',
                  label: (
                    <span className='flex items-center gap-2 my-4'>
                      <svg
                        width='14'
                        height='16'
                        viewBox='0 0 14 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.202 7.82991L6.332 5.65691C6.89715 4.59077 7.52215 3.55745 8.204 2.56191C9.168 3.60691 10.11 4.86191 10.816 6.18391C11.564 7.58591 12 8.97291 12 10.2159C12 11.6429 11.096 13.0459 9.847 13.8289C9.90567 13.5636 9.93567 13.2759 9.937 12.9659C9.937 11.7109 9.263 10.6299 8.794 10.0029C8.48948 9.60024 8.15162 9.22392 7.784 8.87791L7.76 8.85791L7.752 8.84991L7.75 8.84591L7.749 8.84491C7.746 8.84591 7.746 8.84391 6.75 9.96591C7.03645 10.3777 7.36635 10.7576 7.734 11.0989C8.104 11.6329 8.438 12.2989 8.438 12.9659C8.438 13.7359 8.125 14.2419 7.82 14.5529C7.661 14.7149 7.541 14.9329 7.506 15.1529C7.49138 15.2403 7.49138 15.3295 7.506 15.4169C7.51733 15.4802 7.53733 15.5409 7.566 15.5989C7.679 15.8239 7.909 15.9689 8.16 15.9489C10.996 15.7139 13.5 13.0789 13.5 10.2159C13.5 7.06691 11.323 3.67791 9.143 1.37091C9.0198 1.24109 8.87111 1.13811 8.70627 1.06842C8.54142 0.998735 8.36396 0.963834 8.185 0.965908C7.97277 0.964533 7.76334 1.01435 7.57446 1.11114C7.38559 1.20793 7.22283 1.34883 7.1 1.52191C6.33246 2.62734 5.63122 3.77736 5 4.96591L4.045 3.62891L4.029 3.60691C3.93676 3.48556 3.81765 3.38724 3.68101 3.31968C3.54437 3.25213 3.39393 3.21717 3.2415 3.21756C3.08908 3.21795 2.93882 3.25367 2.80253 3.32192C2.66623 3.39017 2.54762 3.48909 2.456 3.61091C1.37 5.08891 0 7.21491 0 10.2159C0 13.0789 2.504 15.7139 5.34 15.9489C5.59 15.9689 5.821 15.8239 5.933 15.5989C5.96125 15.5413 5.98144 15.48 5.993 15.4169C6.00784 15.3299 6.00818 15.241 5.994 15.1539C5.95212 14.9266 5.84269 14.7171 5.68 14.5529C5.375 14.2429 5.063 13.7359 5.063 12.9659C5.063 12.2999 5.396 11.6329 5.766 11.0989L5.856 10.9709C6.294 10.3709 6.75 9.96591 6.75 9.96591L5.753 8.84591H5.75L5.747 8.84891L5.739 8.85591L5.715 8.87691L5.642 8.94691C5.3025 9.27383 4.9892 9.62692 4.705 10.0029C4.235 10.6289 3.562 11.7099 3.562 12.9649C3.562 13.2749 3.595 13.5629 3.652 13.8279C2.404 13.0459 1.5 11.6429 1.5 10.2159C1.5 8.04491 2.347 6.40391 3.245 5.08991L3.779 5.83791L5.202 7.82991ZM6.75 9.96591L7.747 8.84491L6.75 7.95891L5.753 8.84591L6.75 9.96591Z'
                          fill='#131E47'
                        />
                      </svg>
                      Heating & Cooling Systems
                    </span>
                  ),
                  type: 'checkbox-group',
                  grid: 2,
                  options: [
                    {
                      value: 'radiator',
                      name: 'radiator',
                      label: 'Radiator Servicing & Repair'
                    },
                    {
                      value: 'boiler',
                      name: 'boiler',
                      label: 'Boiler Servicing & Repair'
                    },
                    {
                      value: 'ac',
                      name: 'ac',
                      label: 'Air Conditioning Repair/Installation'
                    },
                    {
                      value: 'ventilation',
                      name: 'ventilation',
                      label: 'Ventilation System Cleaning'
                    },
                    {
                      value: 'other',
                       name: 'other',
                      label: 'Other',
                      subFields: [
                        {
                          name: 'otherHeatingCoolingIssue',
                          label: 'Please specify the repair needed',
                          type: 'text',
                          placeholder: 'Enter the specific repair service'
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'applianceIssues',
                  label: (
                    <span className='flex items-center gap-2 my-4'>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.58135 8.68494C4.58135 8.68494 5.20068 7.84884 5.60787 7.65864C6.83627 7.08391 7.08605 6.83349 7.6609 5.60535C7.85115 5.19825 8.68742 4.57905 8.68742 4.57905M6.29221 10.3961C6.29221 10.3961 7.12848 9.77623 7.31873 9.36982C7.89358 8.141 8.14336 7.89126 9.37176 7.31654C9.77826 7.12565 10.3983 6.28955 10.3983 6.28955M11.5637 1.65205C12.8517 -0.0365585 15.1237 1.91683 13.3464 3.41455M1.59966 11.5894C-0.0290788 12.9523 2.02396 15.1349 3.44055 13.2923M9.16372 1.26821C9.24625 1.18547 9.34428 1.1198 9.4522 1.07496C9.56012 1.03011 9.67582 1.00696 9.79269 1.00683C9.90957 1.0067 10.0253 1.0296 10.1333 1.07421C10.2414 1.11883 10.3395 1.18428 10.4222 1.26684L13.7146 4.54963C13.7974 4.6321 13.8632 4.73007 13.9081 4.83794C13.953 4.94582 13.9762 5.06148 13.9764 5.17833C13.9766 5.29518 13.9537 5.41092 13.9092 5.51894C13.8646 5.62696 13.7992 5.72514 13.7167 5.80788L12.671 6.85744C12.5885 6.94022 12.4905 7.00594 12.3826 7.05085C12.2747 7.09576 12.159 7.11897 12.0422 7.11916C11.9253 7.11935 11.8095 7.09652 11.7015 7.05196C11.5934 7.00741 11.4952 6.942 11.4125 6.85949L8.11941 3.57602C8.03666 3.49351 7.97098 3.3955 7.92612 3.2876C7.88126 3.1797 7.8581 3.06403 7.85798 2.94718C7.85785 2.83033 7.88075 2.7146 7.92538 2.60661C7.97 2.49861 8.03547 2.40046 8.11804 2.31777L9.16372 1.26821ZM2.30864 8.11773C2.4752 7.95076 2.70126 7.85674 2.93713 7.85635C3.173 7.85597 3.39937 7.94925 3.56647 8.11568L6.85953 11.3985C6.94233 11.4809 7.00807 11.5789 7.05299 11.6868C7.0979 11.7947 7.12112 11.9103 7.12131 12.0272C7.1215 12.144 7.09866 12.2598 7.0541 12.3678C7.00953 12.4758 6.94412 12.574 6.86159 12.6567L5.81522 13.7056C5.64867 13.8726 5.42261 13.9666 5.18674 13.967C4.95087 13.9674 4.7245 13.8741 4.5574 13.7076L1.26433 10.4249C1.18143 10.3424 1.11561 10.2444 1.07063 10.1364C1.02565 10.0285 1.0024 9.91275 1.00221 9.79582C1.00202 9.67889 1.02489 9.56307 1.06952 9.45499C1.11414 9.3469 1.17965 9.24868 1.26228 9.16593L2.30864 8.11773Z'
                          stroke='#131E47'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      Appliances & Fixtures
                    </span>
                  ),
                  type: 'checkbox-group',
                  grid: 2,
                  options: [
                    {
                      value: 'washer',
                      name: 'washer',
                      label: 'Washing Machine/Dryer Repair'
                    },
                    {
                      value: 'fridge',
                      name: 'fridge',
                      label: 'Fridge/Freezer Repair'
                    },
                    {
                      value: 'cooker',
                      name: 'cooker',
                      label: 'Gas/Electric Cooker Repair'
                    },
                    {
                      value: 'other',
                       name: 'other',
                      label: 'Other',
                      full: true,
                      subFields: [
                        {
                          name: 'otherApplianceIssue',
                          label: 'Please specify the repair needed',
                          type: 'text',
                          placeholder: 'Enter the specific repair service',
                          full: true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Repair Condition & Urgency',
          inline: true,
          fields: [
            {
              name: 'howUrgent',
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
                  value: 'highPriority',
                  label: 'High Priority (Fix within 48 hours)'
                },
                {
                  value: 'emergency',
                  label: 'Emergency (Same-day or immediate response)'
                }
              ]
            },

            {
              name: 'issueDescription',
              label: 'Describe the issue in detail',
              type: 'textarea',
              placeholder:
                'Please provide as much detail as possible about the issue...',
              rows: 4
            },
            {
              name: 'troubleshootingDone',
              label: 'Troubleshooting Done Before Requesting Service',
              type: 'radio-group',
              options: [
                {
                  value: 'Checked Power Supply',
                  label: 'Checked Power Supply'
                },
                {
                  value: 'Turned Off Water Valve',
                  label: 'Turned Off Water Valve'
                },
                {
                  value: 'Reset Circuit Breaker',
                  label: 'Reset Circuit Breaker'
                },

                {
                  value: 'other',
                  label: 'Other',
                  subFields: [
                    {
                      name: 'otherTroubleshooting',
                      label: 'Please specify the other troubleshooting done',
                      type: 'text',
                      placeholder:
                        'Enter the specific troubleshooting steps you have already taken before requesting the servic.....',
                      required: true
                    }
                  ]
                }
              ]
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
                    'Critical repairs required (e.g., gas leaks, flooding, structural hazards): technician will be dispatched within 1–2 hours.'
                },
                {
                  value: 'priority',
                  label: 'Priority',
                  description:
                    'Important repairs that require prompt attention (e.g., significant electrical or plumbing issues): technician will be scheduled within 12–24 hours.'
                },
                {
                  value: 'standard',
                  label: 'Standard',
                  description:
                    'Routine or minor repairs that are not urgent: technician will be scheduled within 48–72 hours.'
                }
              ]
            }
          ]
        },
        {
          title: 'Location & Availability',
          inline: false,
          fields: [
            {
              name: 'serviceAddress',
              type: 'address'
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
              full: true,
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
              label: 'Would you like us to call and arrange a date?',
              type: 'radio-group',
              inline: true,
              required: true,
              options: [
                { value: 'Yes', label: 'Yes' },
                { value: 'No, I have a preferred date/time', label: 'No, I have a preferred date/time' }
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
              full: true,
              placeholder:
                'Enter any access Instructions, security codes, key pick up information, etc....',
              rows: 3
            }
          ]
        },
        {
          title: 'Upload Pictures or Videos (Mandatory)',

          sections: [
            {
              description:
                'For accurate pricing and service planning, please upload  clear images/videos of the area.',
              type: 'submission',
              fields: [
                {
                  name: 'repairWarranty',
                  label:
                    'Would you like to add a repair warranty for a follow-up  check?',
                  type: 'radio-group',

                  required: true,
                  options: [
                    {
                      value: 'Yes, 30-day warranty included',
                      label: 'Yes, 30-day warranty included'
                    },
                    { value: 'no', label: 'No' }
                  ]
                },
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
                        'I confirm that the details provided are accurate and agree to the  terms of service.'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      subscription: [
        {
          title: 'Subscription Plan Selection',
          description: 'Choose your preferred repair plan',
          inline: true,
          fields: [
            {
              name: 'subscriptionPlan',
              label: '',
              type: 'radio-group',
              isList: true,
              required: true,
              options: [
                {
                  value: 'quarterly',
                  label: 'Quarterly',
                  description: '4 repair visits per year'
                },
                {
                  value: 'biannually',
                  label: 'Biannually',
                  description: '2 repair visits per year'
                },
                {
                  value: 'annually',
                  label: 'Annually',
                  description: '1 repair visits per year'
                }
              ]
            },
            {
              label: 'Services Included in Your Subscription',
              type: 'note',
              options: [
                'Full Property Inspection (Plumbing, Electrical, Structural &  Appliances)',
                'Minor Repairs (Leaks, small electrical faults, loose fixtures)',
                'Preventive Maintenance (Clearing gutters, checking heating  systems, etc.)',
                'Priority Scheduling for Major Repairs'
              ]
            }
          ]
        },
        {
          title: 'Property & Maintenance Needs',
          sections: [
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
                      value: 'Residential',
                      label: 'Residential'
                    },
                    {
                      value: 'Commercial',
                      label: 'Commercial'
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
                          required: true,
                          full: true
                        }
                      ]
                    }
                  ]
                },
                {
                  label: 'What Areas Need Special Attention?',
                  type: 'checkbox-group',
                  name: 'areasOfConcern',
                  options: [
                    {
                      label: 'Plumbing Systems',
                      value: 'plumbing',
                      name: 'plumbing'
                    },
                    {
                      label: 'Electrical Wiring',
                      value: 'electrical',
                      name: 'electrical'
                    },
                    {
                      label: 'Heating & Cooling',
                      value: 'heatingCooling',
                      name: 'heatingCooling'
                    },
                    {
                      label: 'Roof & Gutters',
                      value: 'roof',
                      name: 'roof'
                    },
                    {
                      label: 'Flooring & Walls',
                      value: 'flooringWalls',
                      name: 'flooringWalls'
                    },
                    {
                      label: 'Other',
                      value: 'other',
                      name: 'other',
                      subFields: [
                        {
                          name: 'otherAreasOfConcern',
                          label: 'Please Specify the Area ',
                          type: 'text',
                          placeholder: 'Enter the specific area....',
                          full: true
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'anyPreviousIssues',
                  label: 'Any Previous Recurring Issues?',
                  type: 'textarea',
                  placeholder: 'Please provide a brief description...',
                  full: true
                }
              ]
            }
          ]
        },
        {
          title: 'Location & Availability',
          inline: false,
          fields: [
            {
              name: 'serviceAddress',
              type: 'address',
              placeholder: 'Enter your address',
              required: true
            },
            {
              label: 'Preferred Months for Maintenance Visits',
              type: 'number',
              name: 'preferredMonths',
              min: 1,
              max: 12,
              placeholder: 'Enter preferred months for maintenance visits',
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
              label: 'Would you like us to call and schedule your first visit?',
              type: 'radio-group',
              inline: true,
              required: true,
              options: [
                { value: 'Yes', label: 'Yes' },
                {
                  value: 'No, I’ll choose a date',
                  label: ' No, I’ll choose a date'
                }
              ]
            }
          ]
        },
        {
          title: 'Payment & Subscription Agreement',
          inline: true,
          fields: [
            {
              name: 'subscriptionAutoRenewal',
              label: 'Would you like to set up automatic renewal?',
              type: 'radio-group',
              options: [
                { value: 'Yes', label: 'Yes' },
                {
                  value: 'No, I’ll renew manually',
                  label: 'No, I’ll renew manually'
                }
              ]
            },
            {
              name: 'preferredPaymentMethod',
              label: 'Preferred Payment Method',
              type: 'radio-group',
              required: true,
              options: [
                {
                  value: 'Direct Debit',
                  label: 'Direct Debit'
                },
                {
                  value: 'Bank Transfer',
                  label: 'Bank Transfer'
                },
                {
                  value: 'Card Payment',
                  label: ' Card Payment'
                }
              ]
            }
          ]
        }
      ]
    }
  }

  // Combine common steps with service-specific steps
  return [...commonSteps, ...(serviceSteps[serviceType]?.[packageType] || [])]
}
