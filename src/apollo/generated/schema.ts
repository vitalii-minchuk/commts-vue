import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "@vue/composition-api";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Comment = {
  __typename?: "Comment";
  children: Array<Comment>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  image_url: Scalars["String"];
  parentId?: Maybe<Scalars["String"]>;
  postId: Scalars["String"];
  text: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: User;
};

export type CreateCommentInput = {
  image_url?: InputMaybe<Scalars["String"]>;
  parentId?: InputMaybe<Scalars["String"]>;
  postId: Scalars["String"];
  text: Scalars["String"];
};

export type CreatePostInput = {
  image_url?: InputMaybe<Scalars["String"]>;
  text: Scalars["String"];
};

export type GetPostCommentsInput = {
  postId: Scalars["String"];
};

export type GetPostsInput = {
  orderBy?: InputMaybe<Scalars["String"]>;
  orderType?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
};

export type LoginUserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createNewComment: Comment;
  createNewPost: Post;
  deleteData: Scalars["Boolean"];
  generateFakeData: Scalars["Boolean"];
  login: Scalars["String"];
  registerUser: User;
};

export type MutationCreateNewCommentArgs = {
  input: CreateCommentInput;
};

export type MutationCreateNewPostArgs = {
  input: CreatePostInput;
};

export type MutationLoginArgs = {
  input: LoginUserInput;
};

export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};

export type Post = {
  __typename?: "Post";
  comments?: Maybe<Comment>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  image_url?: Maybe<Scalars["String"]>;
  text: Scalars["String"];
  total: Scalars["Int"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: User;
};

export type Query = {
  __typename?: "Query";
  getAllPostComments: Array<Comment>;
  getAllPosts: Array<Post>;
  me: User;
};

export type QueryGetAllPostCommentsArgs = {
  input: GetPostCommentsInput;
};

export type QueryGetAllPostsArgs = {
  posts: GetPostsInput;
};

export type RegisterUserInput = {
  email: Scalars["String"];
  homePageUrl?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  username: Scalars["String"];
};

export type User = {
  __typename?: "User";
  avatar?: Maybe<Scalars["String"]>;
  comments?: Maybe<Comment>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  homePageUrl?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  password: Scalars["String"];
  posts?: Maybe<Post>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username: Scalars["String"];
};

export type CreateNewCommentMutationVariables = Exact<{
  input: CreateCommentInput;
}>;

export type CreateNewCommentMutation = {
  __typename?: "Mutation";
  createNewComment: { __typename?: "Comment"; text: string; image_url: string };
};

export type GetAllPostCommentsQueryVariables = Exact<{
  input: GetPostCommentsInput;
}>;

export type GetAllPostCommentsQuery = {
  __typename?: "Query";
  getAllPostComments: Array<{
    __typename?: "Comment";
    text: string;
    image_url: string;
    id: string;
    createdAt?: any | null;
    parentId?: string | null;
    user: {
      __typename?: "User";
      username: string;
      avatar?: string | null;
      email: string;
    };
  }>;
};

export type DeleteDataMutationVariables = Exact<{ [key: string]: never }>;

export type DeleteDataMutation = {
  __typename?: "Mutation";
  deleteData: boolean;
};

export type GenerateFakeDataMutationVariables = Exact<{ [key: string]: never }>;

export type GenerateFakeDataMutation = {
  __typename?: "Mutation";
  generateFakeData: boolean;
};

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;

export type CreatePostMutation = {
  __typename?: "Mutation";
  createNewPost: { __typename?: "Post"; text: string };
};

export type GetPostsQueryVariables = Exact<{
  posts: GetPostsInput;
}>;

export type GetPostsQuery = {
  __typename?: "Query";
  getAllPosts: Array<{
    __typename?: "Post";
    total: number;
    id: string;
    createdAt?: any | null;
    text: string;
    image_url?: string | null;
    user: {
      __typename?: "User";
      username: string;
      email: string;
      avatar?: string | null;
    };
  }>;
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;

export type LoginMutation = { __typename?: "Mutation"; login: string };

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me: {
    __typename?: "User";
    id: string;
    username: string;
    email: string;
    avatar?: string | null;
  };
};

export type RegisterUserMutationVariables = Exact<{
  input: RegisterUserInput;
}>;

export type RegisterUserMutation = {
  __typename?: "Mutation";
  registerUser: {
    __typename?: "User";
    username: string;
    email: string;
    avatar?: string | null;
  };
};

export const CreateNewCommentDocument = gql`
  mutation CreateNewComment($input: CreateCommentInput!) {
    createNewComment(input: $input) {
      text
      image_url
    }
  }
`;

/**
 * __useCreateNewCommentMutation__
 *
 * To run a mutation, you first call `useCreateNewCommentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewCommentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateNewCommentMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateNewCommentMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CreateNewCommentMutation,
        CreateNewCommentMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CreateNewCommentMutation,
          CreateNewCommentMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CreateNewCommentMutation,
    CreateNewCommentMutationVariables
  >(CreateNewCommentDocument, options);
}
export type CreateNewCommentMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CreateNewCommentMutation,
    CreateNewCommentMutationVariables
  >;
export const GetAllPostCommentsDocument = gql`
  query GetAllPostComments($input: GetPostCommentsInput!) {
    getAllPostComments(input: $input) {
      text
      image_url
      id
      createdAt
      parentId
      user {
        username
        avatar
        email
      }
    }
  }
`;

/**
 * __useGetAllPostCommentsQuery__
 *
 * To run a query within a Vue component, call `useGetAllPostCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostCommentsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetAllPostCommentsQuery({
 *   input: // value for 'input'
 * });
 */
export function useGetAllPostCommentsQuery(
  variables:
    | GetAllPostCommentsQueryVariables
    | VueCompositionApi.Ref<GetAllPostCommentsQueryVariables>
    | ReactiveFunction<GetAllPostCommentsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetAllPostCommentsQuery,
        GetAllPostCommentsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetAllPostCommentsQuery,
          GetAllPostCommentsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetAllPostCommentsQuery,
          GetAllPostCommentsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetAllPostCommentsQuery,
    GetAllPostCommentsQueryVariables
  >(GetAllPostCommentsDocument, variables, options);
}
export function useGetAllPostCommentsLazyQuery(
  variables:
    | GetAllPostCommentsQueryVariables
    | VueCompositionApi.Ref<GetAllPostCommentsQueryVariables>
    | ReactiveFunction<GetAllPostCommentsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetAllPostCommentsQuery,
        GetAllPostCommentsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetAllPostCommentsQuery,
          GetAllPostCommentsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetAllPostCommentsQuery,
          GetAllPostCommentsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetAllPostCommentsQuery,
    GetAllPostCommentsQueryVariables
  >(GetAllPostCommentsDocument, variables, options);
}
export type GetAllPostCommentsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetAllPostCommentsQuery,
    GetAllPostCommentsQueryVariables
  >;
export const DeleteDataDocument = gql`
  mutation DeleteData {
    deleteData
  }
`;

/**
 * __useDeleteDataMutation__
 *
 * To run a mutation, you first call `useDeleteDataMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDataMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDataMutation();
 */
export function useDeleteDataMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDataMutation,
        DeleteDataMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDataMutation,
          DeleteDataMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    DeleteDataMutation,
    DeleteDataMutationVariables
  >(DeleteDataDocument, options);
}
export type DeleteDataMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDataMutation,
    DeleteDataMutationVariables
  >;
