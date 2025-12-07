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

export interface PoemType {
  name: string;
  description: string;
  rules: string[];
  example?: {
    title?: string;
    lines: string[];
  };
  moreReading?: {
    lines: string[];
  };
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
    poemTypesGuide?: PoemType[];
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
              question: "Q2: From the list, what is something you do not need to document?",
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
                A: "Facilities that cadre retirement parties",
                B: "Facilities that assist seniors",
                C: "Old peoples residence",
                D: "Seniors' residence"
              },
              answer: "D"
            },
            {
              question: "Q4: Which method of contact is the best for an immediate response if you cannot visit in person?",
              options: {
                A: "Email",
                B: "Contact seniors at the senior home",
                C: "Cold call",
                D: "Both B and C"
              },
              answer: "C"
            },
            {
              question: "Q5: Regarding the contact information of a senior home, how many senior homes should you document while researching?",
              options: {
                A: "1-3",
                B: "4-5",
                C: "5-10",
                D: "10+"
              },
              answer: "C"
            },
            {
              question: "Q6: Chapter leads are expected to find a senior home within 3 weeks of joining GPD. What can be done to help accomplish this?",
              options: {
                A: "Start your research the day you join",
                B: "Do follow-up calls and emails",
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
                C: "Recreation director or activity coordinator",
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
                D: "Email them about your visit then visit in person then finally cold-call"
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
    lessons: 3,
    duration: "60 min",
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
        title: "Poem Types Guide",
        duration: "15 min",
        completed: false,
        content: {
          title: "Poetry Types Guide",
          description: "Learn about different poetry types you can use during sessions with seniors. Scroll through the entire guide to unlock the quiz.",
          poemTypesGuide: [
            {
              name: "Haiku",
              description: "A traditional Japanese form of poetry that emphasizes simplicity, intensity, and directness. Usually focuses on nature or seasons.",
              rules: ["Line 1: Five syllables", "Line 2: Seven syllables", "Line 3: Five syllables"],
              example: {
                lines: ["The wind blows softly,", "Leaves falling, a golden dance,", "Autumn whispers close."]
              },
              moreReading: {
                lines: ["Snow falls silently,", "Covering the earth with peace,", "Winter's gentle touch."]
              }
            },
            {
              name: "Limerick",
              description: "A humorous and often nonsensical five-line poem with a bouncy rhythm. It usually has a playful tone and can be used for light-hearted, amusing themes.",
              rules: ["Rhyming Scheme: AABBA", "Line 1: Eight syllables", "Line 2: Eight syllables", "Line 3: Five syllables", "Line 4: Five syllables", "Line 5: Eight syllables"],
              example: {
                lines: ["There once was a man from Peru,", "Who dreamed he was eating his shoe.", "He awoke with a fright", "In the middle of night,", "And found that his dream had come true!"]
              },
              moreReading: {
                lines: ["There once was a frog on a log,", "Who loves to sit there and write blogs.", "He typed day and night,", "By the soft moonlight,", "Till he fell asleep in the fog!"]
              }
            },
            {
              name: "Ballad",
              description: "A narrative poem that tells a story, often about love, adventure, or tragedy, traditionally with a musical rhythm.",
              rules: ["Rhyming Scheme: ABCB or ABAB"],
              example: {
                lines: ["The wind was cold, the night was dark,", "A ship sailed on the sea,", "Its crew were silent as they went,", "For ghosts they thought they'd see."]
              },
              moreReading: {
                lines: ["She walked the hills at break of day,", "The sun yet scarce did rise,", "And there she found her true love lay,", "With sorrow in her eyes."]
              }
            },
            {
              name: "Acrostic",
              description: "A modern-poem in which certain letters of each line combine to spell out a word, name, or phrase when read vertically.",
              rules: ["The first letter of each line spells out a word or message"],
              example: {
                lines: ["Hearts beat with joy anew,", "Opening wide to embrace,", "Promising better tomorrows,", "Everlasting is its grace."]
              },
              moreReading: {
                lines: ["Lingers long in silent thoughts,", "Over rivers, seas, and skies,", "Veiled in beauty, warm and bright,", "Endless as the stars at night."]
              }
            },
            {
              name: "Cinquain",
              description: "A five-line poem that follows a specific syllabic structure.",
              rules: ["Line 1: 2 syllables", "Line 2: 4 syllables", "Line 3: 6 syllables", "Line 4: 8 syllables", "Line 5: 2 syllables"],
              example: {
                lines: ["Gentle", "Breeze in the night,", "Whispering soft secrets,", "Cradling the trees in warm arms,", "Silent."]
              },
              moreReading: {
                lines: ["Sunrise", "Fills the sky wide,", "Colors blend and collide,", "Hope sparkles in the light of dawn,", "Alive."]
              }
            },
            {
              name: "List Poem",
              description: "A poem that catalogs ideas, objects, or thoughts. It's great for personal expression and creativity.",
              rules: ["No set rhyme or meter", "Focus on listing related items or concepts"],
              example: {
                title: "Things I find in the night:",
                lines: ["Moonlight on quiet streets,", "Crickets singing their endless song,", "A warm breeze whispering secrets."]
              },
              moreReading: {
                lines: ["Things that make me smile:", "A child's laughter,", "Freshly baked bread,", "A handwritten note."]
              }
            },
            {
              name: "Colour Poem",
              description: "A poem inspired by a single color, describing its emotions, objects, and imagery.",
              rules: ["Focus on one color as the theme", "No fixed rhyme or meter"],
              example: {
                lines: ["Red is the color of fire,", "Of roses in full bloom,", "Of sunsets blazing in the sky,", "Of hearts beating in a room."]
              },
              moreReading: {
                lines: ["Blue is the color of oceans wide,", "Of skies that stretch to the sun.", "Blue is the feeling of gentle waves,", "And dreams when the day is done."]
              }
            },
            {
              name: "Alphabet Poem",
              description: "Each line starts with the next letter of the alphabet. It's fun and playful!",
              rules: ["Each line begins with the next sequential letter", "No set amount of lines"],
              example: {
                lines: ["Apples grow on trees so high,", "Birds above them in the sky,", "Clouds drift slowly, soft and white,", "Day turns into peaceful night."]
              },
              moreReading: {
                lines: ["Gardens bloom in colors bright,", "Hummingbirds hover in gentle flight.", "Ice melts slowly in the sun,", "Joyful laughter has begun."]
              }
            },
            {
              name: "Tercet",
              description: "A three-line poem where at least two lines rhyme (AAB or ABA). Often used for short, impactful ideas.",
              rules: ["Three lines, two or all rhyme", "Common rhyme schemes: AAB or ABA"],
              example: {
                lines: ["The sky is blue,", "The grass is new,", "The flowers dance with morning dew."]
              },
              moreReading: {
                lines: ["The wind blows fast, the trees do bend,", "A storm will come, but it will end.", "The sun will shine, the world will mend."]
              }
            },
            {
              name: "Ode",
              description: "An ode is a lyrical poem that expresses deep admiration or praise for a subject, often written in an elaborate and serious tone. It can focus on a person, place, object, or idea.",
              rules: ["Often have 10+ lines", "Written in formal language", "Express deep emotion or admiration"],
              example: {
                title: "Ode to the Morning Sun",
                lines: ["O golden light that wakes the earth,", "A beacon bright, a day's new birth.", "Your gentle rays embrace the sky,", "As birds take flight and dreams rise high.", "", "Through mist and shadow, soft you gleam,", "A painter's stroke, a poet's dream.", "O guiding glow, so warm, so true,", "The world awakens—all for you."]
              }
            },
            {
              name: "Free Verse",
              description: "Originated from French \"vers libre\" in the late 19th century, free verse is a type of poetry that doesn't have strict rules on meter or rhyme.",
              rules: ["No set rhyme or rhythm", "Can be structured however the poet wishes"],
              example: {
                lines: ["The wind hums a secret,", "rustling through the silent trees,", "whispering dreams to the stars."]
              },
              moreReading: {
                lines: ["A kite soars high in the blue,", "laughter dances in the breeze.", "Soft grass tickles my toes,", "the sun winks through the trees.", "Today feels like a dream."]
              }
            },
            {
              name: "Tanka",
              description: "\"Short song\" in Japanese that dates back over 1,300 years. Tanka poems are expressive and emotional, often focusing on nature, love, seasons, reflection, or fleeting beauty.",
              rules: ["Line one: 5 syllables", "Line two: 7 syllables", "Line three: 5 syllables", "Line four: 7 syllables", "Line five: 7 syllables", "Uses imagery, metaphor, or subtle mood shifts"],
              example: {
                lines: ["Morning dew clings tight", "to the edge of every leaf", "silent and glowing—", "as if the world holds its breath,", "waiting for the sun to rise."]
              },
              moreReading: {
                lines: ["Laughter like birdsong", "bounces off the morning walls—", "toast pops, tea is warm,", "sunlight spills across the floor,", "and I forget to worry."]
              }
            },
            {
              name: "What If?",
              description: "Starting with a \"What if…?\" scenario, exploring creative thinking, playful writing, and reflection through poetry.",
              rules: ["Start with a \"What if...\" question", "Explore the scenario creatively"],
              example: {
                title: "What if cookies grew on trees?",
                lines: ["I'd plant a chocolate chip or two,", "And water them with milky dew.", "Each branch would droop with gooey cheer—", "Dessert would bloom all through the year!"]
              },
              moreReading: {
                lines: ["What if I stayed in Paris that summer?", "Would I have married a painter, not an accountant?", "Would my windows still face the sea?", "Or would I still miss my tiny backyard swing?", "Life's paths fork, but I always carry both."]
              }
            },
            {
              name: "Creative Writing",
              description: "Pick any of the following prompts or create your own, and write away! Make it 3-5 sentences long.",
              rules: ["Pick a prompt or create your own", "Write 3-5 sentences"],
              example: {
                title: "The Morning Everything Spoke",
                lines: ["I woke up and heard my nightstand talk.", "It said, \"You sleep too much. I've held your water glass for years!\"", "The armchair sighed. \"You always sit on the couch. I'm softer.\"", "The mirror winked and said, \"I only judge a little.\""]
              },
              moreReading: {
                lines: ["Funny Day", "On Funny Day, everyone wears silly clothes.", "People talk in rhymes all day.", "We make pretend creatures from paper and string.", "Then we walk them in a big parade.", "At sunset, we pop balloons with jokes inside.", "Everyone laughs. No one is serious."]
              }
            },
            {
              name: "Repetition",
              description: "Pick any of the following prompts or create your own, and write away! Make it 3-5 sentences long.",
              rules: ["Use a repeating phrase or structure", "Build rhythm through repetition"],
              example: {
                title: "The Summer in my Memory",
                lines: ["I remember the swing on the old oak tree.", "I remember the scent of apple pie.", "I remember the hush of Sunday mornings.", "I remember the stories by candlelight.", "I remember, and it brings me home."]
              },
              moreReading: {
                lines: ["I'm Car Sick", "I'm car sick. Open a window.", "I'm car sick. Take this pill.", "I'm car sick. Rest your eyes.", "I'm car sick. Shhh. Be still.", "I'm car sick. Drink some ginger ale.", "I'm car sick. Can you try to wait?", "I'm car sick. Now we're almost there.", "I feel better. Now it's too late."]
              }
            },
            {
              name: "Nonet",
              description: "A nonet is a nine-line poem that decreases by one syllable per line, from nine to one. Its origin is unclear, but it likely stems from the musical term for a group of nine and became popular online.",
              rules: ["Line one: 9 syllables", "Line two: 8 syllables", "Line three: 7 syllables", "Line four: 6 syllables", "...", "Line nine: 1 syllable"],
              example: {
                lines: ["The autumn sun rests on golden leaves (9)", "Soft whispers drift across the still lake (8)", "Geese trace letters in the blue sky (7)", "My hands remember warm tea (6)", "The chair rocks in rhythm (5)", "Pages turn slowly (4)", "Eyes close now (3)", "To rest (2)", "Home (1)"]
              }
            },
            {
              name: "Concrete Poem",
              description: "Concrete poetry (also called shape poetry) is when the visual arrangement of words on the page forms a shape or image that reflects the poem's subject. The layout is just as important as the words themselves.",
              rules: ["No strict rules about syllables, rhyming or theme", "The words, letters, or lines must be arranged to create a shape or image that visually represents the theme or subject of the poem"]
            },
            {
              name: "Pastoral",
              description: "A traditional poetry style, peaceful reflection on rural life, this poem type highlights nature's calm as an escape from the noise of the city. It captures the quiet beauty of open fields and the contentment found in simplicity.",
              rules: ["No strict rhyme or meter (often smooth)", "Idealized rural or natural setting", "Themes of love, loss, simplicity, nostalgia, or peace", "May critique city life through allegory or satire"],
              example: {
                lines: ["Soft wind through tall grass,", "where quiet mornings wander", "over open fields", "the shepherd hums to the dawn,", "unbothered by the city's noise."]
              },
              moreReading: {
                lines: ["The river moves slow,", "mirroring a cloudless sky", "stories in its flow.", "Here, time forgets its duty,", "and the heart learns how to rest."]
              }
            },
            {
              name: "Tricubes",
              description: "Introduced by Philip Larrea, this contemporary poem is all about the power of three. A simple form, there are no rules about rhyme or meter, the focus is all on the number three.",
              rules: ["3 stanzas of 3 lines each", "Each line has 3 syllables"],
              example: {
                lines: ["He found her", "once again", "lost in dreams", "", "She surmised", "he forgot", "her nature", "", "She's always", "a dreamer", "lost in thought"]
              }
            }
          ],
          sections: [],
          keyTakeaways: []
        }
      },
      {
        id: "lesson-3",
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
                B: "To give the senior citizens consistent meaningful and joyful times",
                C: "To make sure that the senior citizens who might have dementia do not forget about things they wish to write about",
                D: "All of the above"
              },
              answer: "D"
            },
            {
              question: "Q3: Which of the following items are not required for every visit?",
              options: {
                A: "Paper",
                B: "Pencils or pens",
                C: "Printed poetry prompts",
                D: "Volunteer sign-in forms"
              },
              answer: "D"
            },
            {
              question: "Q4: Sometimes not being able to meet the minimum session frequency is a result of which of the following?",
              options: {
                A: "Poor planning",
                B: "Not having enough volunteers",
                C: "Chapter lead not having the time",
                D: "Variability with senior home availability"
              },
              answer: "D"
            },
            {
              question: "Q5: Why is bringing a volunteer sign-in sheet sometimes not needed?",
              options: {
                A: "Volunteers are not always required to show up",
                B: "You can tell who is missing based on who tells you beforehand",
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
                C: "Encourage seniors to express themselves creatively",
                D: "All of the above"
              },
              answer: "B"
            },
            {
              question: "Q7: Why should you be patient and flexible when interacting with the seniors?",
              options: {
                A: "Some seniors prefer to talk instead of write",
                B: "The seniors may need some time to remember",
                C: "The seniors might not be good with words",
                D: "All of the above"
              },
              answer: "D"
            },
            {
              question: "Q8: Why should you always introduce yourself at the beginning of each session?",
              options: {
                A: "For the seniors to get to know you better",
                B: "Every senior will forget who you are if you do not",
                C: "Both A and B",
                D: "For the seniors to not forget who you are"
              },
              answer: "A"
            },
            {
              question: "Q9: Which of the following is not an activity listed in the session format?",
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
              question: "Q1: Who should you be consistently communicating with about your sessions?",
              options: {
                A: "Board of Directors",
                B: "Directors of Operations",
                C: "Vice President",
                D: "President"
              },
              answer: "B"
            },
            {
              question: "Q2: How often should you be making a check-in form?",
              options: {
                A: "Every week",
                B: "Biweekly",
                C: "Every session",
                D: "Every 2 sessions"
              },
              answer: "C"
            },
            {
              question: "Q3: Which of the following is not something you need to note down on your check-in form?",
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
                A: "What is working not too well",
                B: "What works well",
                C: "Suggestions for better support",
                D: "All of the above"
              },
              answer: "D"
            },
            {
              question: "Q5: Which of the following is not a goal of a chapter lead?",
              options: {
                A: "Having a warm relationship with the senior home",
                B: "Have meaningful conversations",
                C: "Have excellent communication with the seniors",
                D: "All of the above are chapter lead goals that were listed"
              },
              answer: "C"
            },
            {
              question: "Q6: What should you do when a senior is losing interest?",
              options: {
                A: "Encourage them with a new activity",
                B: "Attempt to build a closer relationship while engaging them again",
                C: "Ignore them and focus on others",
                D: "Report it to the GPD executive team"
              },
              answer: "B"
            },
            {
              question: "Q7: Imagine a senior who has had trouble with remembering things for a while suddenly remembers memories they had forgotten during creative writing. Where would you record it?",
              options: {
                A: "Weekly check-in form as something that worked well",
                B: "Weekly check-in form as a special moment",
                C: "Monthly reflection as something that worked well",
                D: "Share it at the next team meeting"
              },
              answer: "B"
            },
            {
              question: "Q8: Why is having meaningful conversations so important?",
              options: {
                A: "It helps build a warm relationship",
                B: "Represents GPD's professionalism",
                C: "Shows you actually care about the seniors",
                D: "Both A and C"
              },
              answer: "D"
            },
            {
              question: "Q9: How often are the Zoom meetings where you share updates?",
              options: {
                A: "Weekly",
                B: "Biweekly",
                C: "Monthly",
                D: "Bimonthly"
              },
              answer: "D"
            },
            {
              question: "Q10: How often are the weekly check-in forms checked?",
              options: {
                A: "Every week",
                B: "Every other week",
                C: "Monthly",
                D: "Every other month"
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
              question: "Q1: Which of the following is not something listed to help successfully outreach to senior homes?",
              options: {
                A: "Playing the high school card",
                B: "Emphasize the benefits of working with GPD",
                C: "Giving the senior home a phone call",
                D: "All of the above are listed on the slideshow"
              },
              answer: "D"
            },
            {
              question: "Q2: True or false: Playing the high schooler card when reaching out to senior homes helps quite a bit.",
              options: {
                A: "True, the senior homes believe being younger means you are more inclined to do what you believe in",
                B: "True, the senior homes tend to like youth especially because it is for a good cause",
                C: "False, the senior homes do not care about how old you are",
                D: "False, the senior homes do not get swayed by age easily"
              },
              answer: "B"
            },
            {
              question: "Q3: Why is a cold call a good way to outreach to senior homes?",
              options: {
                A: "It is much harder to avoid an email than a phone call",
                B: "There are no delays in communication with phone calls",
                C: "Your voice can help them familiarize themselves with you",
                D: "Emails are not very informative compared to phone calls"
              },
              answer: "C"
            },
            {
              question: "Q4: How can you increase the seniors' participation levels?",
              options: {
                A: "Plan far ahead",
                B: "Advertise the meeting anywhere in the senior home",
                C: "Tell seniors about the next meeting beforehand",
                D: "All of the above"
              },
              answer: "D"
            },
            {
              question: "Q5: How can you identify when a senior has a condition and support them effectively?",
              options: {
                A: "Observe their behavior and adjust communication style",
                B: "Ask directly about their medical condition",
                C: "Ignore signs of difficulty to avoid awkwardness",
                D: "Wait for the staff to inform you"
              },
              answer: "A"
            },
            {
              question: "Q6: A senior attends the session that you have not seen before. They seem to stumble over their words often and mix them up. What is the best way to help them during the session?",
              options: {
                A: "Be more verbal",
                B: "Use smaller fonts",
                C: "Use other words that do not look or sound very similar",
                D: "Write the instructions down on a piece of paper for them to read at any time"
              },
              answer: "A"
            },
            {
              question: "Q7: A senior who usually attends sessions but sometimes misses them exhibits problems with following directions. What is the best way to help them during the session?",
              options: {
                A: "Be patient with them",
                B: "Give them written notes for them to read at any time",
                C: "Start with smaller activities first",
                D: "Ask the staff to assist them directly"
              },
              answer: "A"
            },
            {
              question: "Q8: Why is being patient with the seniors who have conditions necessary?",
              options: {
                A: "Their conditions can affect how they understand instructions",
                B: "It could hurt their feelings if you rush them",
                C: "It could create frustration or confusion",
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
              question: "Q10: How many volunteers should you aim for for each session?",
              options: {
                A: "5-7",
                B: "3-5",
                C: "Same number of volunteers as participants",
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
              question: "Q1: You have reached out to several senior homes but have not had any luck getting a response. What is the most effective way to move forward?",
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
              question: "Q4: What is the best way to ensure each session runs smoothly?",
              options: {
                A: "Prepare materials and prompts ahead of time",
                B: "Rely on improvisation each time",
                C: "Let seniors decide the format every week",
                D: "Cancel sessions without preparation"
              },
              answer: "A"
            },
            {
              question: "Q5: What is an important way to support seniors during creative writing?",
              options: {
                A: "Encourage them to express their memories freely",
                B: "Focus only on grammar and structure",
                C: "Rush them to finish writing on time",
                D: "Avoid offering feedback"
              },
              answer: "A"
            },
            {
              question: "Q6: A new volunteer seems unsure about how to interact with seniors during the session. What is the best way to support them?",
              options: {
                A: "Let them figure it out during the session to build confidence",
                B: "Brief them before the session and pair them with an experienced volunteer",
                C: "Ask them to observe until they feel ready to join",
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
              question: "Q8: A senior says they are not in the mood to write today but would enjoy chatting. What should you do?",
              options: {
                A: "Tell them writing is required for today's session",
                B: "Respect their preference and let them engage through conversation",
                C: "Let them observe quietly until they are ready",
                D: "Ask a volunteer to try convincing them to write"
              },
              answer: "B"
            },
            {
              question: "Q9: What is an effective way to keep volunteers engaged during writing sessions?",
              options: {
                A: "Rotate leadership tasks like greeting or guiding prompts among volunteers",
                B: "Limit volunteer involvement to reduce confusion",
                C: "Let volunteers choose whether or not to participate",
                D: "Only allow the chapter lead to manage the session activities"
              },
              answer: "A"
            },
            {
              question: "Q10: Two weeks into your role, you still have not secured a senior home. What should you do next?",
              options: {
                A: "Take a break and try again in a few weeks",
                B: "Limit outreach to homes closer to you",
                C: "Reach out to more homes, follow up with past contacts, and refine your message",
                D: "Wait for responses from the senior homes"
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
