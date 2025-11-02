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
          keyTakeaways: []
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
              question: "Q4: Which method of contact is the best for an immediate response if you CAN'T visit in person?",
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
              question: "Q6: Chapter leads are expected to find a senior home within 3 weeks of joining GPD, what can be done to help accomplish this?",
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
          keyTakeaways: []
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
    title: "Module 3: Reporting Progress",
    description: "Learn how to effectively report and communicate your chapter's progress.",
    category: "Impact",
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
          title: "Reporting Progress - Introduction",
          description: "Watch this video to learn the essential practices for reporting your chapter's progress.",
          videoUrl: "/videos/module3-intro.mp4",
          sections: [],
          keyTakeaways: []
        }
      },
      {
        id: "lesson-2",
        title: "Module 3 Quiz",
        duration: "20 min",
        completed: false,
        content: {
          title: "Module 3 Knowledge Check",
          description: "Test your understanding of the key concepts about reporting progress.",
          quizQuestions: [
            {
              question: "Q1: Who should you be consistently communicasting with about your sessions?",
              options: {
                A: "Board of directors",
                B: "Directors of operations",
                C: "Vice president",
                D: "President"
              },
              answer: "B"
            },
            {
              question: "Q2: how often should you be making a check in form?",
              options: {
                A: "Every week",
                B: "Biweekly",
                C: "Every session",
                D: "Every 2 sessions"
              },
              answer: "C"
            },
            {
              question: "Q3: Which of the following is NOT something you need to note down on your check-in form?",
              options: {
                A: "Names of the seniors who attended",
                B: "Name of the senior home",
                C: "Number of volunteers",
                D: "Number of seniors who attended"
              },
              answer: "A"
            },
            {
              question: "Q4: What is something that you should report on the monthly reflection?",
              options: {
                A: "What's working not too well",
                B: "What works  well",
                C: "Suggestions for better support",
                D: "All of the above"
              },
              answer: "D"
            },
            {
              question: "Q5: Which of the following is NOT a goal of a chapter lead?",
              options: {
                A: "Having a warm relationship with the senior home",
                B: "Have meaningful conversations",
                C: "Excellent communication with the seniors",
                D: "All of the above are chapter lead goals that were listed"
              },
              answer: "C"
            },
            {
              question: "Q6: Suppose you are in a weekly session with the seniors and one of the seniors start being rude and not listening. What is the best thing to do?",
              options: {
                A: "Report it on your weekly check-in form",
                B: "Attempt to build a closer relationship while calming them down",
                C: "Attempt to calm them down but stop engaging them if they aren't cooperating",
                D: "Reach out to the GPD executive team for support"
              },
              answer: "B"
            },
            {
              question: "Q7: Imagine a senior Who has had trouble with remembering things for a while suddenly remembers memories they had forgotten during creative writing. Where would you record it?",
              options: {
                A: "Weekly check-in form as something that worked well",
                B: "Weekly check-in form as a special moment",
                C: "Monthly reflection as something that worked well",
                D: "All of the above"
              },
              answer: "C"
            },
            {
              question: "Q8: Why is having meaningful conversations so important?",
              options: {
                A: "It helps build a warm relationship",
                B: "Represents GPD's professionalism",
                C: "Shows you actually care about the seniors",
                D: "both A and C"
              },
              answer: "D"
            },
            {
              question: "Q9: How often are the zoom meetings where you share updates??",
              options: {
                A: "Weekly",
                B: "Biweekly",
                C: "Monthly",
                D: "Bimonthly"
              },
              answer: "D"
            },
            {
              question: "Q10: How often are the Weekly check-in forms checked?",
              options: {
                A: "Every week",
                B: "Every other week",
                C: "Monthly",
                D: "every other month"
              },
              answer: "B"
            }
          ],
          sections: [],
          keyTakeaways: []
        }
      }
    ]
  },
  {
    id: "troubleshooting",
    title: "Module 4: Troubleshooting and Volunteering Guide",
    description: "Learn how to handle common challenges and effectively manage volunteers.",
    category: "Operations",
    lessons: 3,
    duration: "60 min",
    progress: 0,
    lessonsList: [
      {
        id: "lesson-1",
        title: "Troubleshooting - Part 1",
        duration: "20 min",
        completed: false,
        content: {
          title: "Troubleshooting Common Challenges - Part 1",
          description: "Watch this video to learn effective strategies for outreach and increasing participation.",
          videoUrl: "/videos/module4-intro.mp4",
          sections: [],
          keyTakeaways: []
        }
      },
      {
        id: "lesson-2",
        title: "Volunteering Guide - Part 2",
        duration: "20 min",
        completed: false,
        content: {
          title: "Working with Seniors and Managing Volunteers - Part 2",
          description: "Watch this video to learn how to support seniors with various conditions and recruit volunteers.",
          videoUrl: "/videos/module5-intro.mp4",
          sections: [],
          keyTakeaways: []
        }
      },
      {
        id: "lesson-3",
        title: "Module 4 Quiz",
        duration: "20 min",
        completed: false,
        content: {
          title: "Module 4 Knowledge Check",
          description: "Test your understanding of troubleshooting and volunteer management.",
          quizQuestions: [
            {
              question: "Q1: Which of the following ISN'T something listed to help successfully outreach senior homes?",
              options: {
                A: "Playing the high school card",
                B: "Emphasize the benefits of working with GPD",
                C: "Giving the senior home a phone call",
                D: "All of the above are listed on the slideshow"
              },
              answer: "D"
            },
            {
              question: "Q2: True or false: Playing the high schooler card when reaching out to senior homes helps quite a bit?",
              options: {
                A: "True, the senior homes belive being younger means you are more inclined to do what you belive in.",
                B: "True, the senior homes tend to like the youth especially because its for a good cause",
                C: "False, The senior homes don't care about how old you are.",
                D: "False, The senior homes don't get swayed by age very easily"
              },
              answer: "C"
            },
            {
              question: "Q3: Why is a \"cold call\" a good way to outrach senior homes?",
              options: {
                A: "It's much harder to avoid an email than a phone call",
                B: "There aren't any delays in communications with phone calls",
                C: "Your voice can help them familiarize you",
                D: "Emails aren't very informative when compared to phone calls"
              },
              answer: "C"
            },
            {
              question: "Q4: How can you increase your participation levels?",
              options: {
                A: "Plan far ahead ",
                B: "Advertize the meeting anywhere in the senior home",
                C: "Tell the seniors beforehand",
                D: "All of the above"
              },
              answer: "D"
            },
            {
              question: "Q5: Which of the following isn't a possible condition listed in the video?",
              options: {
                A: "Difficulties with speech",
                B: "Hearing loss",
                C: "Introversion",
                D: "Dementia"
              },
              answer: "A"
            },
            {
              question: "Q6: A senior attends the session that you haven't seen before. He seems to stumble over his words often and mix them up. What is the best way to help them during the session?",
              options: {
                A: "Be more verbal",
                B: "Use smaller fonts",
                C: "Use other words that arendon't look or sound very similar",
                D: "Write the instructions down on a piece of paper for them to read at any time"
              },
              answer: "A"
            },
            {
              question: "Q7: A senior who usually attends meetings but sometimes misses them. They exhibit problems with following the directions. What is crucial to help them during the session",
              options: {
                A: "Be patient with them",
                B: "Give them written notes for them to read at any time",
                C: "Start wtih smaller activities first",
                D: "None of the above"
              },
              answer: "A"
            },
            {
              question: "Q8: Why is being patient with the seniors who have conditions necessary?",
              options: {
                A: "Their conditions can affect how they understand instructions",
                B: "It could hurt their feelings",
                C: "It could hurt GPD's image",
                D: "A and B"
              },
              answer: "D"
            },
            {
              question: "Q9: How should you choose volunteers?",
              options: {
                A: "Recruit students in the area",
                B: "Recruit responsible adults in the area",
                C: "Recruit anyone willing to help in the area",
                D: "All of the above"
              },
              answer: "A"
            },
            {
              question: "Q10: How many volunteers should You aim for for each session?",
              options: {
                A: "5-7",
                B: "3-5",
                C: "same number of volunteers as participants ",
                D: "None of the above"
              },
              answer: "B"
            }
          ],
          sections: [],
          keyTakeaways: []
        }
      }
    ]
  },
  {
    id: "final-quiz",
    title: "Module 5: Final Quiz",
    description: "Test your comprehensive understanding of all training modules. Requires completion of all previous modules.",
    category: "Assessment",
    lessons: 1,
    duration: "30 min",
    progress: 0,
    lessonsList: [
      {
        id: "lesson-1",
        title: "Final Quiz",
        duration: "30 min",
        completed: false,
        content: {
          title: "Final Assessment",
          description: "This comprehensive quiz tests your knowledge across all training modules. You must achieve 80% to pass.",
          quizQuestions: [
            {
              question: "Q1: You've reached out to several senior homes but haven't had any luck getting a response. What's the most effective way to move forward?",
              options: {
                A: "Wait a few more days and then send follow-up emails",
                B: "Continue calling the same homes until someone answers",
                C: "Re-contact the same homes using a formal script, reach out to new homes, and highlight your student-led initiative",
                D: "Send an updated brochure and wait for responses"
              },
              answer: "C"
            },
            {
              question: "Q2: Who is the most appropriate person to reach out to at a senior home when proposing a partnership?",
              options: {
                A: "Administrative assistant at the front desk",
                B: "Recreation or activity coordinator",
                C: "Facility nurse",
                D: "CEO or Franchisee"
              },
              answer: "B"
            },
            {
              question: "Q3: How should you determine the frequency of writing sessions with a senior home?",
              options: {
                A: "Hold weekly sessions no matter what",
                B: "Only offer monthly sessions to avoid overcommitment",
                C: "Aim for weekly or biweekly sessions, but adjust based on the senior home's availability",
                D: "Let volunteers decide when they want to show up"
              },
              answer: "C"
            },
            {
              question: "Q4: Which of the following items is NOT required at every session?",
              options: {
                A: "Volunteer sign-in form",
                B: "Pens or pencils",
                C: "Printed poetry prompts",
                D: "Paper"
              },
              answer: "A"
            },
            {
              question: "Q5: Why is it important to be patient and flexible when working with seniors?",
              options: {
                A: "Some may have memory or cognitive issues",
                B: "Seniors prefer younger volunteers",
                C: "Some may not enjoy writing at all",
                D: "It helps speed up the session"
              },
              answer: "A"
            },
            {
              question: "Q6: A new volunteer seems unsure about how to interact with seniors during the session. What's the best way to support them?",
              options: {
                A: "Let them figure it out during the session to build confidence",
                B: "Brief them before the session and pair them with an experienced volunteer",
                C: "Ask them to observe until they feel ready to jump in",
                D: "Have them manage attendance instead of participating in activities"
              },
              answer: "B"
            },
            {
              question: "Q7: Your sessions have low senior turnout. What is one effective way to increase attendance?",
              options: {
                A: "Go around the lobby and personally invite seniors before the session",
                B: "Stop the sessions for a while until interest increases",
                C: "Only rely on posters or flyers to advertise the session",
                D: "Wait for the activity coordinator to remind seniors"
              },
              answer: "A"
            },
            {
              question: "Q8: A senior says they're not in the mood to write today but would enjoy chatting. What should you do?",
              options: {
                A: "Tell them writing is required for today's session",
                B: "Respect their preference and let them engage through conversation",
                C: "Let them observe quietly until they're ready",
                D: "Ask a volunteer to try convincing them to write"
              },
              answer: "B"
            },
            {
              question: "Q9: What's an effective way to keep volunteers engaged during writing sessions?",
              options: {
                A: "Rotate leadership tasks like greeting or guiding prompts among volunteers",
                B: "Limit volunteer involvement to reduce confusion",
                C: "Let volunteers choose whether or not to participate",
                D: "Only allow the chapter lead to manage the session activities"
              },
              answer: "A"
            },
            {
              question: "Q10: Two weeks into your role, you still haven't secured a senior home. What should you do next?",
              options: {
                A: "Take a break and try again in a few weeks",
                B: "Limit outreach to homes closer to you",
                C: "Reach out to more homes, follow up with past contacts, and refine your message",
                D: "Wait for current leads to respond before trying new ones"
              },
              answer: "C"
            }
          ],
          sections: [],
          keyTakeaways: []
        }
      }
    ]
  }
];
