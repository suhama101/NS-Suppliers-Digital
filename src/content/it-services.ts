type ITServiceArea = {
  title: string;
  pending: string;
  details: readonly string[];
};

export const itServiceAreas: readonly ITServiceArea[] = [
  {
    title: "Service scope",
    pending: "The list of services and their descriptions are awaiting client approval.",
    details: [],
  },
  {
    title: "Engagement details",
    pending: "How to engage and what information to provide are awaiting client approval.",
    details: [],
  },
];
