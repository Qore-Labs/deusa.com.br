type ImageAbout = {
  src: string;
  alt: string;
};

type MetricAbout = {
  id: string;
  value: string;
  label: string;
};

type TagAbout = {
  id: string;
  label: string;
};

export type AboutContentType = {
  image: ImageAbout;
  eyebrow: string;
  title: string;
  introduction: string;
  description: string;
  metrics: MetricAbout[];
  tags: TagAbout[];
};
