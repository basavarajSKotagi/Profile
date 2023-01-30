export interface Point {
  text: string;
}
export interface PointsType {
  id: string;
  header: string;
  items: Point[];
}

export interface ProjectType {
  Project: string;
  Period: string;
  Client: string;
  Role: string;
  Tech: string;
  header: string;
  items: Point[];
}

export interface PersonalType {
  imgUrl: string;
  text: string;
}
