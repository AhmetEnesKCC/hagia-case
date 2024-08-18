export type OneNewsType = {
  description: string;
  thumbnail: string;
  title: string;
  date: string | Date;
};

export type NewsType = OneNewsType[];
