export interface RootState {
  test: string;
}

export interface PostState {
  posts: Array<Post>;
  isLoading: boolean;
  searchStr: string;
  selectedOption: string;
  sortType: "asc" | "desc";
  showPosts: number;
  sortTypeOptions: Array<"asc" | "desc">;
  sortOptions: Array<"id" | "title" | "body">;
  showPagesOptions: Array<5 | 10 | 15>;
  currentPage: number;
  totalPages: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}
