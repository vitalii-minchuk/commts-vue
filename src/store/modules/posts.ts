import axios from "axios";
import type { ActionContext, Module } from "vuex";
import type { Post, PostState, RootState } from "../types";

const postModule: Module<PostState, RootState> = {
  namespaced: true,
  state: () => ({
    posts: [],
    isLoading: false,
    searchStr: "",
    selectedOption: "id",
    sortType: "asc",
    showPosts: 5,
    sortTypeOptions: ["asc", "desc"],
    sortOptions: ["id", "title", "body"],
    showPagesOptions: [5, 10, 15],
    currentPage: 1,
    totalPages: 0,
  }),
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setSearchStr(state, str) {
      state.searchStr = str;
    },
    setSelectedOption(state, option) {
      state.selectedOption = option;
    },
    setSortType(state, type) {
      state.sortType = type;
    },
    setShowPosts(state, num) {
      state.showPosts = num;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setTotalPages(state, num) {
      state.totalPages = num;
    },
  },
  actions: {
    async fetchPosts(context) {
      context.commit("setIsLoading", true);
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: context.state.currentPage,
              _limit: context.state.showPosts,
            },
          }
        );
        context.commit(
          "setTotalPages",
          Math.ceil(
            Number(response.headers["x-total-count"]) / context.state.showPosts
          )
        );
        context.commit("setPosts", response.data);
      } catch (error: any) {
        console.log(error.message, "something went wrong");
      } finally {
        context.commit("setIsLoading", false);
      }
    },
  },
  getters: {
    filteredPosts(state) {
      return [...state.posts].filter((post) =>
        post.title.includes(state.searchStr)
      );
    },
  },
};

export default postModule;
