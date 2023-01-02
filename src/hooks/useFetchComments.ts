import { useGetAllPostCommentsQuery } from "@/apollo/generated/schema";

const useFetchComments = (id: string) => {
  const { result, refetch } = useGetAllPostCommentsQuery({
    input: { postId: id },
  });
  return { result, refetch };
};

export default useFetchComments;
