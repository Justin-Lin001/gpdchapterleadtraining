export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  content: {
    title: string;
    description: string;
    videoUrl?: string;
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
    description: "Learn the core principles of leading a Grandparents' Diary chapter effectively.",
    category: "Leadership",
    lessons: 6,
    duration: "2.5 hours",
    progress: 45,
    lessonsList: [
      {
        id: "lesson-1",
        title: "Understanding Your Role as Chapter Lead",
        duration: "25 min",
        completed: true,
        content: {
          title: "Understanding Your Role as Chapter Lead",
          description: "Discover the key responsibilities and expectations of a chapter lead in the Grandparents' Diary organization.",
          videoUrl: "/videos/module1-intro.mp4",
          sections: [
            {
              heading: "What is a Chapter Lead?",
              content: "A Chapter Lead is the primary coordinator and facilitator for a local Grandparents' Diary chapter. You serve as the bridge between volunteers, seniors, and the central organization, ensuring that creative writing workshops run smoothly and meaningfully impact your community."
            },
            {
              heading: "Core Responsibilities",
              content: "Your main duties include organizing regular writing sessions, recruiting and managing volunteers, maintaining relationships with senior centers, coordinating poetry memoir creation and distribution, and reporting progress to the central organization. You'll also be responsible for maintaining the quality standards that make our programs special."
            },
            {
              heading: "Essential Skills",
              content: "Successful chapter leads demonstrate strong organizational abilities, compassionate communication, creative problem-solving, and dedication to our mission. You don't need to be a professional writer or teacher—just someone who cares deeply about connecting generations through storytelling."
            }
          ],
          keyTakeaways: [
            "Chapter Leads are the heart of local GPD operations",
            "Balance administrative duties with relationship building",
            "Focus on creating meaningful intergenerational connections",
            "You're part of a supportive network—never alone in this role"
          ]
        }
      },
      {
        id: "lesson-2",
        title: "Building Relationships with Senior Centers",
        duration: "30 min",
        completed: true,
        content: {
          title: "Building Relationships with Senior Centers",
          description: "Learn how to establish and maintain strong partnerships with geriatric centers and senior living facilities.",
          sections: [
            {
              heading: "Making First Contact",
              content: "Start by researching local senior centers, retirement communities, and assisted living facilities. Reach out to activity directors or community coordinators with a clear, compelling introduction to Grandparents' Diary. Share our mission, success stories, and the specific benefits our program brings to residents."
            },
            {
              heading: "Presenting the Program",
              content: "Prepare a brief presentation or information packet that explains how our workshops work, time commitments required, and the meaningful outcomes for participants. Emphasize that our program is free, volunteer-led, and designed to combat loneliness while celebrating seniors' life stories."
            },
            {
              heading: "Maintaining Partnerships",
              content: "Regular communication is key. Check in with facility coordinators monthly, share updates and success stories, be responsive to their scheduling needs, and show appreciation for their support. Strong partnerships make it easier to sustain programs long-term."
            }
          ],
          keyTakeaways: [
            "Activity directors are your key contacts at facilities",
            "Lead with impact stories and clear program benefits",
            "Flexibility and reliability build lasting partnerships",
            "Document your agreements and maintain regular communication"
          ]
        }
      },
      {
        id: "lesson-3",
        title: "Volunteer Recruitment and Management",
        duration: "35 min",
        completed: false,
        content: {
          title: "Volunteer Recruitment and Management",
          description: "Master the art of finding, training, and retaining dedicated volunteers for your chapter.",
          sections: [
            {
              heading: "Where to Find Volunteers",
              content: "Recruit from local high schools, colleges, community centers, places of worship, and online volunteer platforms. Partner with school community service coordinators, reach out to writing clubs, and leverage social media to spread the word about opportunities."
            },
            {
              heading: "Volunteer Training",
              content: "Provide clear training on our creative writing approach, active listening techniques, respect and empathy when working with seniors, and our poetry memoir creation process. Ensure volunteers understand both the creative and administrative aspects of their role."
            },
            {
              heading: "Retention Strategies",
              content: "Keep volunteers engaged by recognizing their contributions, providing ongoing support and feedback, creating a sense of community among your team, and celebrating the impact they're making. Regular appreciation goes a long way."
            }
          ],
          keyTakeaways: [
            "Diverse recruitment sources bring fresh perspectives",
            "Thorough training sets volunteers up for success",
            "Recognition and community keep volunteers committed",
            "Regular check-ins help address concerns early"
          ]
        }
      },
      {
        id: "lesson-4",
        title: "Facilitating Meaningful Writing Sessions",
        duration: "40 min",
        completed: false,
        content: {
          title: "Facilitating Meaningful Writing Sessions",
          description: "Learn techniques for creating engaging, compassionate creative writing workshops with seniors.",
          sections: [
            {
              heading: "Session Structure",
              content: "A typical session includes: warm welcome and introductions (5-10 min), creative prompt or theme introduction (10 min), guided writing and storytelling time (30-40 min), sharing and discussion (15-20 min), and closing reflection (5 min). Flexibility is important based on group dynamics."
            },
            {
              heading: "Creative Prompts",
              content: "Use memory-focused prompts like 'A Person Who Changed My Life,' 'My Favorite Season and Why,' or 'A Moment of Joy I'll Never Forget.' Keep prompts open-ended, positive, and accessible. Seniors should feel free to interpret prompts in their own way."
            },
            {
              heading: "Creating Safe Space",
              content: "Establish ground rules of respect and confidentiality. Encourage sharing without pressure. Listen actively and validate every story shared. Remember that for many seniors, this may be their first time expressing these memories creatively."
            }
          ],
          keyTakeaways: [
            "Balance structure with flexibility in sessions",
            "Memory prompts unlock meaningful stories",
            "Active listening is as important as writing",
            "Create an atmosphere of respect and celebration"
          ]
        }
      },
      {
        id: "lesson-5",
        title: "Poetry Memoir Creation Process",
        duration: "30 min",
        completed: false,
        content: {
          title: "Poetry Memoir Creation Process",
          description: "Understand how to transform seniors' stories into beautiful poetry memoirs.",
          sections: [
            {
              heading: "From Story to Poetry",
              content: "Work with volunteers to identify key themes, emotions, and images from seniors' shared stories. Craft short poems that honor the essence of their memories. Focus on authenticity over perfection—these are personal tributes, not literary masterpieces."
            },
            {
              heading: "Design and Presentation",
              content: "Volunteers create visually appealing layouts featuring the poem, relevant imagery, and personal touches. Use quality paper and thoughtful design. These memoirs become cherished keepsakes for seniors and their families."
            },
            {
              heading: "Quality Standards",
              content: "Ensure every memoir reflects genuine care: clear, legible text; appropriate imagery; correct spelling and grammar; and personal touches that show thought and effort. Review all memoirs before distribution to maintain our standards."
            }
          ],
          keyTakeaways: [
            "Poetry memoirs honor seniors' life stories",
            "Focus on emotional authenticity over poetic perfection",
            "Quality design shows respect and care",
            "These become treasured family keepsakes"
          ]
        }
      },
      {
        id: "lesson-6",
        title: "Reporting and Communication",
        duration: "20 min",
        completed: false,
        content: {
          title: "Reporting and Communication",
          description: "Learn how to effectively communicate with the central organization and track your chapter's impact.",
          sections: [
            {
              heading: "Monthly Reporting",
              content: "Submit monthly reports including: number of sessions held, seniors participated, volunteers involved, memoirs created and distributed, and any notable stories or challenges. Use the provided templates for consistency."
            },
            {
              heading: "Tracking Impact",
              content: "Keep records of participant feedback, volunteer hours, facility partnerships, and community engagement. These metrics help demonstrate our collective impact and secure future support for the organization."
            },
            {
              heading: "Staying Connected",
              content: "Attend monthly chapter lead meetings (virtual or in-person), participate in the shared Slack/communication channel, reach out for support when needed, and share best practices with other leads. We're stronger together."
            }
          ],
          keyTakeaways: [
            "Regular reporting helps track organizational impact",
            "Documentation supports future growth and funding",
            "Communication channels keep you connected and supported",
            "Your insights help improve the program for everyone"
          ]
        }
      }
    ]
  },
  {
    id: "creative-writing",
    title: "Module 2",
    description: "Advanced methods for facilitating engaging creative writing sessions with seniors.",
    category: "Workshop Skills",
    lessons: 5,
    duration: "2 hours",
    progress: 0,
    lessonsList: [
      {
        id: "lesson-1",
        title: "Memory-Based Writing Prompts",
        duration: "25 min",
        completed: false,
        content: {
          title: "Memory-Based Writing Prompts",
          description: "Explore effective prompts that unlock meaningful memories and stories.",
          sections: [
            {
              heading: "Types of Memory Prompts",
              content: "Sensory prompts (sounds, smells, tastes), milestone moments (first job, wedding day), seasonal memories, relationship-focused prompts, and place-based memories all work well. Variety keeps sessions fresh and engages different participants."
            },
            {
              heading: "Adapting to Your Group",
              content: "Observe which prompts resonate most with your participants. Some groups love nostalgic prompts about childhood, while others prefer reflecting on life lessons or family stories. Flexibility is key."
            }
          ],
          keyTakeaways: [
            "Diverse prompts engage different memory types",
            "Adapt based on participant responses",
            "Positive framing encourages sharing",
            "Open-ended prompts allow personal interpretation"
          ]
        }
      },
      {
        id: "lesson-2",
        title: "Active Listening and Empathy",
        duration: "30 min",
        completed: false,
        content: {
          title: "Active Listening and Empathy",
          description: "Develop skills for compassionate, engaged listening during storytelling sessions.",
          sections: [
            {
              heading: "The Art of Listening",
              content: "Give full attention without interrupting, maintain eye contact and open body language, respond with empathy and validation, and ask clarifying questions that show genuine interest. Listening is a gift you give participants."
            }
          ],
          keyTakeaways: [
            "Deep listening honors seniors' experiences",
            "Non-verbal cues show engagement",
            "Empathy builds trust and openness",
            "Questions demonstrate genuine interest"
          ]
        }
      },
      {
        id: "lesson-3",
        title: "Working with Diverse Abilities",
        duration: "25 min",
        completed: false,
        content: {
          title: "Working with Diverse Abilities",
          description: "Learn to adapt sessions for participants with varying cognitive and physical abilities.",
          sections: [
            {
              heading: "Cognitive Adaptations",
              content: "For participants with memory challenges, use visual aids and photos, keep prompts simple and concrete, allow verbal responses if writing is difficult, and celebrate every contribution regardless of length or complexity."
            }
          ],
          keyTakeaways: [
            "Adapt methods to individual needs",
            "Verbal storytelling is as valuable as written",
            "Patience and flexibility are essential",
            "Every person has stories worth sharing"
          ]
        }
      },
      {
        id: "lesson-4",
        title: "Group Dynamics and Facilitation",
        duration: "20 min",
        completed: false,
        content: {
          title: "Group Dynamics and Facilitation",
          description: "Master the skills needed to manage group dynamics and create positive session flow.",
          sections: [
            {
              heading: "Managing Group Energy",
              content: "Balance quiet reflection with group discussion, encourage shy participants without pressure, gently redirect overly dominant speakers, and maintain a positive, supportive atmosphere throughout the session."
            }
          ],
          keyTakeaways: [
            "Balance individual and group participation",
            "Foster inclusive, respectful dialogue",
            "Read the room and adjust accordingly",
            "Every voice deserves to be heard"
          ]
        }
      },
      {
        id: "lesson-5",
        title: "Handling Sensitive Topics",
        duration: "20 min",
        completed: false,
        content: {
          title: "Handling Sensitive Topics",
          description: "Navigate emotional or difficult topics with care and professionalism.",
          sections: [
            {
              heading: "When Stories Get Heavy",
              content: "Some memories involve loss, trauma, or sadness. Acknowledge emotions with compassion, don't rush past difficult feelings, offer breaks if needed, and know when to suggest professional support if someone seems overwhelmed."
            }
          ],
          keyTakeaways: [
            "Emotional stories require extra care",
            "Validate feelings without trying to 'fix'",
            "Know your limits and resources",
            "Create space for all emotions"
          ]
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
