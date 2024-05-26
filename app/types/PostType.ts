
export type Post = {
    id: number;
    name: string;
    authorId: string;
    title: string;
    content : string;
    comments : Comment[];
    author : {name : string}
    }
  export type Comment = {
    id : number;
    content : string;
  }
  
  