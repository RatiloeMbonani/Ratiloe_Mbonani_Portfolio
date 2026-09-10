export const knowledgeBase = [
  {
    keywords: ["study", "studying", "student", "ict", "degree", "course", "university", "multimedia"],
    answer: "I'm studying Information & Communication Technology, specialising in Multimedia Design.",
  },
  {
    keywords: ["work", "working", "job", "capaciti", "trainee", "experience", "employ"],
    answer: "I'm currently a Software Development Trainee at CAPACITI, Demand 1 Academy, building full-stack web applications as part of an intensive, project-based programme.",
  },
  {
    keywords: ["skill", "tech", "technology", "stack", "language", "framework", "tools", "react", "node", "laravel", "php", "mysql"],
    answer: "My core stack is JavaScript, React, Node.js, PHP, Laravel, and MySQL, alongside UI/UX and multimedia design tools like Figma.",
  },
  {
    keywords: ["project", "projects", "built", "build", "portfolio work", "campusconnect", "roadready", "varsitypath"],
    answer: "I've built several projects including CampusConnect, RoadReady Insights, and VarsityPath. Scroll down or click 'Projects' in the nav to see them all.",
  },
  {
    keywords: ["certificate", "certification", "certificates", "coursera", "course completed", "qualif"],
    answer: "I have several AI/ML certificates from IBM, Google Cloud, DeepLearning.AI, and Stanford Online. Check the Certificates section to view or verify them.",
  },
  {
    keywords: ["cv", "resume", "download"],
    answer: "You can view or download my CV from the About section — look for the 'View CV' and 'Download CV' buttons.",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "get in touch", "message"],
    answer: "You can reach me through the contact form in the Contact section, or through the social links there.",
  },
  {
    keywords: ["hackathon", "hackathons", "event", "events", "upskill", "learn", "community"],
    answer: "I love hackathons and tech events — I'm always looking for the next challenge to sharpen my skills and stay curious.",
  },
  {
    keywords: ["who are you", "who is ratiloe", "about you", "tell me about", "yourself"],
    answer: "I'm Ratiloe Mbonani, an ICT Multimedia student and aspiring Full-Stack Developer, currently training at CAPACITI. Check the About section for the full story.",
  },
];

export function matchAnswer(input) {
  const text = input.toLowerCase();
  const hit = knowledgeBase.find((entry) =>
    entry.keywords.some((keyword) => text.includes(keyword))
  );
  return hit
    ? hit.answer
    : "I can only answer questions about my background, skills, projects, and certificates — try asking about one of those, or browse the sections in the nav above.";
}