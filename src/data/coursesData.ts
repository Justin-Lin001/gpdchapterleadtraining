export interface QuizQuestion {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  content: {
    title: string;
    description: string;
    videoUrl?: string;
    quizQuestions?: QuizQuestion[];
    sections: {
      heading: string;
      content: string;
    }[];
    keyTakeaways: string[];
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  lessons: number;
  duration: string;
  progress: number;
  lessonsList: Lesson[];
}

export const coursesData: Course[] = [
  {
    id: "leadership-basics",
    title: "Module 1: Finding A Senior Home",
    description: "Learn how to find and connect with senior homes in your community.",
    category: "Leadership",
    lessons: 2,
    duration: "45 min",
    progress: 0,
    lessonsList: [
      {
        id: "lesson-1",
        title: "Introduction Video",
        duration: "25 min",
        completed: false,
        content: {
          title: "Finding A Senior Home - Introduction",
          description: "Watch this video to learn the essential steps for finding and connecting with senior homes.",
          videoUrl: "/videos/module1-intro.mp4",
          sections: [],
          keyTakeaways: [
            "Research multiple senior homes (5-10) in your area",
            "Document key information for each facility",
            "Reach out to the recreation director or activity coordinator",
            "Use Google Maps to find local senior homes",
            "Follow up consistently to secure a partnership"
          ]
        }
      },
      {
        id: "lesson-2",
        title: "Module 1 Quiz",
        duration: "20 min",
        completed: false,
        content: {
          title: "Module 1 Knowledge Check",
          description: "Test your understanding of the key concepts from this module.",
          quizQuestions: [
            {
              question: "Q1: What is the first step in finding a senior home?",
              options: {
                A: "Gathering your group of volunteers",
                B: "Finding potential senior homes",
                C: "Contacting the directors of operations for a list of seniors homes",
                D: "Cold call senior homes in your area"
              },
              answer: "B"
            },
            {
              question: "Q2: From the list what is something you do NOT need to document?",
              options: {
                A: "Name of the senior home",
                B: "Number of seniors at the location",
                C: "Contact information",
                D: "Name of activity/enrichment manager"
              },
              answer: "B"
            },
            {
              question: "Q3: Which of the following is a key term we recommend to use when finding local senior homes?",
              options: {
                A: "facilites that cadre retirment parties",
                B: "facilites that assist seniors",
                C: "Old peoples residence",
                D: "Seniors' residence"
              },
              answer: "D"
            },
            {
              question: "Q4: Which method of contact is the best for an immediate response?",
              options: {
                A: "Email",
                B: "Contact seniors at the senior home",
                C: "Cold call",
                D: "Both B and C"
              },
              answer: "C"
            },
            {
              question: "Q5: How many senior home's information should you document while researching?",
              options: {
                A: "1-3",
                B: "4-5",
                C: "5-10",
                D: "10+"
              },
              answer: "C"
            },
            {
              question: "Q6: Chapter leads are expected to find a senior home within 3 weeks of joining GPD, what should you do you help you accomplish this?",
              options: {
                A: "Start your research the day you join",
                B: "Do follow up calls/emails",
                C: "Reach out to a lot of senior homes including ones outside your city",
                D: "Both A and B"
              },
              answer: "A"
            },
            {
              question: "Q7: What is the app we advise you use to find local senior homes?",
              options: {
                A: "Google Maps",
                B: "Senior's residences",
                C: "GPD Maps",
                D: "Both A and C"
              },
              answer: "A"
            },
            {
              question: "Q8: Who is the recommended person to reach out to at the senior homes?",
              options: {
                A: "CEO/Franchisee",
                B: "Residents of the senior home",
                C: "Recreation director/activity coordinator",
                D: "None of the above"
              },
              answer: "C"
            },
            {
              question: "Q9: What is the MAIN reason you should create a list of senior homes?",
              options: {
                A: "To track which senior homes you have visited",
                B: "To track which senior homes you have reached out to",
                C: "To have an organized place for contact information",
                D: "To make a resource for other struggling chapter leads"
              },
              answer: "B"
            },
            {
              question: "Q10: In what order is it recommended to reach out to senior homes?",
              options: {
                A: "Cold call then email",
                B: "Visit in person then phone call",
                C: "Visit in person then cold-calling then emailing them",
                D: "email them about your visit then visiting in person then finally a cold-call"
              },
              answer: "D"
            }
          ],
          sections: [],
          keyTakeaways: []
        }
      }
    ]
  },
  {
    id: "creative-writing",
    title: "Module 2: What To Do During Sessions",
    description: "Learn how to conduct effective and engaging sessions at senior homes.",
    category: "Workshop Skills",
    lessons: 2,
    duration: "45 min",
    progress: 0,
    lessonsList: [
      {
        id: "lesson-1",
        title: "Introduction Video",
        duration: "25 min",
        completed: false,
        content: {
          title: "What To Do During Sessions - Introduction",
          description: "Watch this video to learn the essential practices for conducting sessions at senior homes.",
          videoUrl: "/videos/module2-intro.mp4",
          sections: [],
          keyTakeaways: [
            "Aim for weekly or biweekly session frequency",
            "Build close relationships with consistent visits",
            "Always bring paper, pens/pencils, and printed prompts",
            "Introduce yourself at the beginning of each session",
            "Be patient and flexible with seniors"
          ]
        }
      },
      {
        id: "lesson-2",
        title: "Module 2 Quiz",
        duration: "20 min",
        completed: false,
        content: {
          title: "Module 2 Knowledge Check",
          description: "Test your understanding of the key concepts about conducting sessions.",
          quizQuestions: [
            {
              question: "Q1: What is the minimum session frequency?",
              options: {
                A: "2 or 3 times per week",
                B: "Weekly or biweekly",
                C: "Once a month",
                D: "Bimonthly"
              },
              answer: "B"
            },
            {
              question: "Q2: Why should you aim for weekly sessions?",
              options: {
                A: "To build close relationships",
                B: "To give the seniors citizens consistent meaningful and joyful times",
                C: "To make sure that the senior citizens who might have dementia to not forget about things they wish to write about",
                D: "All of the above"
              },
              answer: "D"
            },
            {
              question: "Q3: Which of the following items are NOT required for every visit ?",
              options: {
                A: "Paper",
                B: "Pencils or pens",
                C: "Printed poetry prompts",
                D: "Volunteer sign in forms"
              },
              answer: "D"
            },
            {
              question: "Q4: Sometimes NOT being able meeting the minimum session frequency is a result of which of the following?",
              options: {
                A: "Poor planning",
                B: "Not having enough volunteers",
                C: "Chapter lead not havign the time",
                D: "Variability with senior home availability"
              },
              answer: "D"
            },
            {
              question: "Q5: Why is bringing a volunteer sign in sheet sometimes not needed?",
              options: {
                A: "Volunteers aren't always required to show up",
                B: "You can tell who's missing based on who tells you beforehand",
                C: "If you know the volunteers well enough",
                D: "Both B and C"
              },
              answer: "C"
            },
            {
              question: "Q6: What is something important to remember to do?",
              options: {
                A: "Be patient and flexible with the seniors",
                B: "Always introduce yourself at the beginning of each session",
                C: "Some seniors may have memory problems",
                D: "All of the above"
              },
              answer: "B"
            },
            {
              question: "Q7: Why should you be patient and felxible when interacting with the seniors??",
              options: {
                A: "Some seniors prefer to talk instead of write",
                B: "The seniors may need some time to remember ",
                C: "The seniors might not be good with words",
                D: "All of the above"
              },
              answer: "D"
            },
            {
              question: "Q8: Why should you always introduce yourslef at the beginning of each session?",
              options: {
                A: "For the seniors to get to know you better",
                B: "Every senior will forget who you are if you don't",
                C: "Both A and B",
                D: "For the seniors to not forget who you are"
              },
              answer: "A"
            },
            {
              question: "Q9: Which of the following ISN'T an activity listed in the session format?",
              options: {
                A: "Questions of the day",
                B: "Creative writing time",
                C: "Poem reading",
                D: "Quick break"
              },
              answer: "D"
            },
            {
              question: "Q10: How long should each session be according to the format?",
              options: {
                A: "1.5 hours",
                B: "2 hours",
                C: "1 hour",
                D: "45 minutes"
              },
              answer: "C"
            }
          ],
          sections: [],
          keyTakeaways: []
        }
      }
    ]
  },
  {
    id: "community-impact",
    title: "Module 3",
    description: "Learn how to track, measure, and communicate your chapter's community impact.",
    category: "Impact",
    lessons: 4,
    duration: "1.5 hours",
    progress: 0,
    lessonsList: [
      {
        id: "lesson-1",
        title: "Defining Success Metrics",
        duration: "20 min",
        completed: false,
        content: {
          title: "Defining Success Metrics",
          description: "Identify meaningful ways to measure your chapter's success and impact.",
          sections: [
            {
              heading: "Quantitative Metrics",
              content: "Track sessions held, participants served, volunteers engaged, memoirs created, facilities partnered with, and volunteer hours contributed. These numbers tell part of the story."
            },
            {
              heading: "Qualitative Impact",
              content: "Collect participant testimonials, volunteer reflections, facility feedback, and stories of meaningful connections made. This narrative data captures the heart of our work."
            }
          ],
          keyTakeaways: [
            "Numbers and stories both matter",
            "Track consistently for accurate data",
            "Impact goes beyond simple metrics",
            "Personal stories bring statistics to life"
          ]
        }
      },
      {
        id: "lesson-2",
        title: "Collecting Feedback and Testimonials",
        duration: "25 min",
        completed: false,
        content: {
          title: "Collecting Feedback and Testimonials",
          description: "Learn effective methods for gathering meaningful feedback from participants and partners.",
          sections: [
            {
              heading: "Participant Surveys",
              content: "Keep surveys short and accessible. Ask about enjoyment, meaningful connections, interest in future sessions, and open-ended questions about impact. Respect that not all seniors will want to complete surveys."
            }
          ],
          keyTakeaways: [
            "Make feedback gathering simple and optional",
            "Focus on meaningful questions",
            "Respect privacy and comfort levels",
            "Testimonials are powerful advocacy tools"
          ]
        }
      },
      {
        id: "lesson-3",
        title: "Storytelling for Impact",
        duration: "30 min",
        completed: false,
        content: {
          title: "Storytelling for Impact",
          description: "Master the art of sharing your chapter's impact stories effectively.",
          sections: [
            {
              heading: "Crafting Impact Stories",
              content: "Good impact stories include: specific details and context, emotional resonance, clear connection to mission, and outcomes or changes observed. Show don't just tell. Use photos when appropriate and permitted."
            }
          ],
          keyTakeaways: [
            "Stories make abstract impact concrete",
            "Specific details create emotional connection",
            "Always protect participant privacy",
            "Diverse stories show breadth of impact"
          ]
        }
      },
      {
        id: "lesson-4",
        title: "Sharing Your Work Publicly",
        duration: "15 min",
        completed: false,
        content: {
          title: "Sharing Your Work Publicly",
          description: "Learn how to appropriately share your chapter's work with the broader community.",
          sections: [
            {
              heading: "Social Media Guidelines",
              content: "Always get consent before sharing photos or stories. Focus on celebrating the work and impact, not identifying vulnerable individuals. Use our organizational hashtags and tags. Maintain professionalism and dignity in all posts."
            }
          ],
          keyTakeaways: [
            "Consent and privacy are non-negotiable",
            "Share impact, not personal identifiers",
            "Coordinate with central organization",
            "Public sharing raises awareness and support"
          ]
        }
      }
    ]
  }
];
