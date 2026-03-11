"use client";

import React, { Suspense } from "react";
import CustomerTalkToolbar from "./_components/ui/CustomerTalkToolbar";
import useGetNoticeDataList from "@/_hooks/fetcher/customer/useGetNoticeDataList";
import { useAdminRole } from "@/app/(route)/customer/_utils/adminChecker";
import { useSearchParams } from "next/navigation";
import useNoticeQueryParams from "./_hooks/useNoticeQueryParams";
import ItemContainer from "./_components/ui/ItemContainer";
import ListLayout from "./_components/common/ListLayout";
import { NOTICE_LIST_MOCK } from "@mock/customerMock";

const Page = () => {
  return (
    <Suspense fallback={""}>
      <NoticePageContent />
    </Suspense>
  );
};

const NoticePageContent = () => {
  const searchParams = useSearchParams();
  const adminChecker = useAdminRole();
  const noticeOption = useNoticeQueryParams();

  const useMock = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

  const {
    data: apiNoticeListData,
    isLoading,
    isError,
  } = useGetNoticeDataList(noticeOption);

  const noticeListData = useMock ? NOTICE_LIST_MOCK : apiNoticeListData;
  const isLoadingResolved = useMock ? false : isLoading;
  const isErrorResolved = useMock ? false : isError;

  return (
    <ListLayout data={noticeListData?.content}>
      <CustomerTalkToolbar
        showOptions={false}
        paginationData={noticeListData?.pageInfo}
        adminChecker={adminChecker}
      />

      <ItemContainer
        type="notice"
        dataList={noticeListData}
        loading={{
          isLoading: isLoadingResolved,
          loading: false,
        }}
        error={{
          isError: isErrorResolved,
          error: false,
        }}
        slicedDataList={noticeListData?.content}
        searchParams={searchParams}
      />
    </ListLayout>
  );
};

export default Page;
