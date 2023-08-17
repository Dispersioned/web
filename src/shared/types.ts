export type IWorkingExperience = {
  date: {
    from: string;
    to: string;
  };
  company: string;
  experience: string[];
};

export type IProject = {
  name: string;
  description: string;
  tags: string[];
  preview: string;
  metalinks: {
    deploy: string;
    github: string;
  };
};
