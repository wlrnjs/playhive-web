"use client";

import React, { Suspense } from "react";
import CustomerTalkToolbar from "../../_components/ui/CustomerTalkToolbar";
import { useSearchParams } from "next/navigation";
import useGetFeedbackDataList from "@/_hooks/fetcher/customer/useGetFeedbackDataList";
import { useAdminRole } from "../../_utils/adminChecker";
import ItemContainer from "../../_components/ui/ItemContainer";
import useFeedbackQueryParams from "./_hooks/useFeedbackQueryParams";
import useNoticeItems from "./_hooks/useNoticeItems";
import ListLayout from "../../_components/common/ListLayout";
import { FEEDBACK_LIST_MOCK } from "@mock/customerMock";

const Page = () => {
  return (
    <Suspense fallback={""}>
      <FeedbackPage />
    </Suspense>
  );
};

const FeedbackPage = () => {
  const adminRole = useAdminRole();
  const searchParams = useSearchParams();
  const feedbackOption = useFeedbackQueryParams();

  // 공지사항 데이터 호출 커스텀 훅 (최상단 2개 표시)
  const { slicedNoticeDataList, noticeIsError, noticeIsLoading } =
    useNoticeItems();

  const useMock = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

  // 개선요청 데이터 호출
  const {
    data: apiFeedbackDataList,
    isLoading,
    isError,
  } = useGetFeedbackDataList(feedbackOption);

  const feedbackDataList = useMock ? FEEDBACK_LIST_MOCK : apiFeedbackDataList;
  const isLoadingResolved = useMock ? false : isLoading;
  const isErrorResolved = useMock ? false : isError;

  return (
    <ListLayout data={feedbackDataList?.content}>
      {/* 고객센터 툴바 */}
      <CustomerTalkToolbar
        showOptions={true}
        adminChecker={adminRole}
        paginationData={feedbackDataList?.pageInfo}
      />

      {/* 개선요청 리스트 */}
      <ItemContainer
        type="feedback"
        dataList={feedbackDataList}
        loading={{
          isLoading: isLoadingResolved,
          loading: noticeIsLoading,
        }}
        error={{
          isError: isErrorResolved,
          error: noticeIsError,
        }}
        slicedDataList={slicedNoticeDataList}
        searchParams={searchParams}
      />
    </ListLayout>
  );
};

export default Page;
