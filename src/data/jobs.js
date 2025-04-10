export const jobs = [
    {
      id: '0001',
      title: 'Pro Property Viewing',
      client: 'John Davis',
      address: 'Camden, London, United Kingdom',
      expedited: true,
      priority_Level:"Priority",
      property_type: "Apartment",
      rating: 3.5,
      assignedAt:"Oct 18, 2025",
      price:50,
      workingDays: 1,
      progress: 99,
      details: {
        jobType: 'Pro Property Viewing',
        priorityLevel: 'Expedited - 1 working days',
        propertySource: 'Known Address',
        propertyAddress: '15 Victoria Street Edinburgh EH1 2JL Scotland, UK',
        agencyName: 'Central London Estates',
        contactDetails: 'John Smith, 020 7123 4567, john@primelondon.com',
        concerns: "I'm concerned about the proximity to the main road and potential noise issues."
      },
      clientDetails: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+44 7123 456789',
        preferredCommunication: 'Message',
        priorCommunication: 'I spoke with John about the property yesterday. He mentioned that there are already 2 other interested parties.'
      },
      progress_timeline: [
        { task: 'Agent Assigned', completed: true, date: 'Mar 22, 2025 10:30 AM' },
        { task: 'Contacted property owner/agent', completed: false },
        { task: 'Schedule A Property viewing date', completed: false },
        { task: 'Visiting the Property', completed: false },
        { task: 'Property Viewing done', completed: false },
        { task: 'Files uploaded/sent', completed: false },
        { task: 'Request Job Marked Complete', completed: false },
        { task: 'Request Close', completed: false }
      ],
      files: [
        { name: 'Living Room Photos.zip', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Kitchen Inspection.pdf', type: 'Document', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Bathroom Issues.jpg', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Property Overview Video.mp4', type: 'Video', size: '12.5 MB', uploaded: 'Oct 18, 2025' }
      ]
    },
    {
      id: '0002',
      title: 'Pro Property Viewing',
      client: 'John Davis',
      address: 'Camden, London, United Kingdom',
      expedited: true,
      priority_Level:"Emergency",
      property_type: "Apartment",
      rating: 3.5,
      assignedAt:"Oct 18, 2025",
      price:50,
      workingDays: 1,
      progress: 99,
      details: {
        jobType: 'Pro Property Viewing',
        priorityLevel: 'Expedited - 1 working days',
        propertySource: 'Known Address',
        propertyAddress: '15 Victoria Street Edinburgh EH1 2JL Scotland, UK',
        agencyName: 'Central London Estates',
        contactDetails: 'John Smith, 020 7123 4567, john@primelondon.com',
        concerns: "I'm concerned about the proximity to the main road and potential noise issues."
      },
      clientDetails: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+44 7123 456789',
        preferredCommunication: 'Message',
        priorCommunication: 'I spoke with John about the property yesterday. He mentioned that there are already 2 other interested parties.'
      },
      progress_timeline: [
        { task: 'Agent Assigned', completed: true, date: 'Mar 22, 2025 10:30 AM' },
        { task: 'Contacted property owner/agent', completed: false },
        { task: 'Schedule A Property viewing date', completed: false },
        { task: 'Visiting the Property', completed: false },
        { task: 'Property Viewing done', completed: false },
        { task: 'Files uploaded/sent', completed: false },
        { task: 'Request Job Marked Complete', completed: false },
        { task: 'Request Close', completed: false }
      ],
      files: [
        { name: 'Living Room Photos.zip', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Kitchen Inspection.pdf', type: 'Document', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Bathroom Issues.jpg', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Property Overview Video.mp4', type: 'Video', size: '12.5 MB', uploaded: 'Oct 18, 2025' }
      ]
    },
    {
      id: '0003',
      title: 'Pro Property Viewing',
      client: 'John Davis',
      address: 'Camden, London, United Kingdom',
      expedited: false,
      priority_Level:"Standard",
      property_type: "Apartment",
      rating: 3.5,
      assignedAt:"Oct 18, 2025",
      price:50,
      workingDays: 5,
      progress: 99,
      details: {
        jobType: 'Pro Property Viewing',
        priorityLevel: '5 working days',
        propertySource: 'Known Address',
        propertyAddress: '15 Victoria Street Edinburgh EH1 2JL Scotland, UK',
        agencyName: 'Central London Estates',
        contactDetails: 'John Smith, 020 7123 4567, john@primelondon.com',
        concerns: "I'm concerned about the proximity to the main road and potential noise issues."
      },
      clientDetails: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+44 7123 456789',
        preferredCommunication: 'Message',
        priorCommunication: 'I spoke with John about the property yesterday. He mentioned that there are already 2 other interested parties.'
      },
      progress_timeline: [
        { task: 'Agent Assigned', completed: true, date: 'Mar 22, 2025 10:30 AM' },
        { task: 'Contacted property owner/agent', completed: false },
        { task: 'Schedule A Property viewing date', completed: false },
        { task: 'Visiting the Property', completed: false },
        { task: 'Property Viewing done', completed: false },
        { task: 'Files uploaded/sent', completed: false },
        { task: 'Request Job Marked Complete', completed: false },
        { task: 'Request Close', completed: false }
      ],
      files: [
        { name: 'Living Room Photos.zip', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Kitchen Inspection.pdf', type: 'Document', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Bathroom Issues.jpg', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Property Overview Video.mp4', type: 'Video', size: '12.5 MB', uploaded: 'Oct 18, 2025' }
      ]
    },
    {
      id: '0004',
      title: 'Pro Property Viewing',
      client: 'John Davis',
      address: 'Camden, London, United Kingdom',
      expedited: true,
      priority_Level:"Emergency",
      property_type: "Apartment",
      rating: 3.5,
      assignedAt:"Oct 18, 2025",
      price:50,
      workingDays: 1,
      progress: 99,
      details: {
        jobType: 'Pro Property Viewing',
        priorityLevel: 'Expedited - 1 working days',
        propertySource: 'Known Address',
        propertyAddress: '15 Victoria Street Edinburgh EH1 2JL Scotland, UK',
        agencyName: 'Central London Estates',
        contactDetails: 'John Smith, 020 7123 4567, john@primelondon.com',
        concerns: "I'm concerned about the proximity to the main road and potential noise issues."
      },
      clientDetails: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+44 7123 456789',
        preferredCommunication: 'Message',
        priorCommunication: 'I spoke with John about the property yesterday. He mentioned that there are already 2 other interested parties.'
      },
      progress_timeline: [
        { task: 'Agent Assigned', completed: true, date: 'Mar 22, 2025 10:30 AM' },
        { task: 'Contacted property owner/agent', completed: false },
        { task: 'Schedule A Property viewing date', completed: false },
        { task: 'Visiting the Property', completed: false },
        { task: 'Property Viewing done', completed: false },
        { task: 'Files uploaded/sent', completed: false },
        { task: 'Request Job Marked Complete', completed: false },
        { task: 'Request Close', completed: false }
      ],
      files: [
        { name: 'Living Room Photos.zip', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Kitchen Inspection.pdf', type: 'Document', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Bathroom Issues.jpg', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Property Overview Video.mp4', type: 'Video', size: '12.5 MB', uploaded: 'Oct 18, 2025' }
      ]
    },
    {
      id: '0005',
      title: 'Pro Property Viewing',
      client: 'John Davis',
      address: 'Camden, London, United Kingdom',
      expedited: true,
      priority_Level:"Standard",
      property_type: "Apartment",
      rating: 3.5,
      assignedAt:"Oct 18, 2025",
      price:50,
      workingDays: 1,
      progress: 99,
      details: {
        jobType: 'Pro Property Viewing',
        priorityLevel: 'Expedited - 1 working days',
        propertySource: 'Known Address',
        propertyAddress: '15 Victoria Street Edinburgh EH1 2JL Scotland, UK',
        agencyName: 'Central London Estates',
        contactDetails: 'John Smith, 020 7123 4567, john@primelondon.com',
        concerns: "I'm concerned about the proximity to the main road and potential noise issues."
      },
      clientDetails: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+44 7123 456789',
        preferredCommunication: 'Message',
        priorCommunication: 'I spoke with John about the property yesterday. He mentioned that there are already 2 other interested parties.'
      },
      progress_timeline: [
        { task: 'Agent Assigned', completed: true, date: 'Mar 22, 2025 10:30 AM' },
        { task: 'Contacted property owner/agent', completed: false },
        { task: 'Schedule A Property viewing date', completed: false },
        { task: 'Visiting the Property', completed: false },
        { task: 'Property Viewing done', completed: false },
        { task: 'Files uploaded/sent', completed: false },
        { task: 'Request Job Marked Complete', completed: false },
        { task: 'Request Close', completed: false }
      ],
      files: [
        { name: 'Living Room Photos.zip', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Kitchen Inspection.pdf', type: 'Document', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Bathroom Issues.jpg', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Property Overview Video.mp4', type: 'Video', size: '12.5 MB', uploaded: 'Oct 18, 2025' }
      ]
    },
    {
      id: '0006',
      title: 'Pro Property Viewing',
      client: 'John Davis',
      address: 'Camden, London, United Kingdom',
      expedited: false,
      priority_Level:"Standard",
      property_type: "Apartment",
      rating: 3.5,
      assignedAt:"Oct 18, 2025",
      price:50,
      workingDays: 5,
      progress: 99,
      details: {
        jobType: 'Pro Property Viewing',
        priorityLevel: '5 working days',
        propertySource: 'Known Address',
        propertyAddress: '15 Victoria Street Edinburgh EH1 2JL Scotland, UK',
        agencyName: 'Central London Estates',
        contactDetails: 'John Smith, 020 7123 4567, john@primelondon.com',
        concerns: "I'm concerned about the proximity to the main road and potential noise issues."
      },
      clientDetails: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+44 7123 456789',
        preferredCommunication: 'Message',
        priorCommunication: 'I spoke with John about the property yesterday. He mentioned that there are already 2 other interested parties.'
      },
      progress_timeline: [
        { task: 'Agent Assigned', completed: true, date: 'Mar 22, 2025 10:30 AM' },
        { task: 'Contacted property owner/agent', completed: false },
        { task: 'Schedule A Property viewing date', completed: false },
        { task: 'Visiting the Property', completed: false },
        { task: 'Property Viewing done', completed: false },
        { task: 'Files uploaded/sent', completed: false },
        { task: 'Request Job Marked Complete', completed: false },
        { task: 'Request Close', completed: false }
      ],
      files: [
        { name: 'Living Room Photos.zip', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Kitchen Inspection.pdf', type: 'Document', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Bathroom Issues.jpg', type: 'Image', size: '12.5 MB', uploaded: 'Oct 18, 2025' },
        { name: 'Property Overview Video.mp4', type: 'Video', size: '12.5 MB', uploaded: 'Oct 18, 2025' }
      ]
    },
    {
      id: '0007',
      title: 'Basic Property Viewing',
      client: 'Jane Smith',
      address: '15 Victoria Street, Edinburgh',
      expedited: true,
      priority_Level:"Priority",
      property_type: "Apartment",
      rating: 3.5,
      assignedAt:"Oct 18, 2025",
      price:50,
      workingDays: 2,
      progress: 85,
      details: {
        jobType: 'Basic Property Viewing',
        priorityLevel: 'Expedited - 2 working days',
        propertySource: 'Known Address',
        propertyAddress: '15 Victoria Street Edinburgh EH1 2JL Scotland, UK',
        agencyName: 'Central London Estates',
        contactDetails: 'John Smith, 020 7123 4567, john@primelondon.com',
        concerns: "I'm concerned about the proximity to the main road and potential noise issues."
      },
      clientDetails: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+44 7123 456789',
        preferredCommunication: 'Email',
        priorCommunication: 'Jane is a first-time buyer looking for a property in Edinburgh.'
      },
      progress_timeline: [
        { task: 'Agent Assigned', completed: true, date: 'Mar 22, 2025 10:30 AM' },
        { task: 'Contacted property owner/agent', completed: true },
        { task: 'Schedule A Property viewing date', completed: false },
        { task: 'Visiting the Property', completed: false },
        { task: 'Property Viewing done', completed: false },
        { task: 'Files uploaded/sent', completed: false },
        { task: 'Request Job Marked Complete', completed: false },
        { task: 'Request Close', completed: false }
      ],
      files: []
    },
    {
      id: '0008',
      title: 'Pro Property Viewing',
      client: 'Michael Johnson',
      address: '456 Oak Avenue, Somecity',
      expedited: false,
      priority_Level:"Priority",
      property_type: "Apartment",
      rating: 3.5,
      assignedAt:"Oct 18, 2025",
      price:50,
      workingDays: 5,
      progress: 50,
      details: {
        jobType: 'Pro Property Viewing',
        priorityLevel: '5 working days',
        propertySource: 'Agency Referral',
        propertyAddress: '456 Oak Avenue, Somecity, SC1 2AB',
        agencyName: 'Prime Properties',
        contactDetails: 'Sarah Williams, 020 7123 9876, sarah@primeproperties.com',
        concerns: "The client is interested in the property but has concerns about the condition of the roof."
      },
      clientDetails: {
        name: 'Michael Johnson',
        email: 'michael.johnson@example.com',
        phone: '+44 7123 456789',
        preferredCommunication: 'Phone',
        priorCommunication: 'Michael is relocating for work and needs to find a property quickly.'
      },
      progress_timeline: [
        { task: 'Agent Assigned', completed: true, date: 'Mar 20, 2025 09:15 AM' },
        { task: 'Contacted property owner/agent', completed: true },
        { task: 'Schedule A Property viewing date', completed: true },
        { task: 'Visiting the Property', completed: false },
        { task: 'Property Viewing done', completed: false },
        { task: 'Files uploaded/sent', completed: false },
        { task: 'Request Job Marked Complete', completed: false },
        { task: 'Request Close', completed: false }
      ],
      files: []
    },
    {
      id: '0009',
      title: 'Basic Property Viewing',
      client: 'Emma Wilson',
      address: '789 Pine Road, Newtown',
      expedited: true,
      priority_Level:"Priority",
      property_type: "Apartment",
      rating: 3.5,
      assignedAt:"Oct 18, 2025",
      price:50,
      workingDays: 2,
      progress: 75,
      details: {
        jobType: 'Basic Property Viewing',
        priorityLevel: 'Expedited - 2 working days',
        propertySource: 'Client Referral',
        propertyAddress: '789 Pine Road, Newtown, NT3 4CD',
        agencyName: 'Urban Living',
        contactDetails: 'David Brown, 020 7123 4567, david@urbanliving.com',
        concerns: "Emma is concerned about the local schools and transport links."
      },
      clientDetails: {
        name: 'Emma Wilson',
        email: 'emma.wilson@example.com',
        phone: '+44 7123 456789',
        preferredCommunication: 'Email',
        priorCommunication: 'Emma has previously viewed three other properties with us.'
      },
      progress_timeline: [
        { task: 'Agent Assigned', completed: true, date: 'Mar 21, 2025 14:00 PM' },
        { task: 'Contacted property owner/agent', completed: true },
        { task: 'Schedule A Property viewing date', completed: true },
        { task: 'Visiting the Property', completed: true },
        { task: 'Property Viewing done', completed: false },
        { task: 'Files uploaded/sent', completed: false },
        { task: 'Request Job Marked Complete', completed: false },
        { task: 'Request Close', completed: false }
      ],
      files: [
        { name: 'Property Photos.zip', type: 'Image', size: '10.2 MB', uploaded: 'Oct 17, 2025' },
        { name: 'Property Inspection.pdf', type: 'Document', size: '2.3 MB', uploaded: 'Oct 17, 2025' }
      ]
    }
  ];
  