import React from "react";
import CustomerTalkToolbar from "@/app/(route)/customer/_components/ui/CustomerTalkToolbar";
import NoticeListBox from "../organisms/NoticeListBox";
import useGetNoticeDataList from "@/_hooks/fetcher/customer/useGetNoticeDataList";
import useNoticeQueryParams from "../../_hooks/useNoticeQueryParams";
import { NOTICE_LIST_MOCK } from "@mock/customerMock";

interface NoticeListContainerProps {
  searchParams: URLSearchParams;
  adminRole: "ADMIN" | "USER" | undefined;
}

const NoticeListContainer = ({
  searchParams,
  adminRole,
}: NoticeListContainerProps) => {
  const noticeOption = useNoticeQueryParams();

  const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true";

  const {
    data: apiNoticeListData,
    isLoading,
    isError,
  } = useGetNoticeDataList(noticeOption);

  const noticeListData = useMock ? NOTICE_LIST_MOCK : apiNoticeListData;
  const isLoadingResolved = useMock ? false : isLoading;
  const isErrorResolved = useMock ? false : isError;

  return (
    <>
      {/* 툴바 */}
      <CustomerTalkToolbar
        showOptions={false}
        paginationData={noticeListData?.pageInfo}
        adminChecker={adminRole}
      />

      {/* 리스트 */}
      <NoticeListBox
        isLoading={isLoadingResolved}
        isError={isErrorResolved}
        noticeListData={noticeListData}
        searchParams={searchParams}
      />
    </>
  );
};

export default NoticeListContainer;
