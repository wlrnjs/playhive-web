import React from "react";
import HotPostItem from "./hotPostItem";
import useGetHotPost from "@/_hooks/fetcher/main/useGetHotPost";
import { cn } from "@/utils";
import MainPostItemSkeleton from "../state/MainPostItemSkeleton";
import MyPagePostEmpty from "@/app/(route)/mypage/posts/_components/MypagePostEmpty";
import { HOT_POST_MOCK } from "@mock/livePostMock";

const HotPost = () => {
  const useMock = process.env.NEXT_PUBLIC_USE_NEWS_MOCK !== "false";
  const { data: response, isLoading, isError } = useGetHotPost();
  const hotPosts = useMock ? HOT_POST_MOCK : response?.data || [];
  const isLoadingResolved = useMock ? false : isLoading;
  const isErrorResolved = useMock ? false : isError;

  return (
    <div
      className={cn(
        "w-full min-h-[392px] flex flex-col gap-2",
        "mobile:min-h-[auto] mobile:h-fit"
      )}>
      <h3
        className={cn(
          "font-[700] text-[16px] leading-6 tracking-[-0.02em] align-center hidden",
          "pc:block"
        )}>
        실시간 HOT 게시글
      </h3>
      <div
        className={cn(
          "w-full min-h-[360px]",
          "mobile:min-h-[auto] mobile:h-fit"
        )}>
        {isLoadingResolved ? (
          Array.from({ length: 10 }).map((_, index) => (
            <MainPostItemSkeleton key={index} />
          ))
        ) : isErrorResolved || hotPosts?.length === 0 ? (
          <MyPagePostEmpty
            width="w-[419px] mobile:w-full tablet:w-full"
            height="h-[428px]"
            isHome
          />
        ) : (
          hotPosts.map((post, index) => (
            <HotPostItem key={post.id} number={index + 1} hotPosts={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default HotPost;
