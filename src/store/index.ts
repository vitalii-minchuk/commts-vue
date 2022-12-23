import { createStore, Store, type StoreOptions } from "vuex";
import commentModule from "./modules/comments";
import postModule from "./modules/posts";
import type { RootState } from "./types";

const store: StoreOptions<RootState> = {
  state: { test: "hello" },
  modules: {
    post: postModule,
    // comment: commentModule,
  },
};

export default new Store<RootState>(store);
