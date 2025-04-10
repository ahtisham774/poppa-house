export const trainingMaterials = [
    {
      id: "intro-cleaning",
      title: "Introduction to Cleaning Services",
      description: "Learn the basics of professional cleaning and how to deliver exceptional service to clients.",
      level: "Beginner",
      progress: 80,
      completed: true,
      modules: [
        {
          id: "industry-overview",
          title: "Industry Overview",
          type: "reading",
          duration: 15,
          completed: true,
          content: "Reading content would load here"
        },
        {
          id: "basic-cleaning",
          title: "Basic Cleaning Techniques",
          type: "video",
          duration: 20,
          completed: false,
          content: "Video content would load here"
        },
        {
          id: "cleaning-products",
          title: "Cleaning Products Guide",
          type: "reading",
          duration: 15,
          completed: false,
          content: "Reading content would load here"
        },
        {
          id: "customer-etiquette",
          title: "Customer Etiquette",
          type: "audio",
          duration: 25,
          completed: false,
          content: "Audio content would load here"
        }
      ]
    },
    {
      id: "advanced-customer",
      title: "Advanced Customer Service",
      description: "Techniques for good customer interactions and handling difficult situations professionally.",
      level: "Intermediate",
      progress: 60,
      completed: false
    },
    {
      id: "safety-protocols",
      title: "Safety Protocols",
      description: "Essential safety guidelines for all employees to ensure a secure working environment.",
      level: "Intermediate",
      progress: 0,
      completed: false
    },
    {
      id: "property-management",
      title: "Property Management Basics",
      description: "Fundamentals concepts of property management for service professionals.",
      level: "Advanced",
      progress: 20,
      completed: false
    }
  ];
  
  export const relatedCourses = [
    {
      id: "industry-overview-course",
      title: "Industry Overview",
      level: "Intermediate",
      modules: 5
    },
    {
      id: "customer-service",
      title: "Customer Service Excellence",
      level: "Beginner",
      modules: 3
    }
  ];