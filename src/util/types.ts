export interface Experience {
  title: string;
  company: string;
  start: string;
  end?: string;
  link: string;
  description: string;
};

export interface Project {
  title: string;
  description: string;
  link: string
};

export interface SubMetadata {
  name: string;
  content: string;
};
export interface MetadataProp {
  title: string;
  meta: SubMetadata[];
};