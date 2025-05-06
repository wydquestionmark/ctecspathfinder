const questions = [
  {
    "question": "You\u2019re helping to build a wooden shed in your backyard. What role would you take?",
    "choices": [
      {
        "text": "Cut and measure wood panels",
        "trades": [
          "Carpentry",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Design a floorplan for the shed",
        "trades": [
          "Graphic Design"
        ],
        "points": 1
      },
      {
        "text": "Wire the shed for lighting",
        "trades": [
          "Electrical"
        ],
        "points": 1
      }
    ]
  },
  {
    "question": "A friend\u2019s car has a strange noise. What part would you like to inspect?",
    "choices": [
      {
        "text": "Diagnose and fix the engine",
        "trades": [
          "Automotive",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Repair scratches and repaint the body",
        "trades": [
          "Auto Body"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You're tasked with designing a robot for a school project. What excites you most?",
    "choices": [
      {
        "text": "Programming the robot\u2019s movements",
        "trades": [
          "Robotics",
          "IT"
        ],
        "points": 2
      },
      {
        "text": "Constructing the mechanical body",
        "trades": [
          "Mechanical Engineering",
          "Precision Machine Tool"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019re preparing a dish for a cooking competition. What\u2019s your focus?",
    "choices": [
      {
        "text": "Creating a balanced, flavorful meal",
        "trades": [
          "Cooking"
        ],
        "points": 2
      },
      {
        "text": "Plating it beautifully",
        "trades": [
          "Graphic Design"
        ],
        "points": 1
      }
    ]
  },
  {
    "question": "Your cousin wants a new hairstyle. How would you help?",
    "choices": [
      {
        "text": "Style and cut their hair",
        "trades": [
          "Cosmetology"
        ],
        "points": 2
      },
      {
        "text": "Help them choose a style that matches their personality",
        "trades": [
          "Graphic Design"
        ],
        "points": 1
      }
    ]
  },
  {
    "question": "You\u2019re helping install a new kitchen sink. What part would you handle?",
    "choices": [
      {
        "text": "Connect the pipes and fixtures",
        "trades": [
          "Plumbing"
        ],
        "points": 2
      },
      {
        "text": "Build a cabinet underneath",
        "trades": [
          "Carpentry",
          "Precision Machine Tool"
        ],
        "points": 1
      }
    ]
  },
  {
    "question": "You're helping with a health fair. What would you enjoy most?",
    "choices": [
      {
        "text": "Taking blood pressure and explaining health data",
        "trades": [
          "Health Tech"
        ],
        "points": 2
      },
      {
        "text": "Creating informational posters",
        "trades": [
          "Graphic Design"
        ],
        "points": 1
      }
    ]
  },
  {
    "question": "You're building a basic computer from parts. What\u2019s your focus?",
    "choices": [
      {
        "text": "Installing and wiring the components",
        "trades": [
          "IT"
        ],
        "points": 2
      },
      {
        "text": "Testing and debugging the software",
        "trades": [
          "Robotics"
        ],
        "points": 1
      }
    ]
  },
  {
    "question": "You're helping set up for a school event. What do you take on?",
    "choices": [
      {
        "text": "Prepare the food and serve guests",
        "trades": [
          "Cooking"
        ],
        "points": 2
      },
      {
        "text": "Build the welcome banner frame",
        "trades": [
          "Carpentry",
          "Precision Machine Tool"
        ],
        "points": 1
      }
    ]
  },
  {
    "question": "You\u2019re tasked with improving a small appliance. What interests you most?",
    "choices": [
      {
        "text": "Rewiring the motor for better performance",
        "trades": [
          "Electrical"
        ],
        "points": 2
      },
      {
        "text": "Redesigning its exterior shell",
        "trades": [
          "Mechanical Engineering",
          "Precision Machine Tool"
        ],
        "points": 1
      }
    ]
  },
  {
    "question": "Your school wants to build a custom sign for the entrance. What would you offer to help with?",
    "choices": [
      {
        "text": "Cut and assemble a wooden frame",
        "trades": [
          "Carpentry",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Design the lettering and layout",
        "trades": [
          "Graphic Design"
        ],
        "points": 2
      },
      {
        "text": "Install solar lighting for the sign",
        "trades": [
          "Electrical"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019re helping a neighbor renovate their kitchen. What job would you take?",
    "choices": [
      {
        "text": "Install new cabinets and shelving",
        "trades": [
          "Carpentry",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Wire new outlets and lighting",
        "trades": [
          "Electrical"
        ],
        "points": 2
      },
      {
        "text": "Hook up a new sink and dishwasher",
        "trades": [
          "Plumbing"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019re volunteering at a local clinic. What job would you prefer?",
    "choices": [
      {
        "text": "Assist with patient check-ins and vitals",
        "trades": [
          "Health Tech"
        ],
        "points": 2
      },
      {
        "text": "Maintain and troubleshoot equipment",
        "trades": [
          "IT"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019re building a soapbox race car. Where do you want to help?",
    "choices": [
      {
        "text": "Weld the frame and attach wheels",
        "trades": [
          "Mechanical Engineering",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Paint and decorate the car",
        "trades": [
          "Auto Body",
          "Graphic Design"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019re assigned to plan a celebration event. What do you sign up for?",
    "choices": [
      {
        "text": "Cook and serve snacks and meals",
        "trades": [
          "Cooking"
        ],
        "points": 2
      },
      {
        "text": "Design flyers and menus",
        "trades": [
          "Graphic Design"
        ],
        "points": 2
      },
      {
        "text": "Style hair for a photo booth",
        "trades": [
          "Cosmetology"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019re working on a community mural. What role do you choose?",
    "choices": [
      {
        "text": "Sketch and paint the mural design",
        "trades": [
          "Graphic Design"
        ],
        "points": 2
      },
      {
        "text": "Build scaffolding to reach the wall",
        "trades": [
          "Carpentry",
          "Precision Machine Tool"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019ve been asked to help digitize school records. What interests you most?",
    "choices": [
      {
        "text": "Enter and organize data in software",
        "trades": [
          "IT"
        ],
        "points": 2
      },
      {
        "text": "Design easy-to-read forms",
        "trades": [
          "Graphic Design"
        ],
        "points": 1
      }
    ]
  },
  {
    "question": "You\u2019re helping fix up a donated used car. What job do you want?",
    "choices": [
      {
        "text": "Repair and test the engine",
        "trades": [
          "Automotive",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Sand and repaint the fenders",
        "trades": [
          "Auto Body"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019re at a summer camp and the power goes out. How can you help?",
    "choices": [
      {
        "text": "Check fuses and run temporary wiring",
        "trades": [
          "Electrical"
        ],
        "points": 2
      },
      {
        "text": "Fix generator parts with tools",
        "trades": [
          "Mechanical Engineering",
          "Precision Machine Tool"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "A local business asks for help making a commercial. What\u2019s your role?",
    "choices": [
      {
        "text": "Write and edit the video footage",
        "trades": [
          "IT"
        ],
        "points": 2
      },
      {
        "text": "Style people and prep them for camera",
        "trades": [
          "Cosmetology"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019re offered two summer jobs. Which would you choose?",
    "choices": [
      {
        "text": "Working outdoors doing physical construction",
        "trades": [
          "Carpentry",
          "Plumbing",
          "Electrical",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Working inside organizing a digital filing system",
        "trades": [
          "IT",
          "Graphic Design"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "Which makes you feel most accomplished?",
    "choices": [
      {
        "text": "Seeing a physical object you built",
        "trades": [
          "Mechanical Engineering",
          "Carpentry",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Solving a problem or helping someone directly",
        "trades": [
          "Health Tech",
          "Cosmetology"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "Which task do you prefer?",
    "choices": [
      {
        "text": "Hauling tools and building structures outdoors",
        "trades": [
          "Construction",
          "Carpentry",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Working on a screen to design or program something",
        "trades": [
          "IT",
          "Robotics"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "How do you define success?",
    "choices": [
      {
        "text": "Creating something tangible with my hands",
        "trades": [
          "Auto Body",
          "Automotive",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Helping others feel good or safe",
        "trades": [
          "Cosmetology",
          "Health Tech"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You have free time after school. What sounds better?",
    "choices": [
      {
        "text": "Joining a robotics club to build and code",
        "trades": [
          "Robotics",
          "IT"
        ],
        "points": 2
      },
      {
        "text": "Volunteering at a salon or healthcare event",
        "trades": [
          "Cosmetology",
          "Health Tech"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "Which environment do you enjoy more?",
    "choices": [
      {
        "text": "Busy, loud shop with tools and machines",
        "trades": [
          "Auto Body",
          "Mechanical Engineering",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Quiet space to think and solve puzzles",
        "trades": [
          "IT",
          "Graphic Design"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "When solving a problem, what do you do first?",
    "choices": [
      {
        "text": "Grab tools and dive into fixing it",
        "trades": [
          "Automotive",
          "Plumbing",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Analyze it and plan a solution",
        "trades": [
          "Robotics",
          "IT"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You just finished a project. What gives you satisfaction?",
    "choices": [
      {
        "text": "Seeing a beautiful result and proud client",
        "trades": [
          "Cosmetology",
          "Auto Body"
        ],
        "points": 2
      },
      {
        "text": "Knowing everything is wired, built, or coded properly",
        "trades": [
          "Electrical",
          "IT"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "You\u2019re learning something new. What do you prefer?",
    "choices": [
      {
        "text": "Getting hands-on right away",
        "trades": [
          "Carpentry",
          "Automotive",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Reading or watching a tutorial first",
        "trades": [
          "IT",
          "Health Tech"
        ],
        "points": 2
      }
    ]
  },
  {
    "question": "What motivates you more?",
    "choices": [
      {
        "text": "Working physically and staying active",
        "trades": [
          "Construction",
          "Mechanical Engineering",
          "Precision Machine Tool"
        ],
        "points": 2
      },
      {
        "text": "Being precise and detail-focused",
        "trades": [
          "Cosmetology",
          "Graphic Design"
        ],
        "points": 2
      }
    ]
  }
];

export default questions;