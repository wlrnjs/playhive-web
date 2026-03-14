import CustomerTalkToolbar from "@/app/(route)/customer/_components/ui/CustomerTalkToolbar";
import React from "react";
import FeedbackListBox from "../organisms/FeedbackListBox";
import useGetFeedbackDataList from "@/_hooks/fetcher/customer/useGetFeedbackDataList";
import useFeedbackQueryParams from "../../../../_hooks/useFeedbackQueryParams";
import { FEEDBACK_LIST_MOCK } from "@mock/customerMock";

interface FeedbackListContainerProps {
  searchParams: URLSearchParams;
  adminRole: "USER" | "ADMIN" | undefined;
}

const FeedbackListContainer = ({
  searchParams,
  adminRole,
}: FeedbackListContainerProps) => {
  const feedbackOption = useFeedbackQueryParams();

  const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true";

  // 개선요청 리스트
  const {
    data: apiFeedbackDataList,
    isLoading,
    isError,
  } = useGetFeedbackDataList(feedbackOption);

  const feedbackDataList = useMock ? FEEDBACK_LIST_MOCK : apiFeedbackDataList;
  const isLoadingResolved = useMock ? false : isLoading;
  const isErrorResolved = useMock ? false : isError;

  return (
    <>
      {/* 툴바 */}
      <CustomerTalkToolbar
        showOptions={true}
        adminChecker={adminRole}
        paginationData={feedbackDataList?.pageInfo}
      />

      {/* 리스트 */}
      <FeedbackListBox
        feedbackDataList={feedbackDataList}
        isLoading={isLoadingResolved}
        isError={isErrorResolved}
        searchParams={searchParams}
      />
    </>
  );
};

export default FeedbackListContainer;
