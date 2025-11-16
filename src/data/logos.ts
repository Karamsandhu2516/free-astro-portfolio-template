// Build a list of available SVG logos from external URLs

type LogoItem = { name: string; logo: string };

export const logos: LogoItem[] = [
  { name: "Docker", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
  { name: "Terraform", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/terraform.svg" },
  { name: "Ansible", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ansible.svg" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jenkins.svg" },
  { name: "GitLab", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gitlab.svg" },
  { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg" },
  { name: "Prometheus", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/prometheus.svg" },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/grafana.svg" },
];

export type { LogoItem };