export const GenerateFakeDataDocument = gql`
  mutation GenerateFakeData {
    generateFakeData
  }
`;

/**
 * __useGenerateFakeDataMutation__
 *
 * To run a mutation, you first call `useGenerateFakeDataMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGenerateFakeDataMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGenerateFakeDataMutation();
 */
export function useGenerateFakeDataMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GenerateFakeDataMutation,
        GenerateFakeDataMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GenerateFakeDataMutation,
          GenerateFakeDataMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    GenerateFakeDataMutation,
    GenerateFakeDataMutationVariables
  >(GenerateFakeDataDocument, options);
}
export type GenerateFakeDataMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    GenerateFakeDataMutation,
    GenerateFakeDataMutationVariables
  >;
export const CreatePostDocument = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createNewPost(input: $input) {
      text
    }
  }
`;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreatePostMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CreatePostMutation,
        CreatePostMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CreatePostMutation,
          CreatePostMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CreatePostDocument, options);
}
export type CreatePostMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CreatePostMutation,
    CreatePostMutationVariables
  >;
export const GetPostsDocument = gql`
  query GetPosts($posts: GetPostsInput!) {
    getAllPosts(posts: $posts) {
      total
      id
      createdAt
      text
      image_url
      user {
        username
        email
        avatar
      }
    }
  }
`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a Vue component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPostsQuery({
 *   posts: // value for 'posts'
 * });
 */
export function useGetPostsQuery(
  variables:
    | GetPostsQueryVariables
    | VueCompositionApi.Ref<GetPostsQueryVariables>
    | ReactiveFunction<GetPostsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<GetPostsQuery, GetPostsQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetPostsQuery,
          GetPostsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetPostsQuery,
          GetPostsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    variables,
    options
  );
}
export function useGetPostsLazyQuery(
  variables:
    | GetPostsQueryVariables
    | VueCompositionApi.Ref<GetPostsQueryVariables>
    | ReactiveFunction<GetPostsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<GetPostsQuery, GetPostsQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetPostsQuery,
          GetPostsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetPostsQuery,
          GetPostsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetPostsQuery,
    GetPostsQueryVariables
  >(GetPostsDocument, variables, options);
}
export type GetPostsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<GetPostsQuery, GetPostsQueryVariables>;
export const LoginDocument = gql`
  mutation Login($input: LoginUserInput!) {
    login(input: $input)
  }
`;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        LoginMutation,
        LoginMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          LoginMutation,
          LoginMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
  query Me {
    me {
      id
      username
      email
      avatar
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a Vue component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMeQuery();
 */
export function useMeQuery(
  options:
    | VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    {},
    options
  );
}
export function useMeLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    {},
    options
  );
}
export type MeQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<MeQuery, MeQueryVariables>;
export const RegisterUserDocument = gql`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      username
      email
      avatar
    }
  }
`;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRegisterUserMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        RegisterUserMutation,
        RegisterUserMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          RegisterUserMutation,
          RegisterUserMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >(RegisterUserDocument, options);
}
export type RegisterUserMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >;
