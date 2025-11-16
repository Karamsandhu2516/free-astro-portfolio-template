export const studies = [
  {
    title: "Masters of Computer Application (MCA)",
    institution: "Punjabi University, Punjab",
    description: "Advanced studies in computer applications, software development, and system design.",
    tags: ["Software Engineering", "Database Systems", "Web Technologies"]
  },
  {
    title: "Enterprise Content Management",
    institution: "Conestoga College, Canada",
    description: "Comprehensive study of cloud computing principles, including cloud infrastructure, services, deployment models, and management. Covered topics include virtualization, containerization, serverless computing, and cloud security.",
    tags: ["Cloud Computing", "AWS/Azure", "Cloud Architecture"]
  }
];

export type Study = (typeof studies)[number];
