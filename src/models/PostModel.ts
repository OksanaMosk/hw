interface Reactions {
  likes: number;
  dislikes: number;
}

export interface IPostModel {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}
