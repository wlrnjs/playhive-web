"use client";

import useGetNoticeInfoData from "@/_hooks/fetcher/customer/useGetNoticeInfoData";
import { useAdminRole } from "@/app/(route)/customer/_utils/adminChecker";
import { useParams, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import NoticeMetaContainer from "./templates/NoticeMetaContainer";
import { useScrollToComment } from "../../../../feedback/_hooks/useScrollToComment";
import dynamic from "next/dynamic";
import { NOTICE_INFO_MOCK } from "@mock/customerMock";

const NoticeListContainer = dynamic(
  () => import("./templates/NoticeListContainer"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <Suspense fallback={""}>
      <NoticeInfo />
    </Suspense>
  );
};

const NoticeInfo = () => {
  const params = useParams();
  const id = params.noticeInfoId;
  const searchParams = useSearchParams();
  const adminRole = useAdminRole();

  useScrollToComment(searchParams);

  const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true";

  const {
    data: apiNoticeInfoData,
    isLoading,
    isError,
  } = useGetNoticeInfoData({ id });

  const noticeInfoData = useMock ? NOTICE_INFO_MOCK : apiNoticeInfoData;
  const isLoadingResolved = useMock ? false : isLoading;
  const isErrorResolved = useMock ? false : isError;

  return (
    <>
      {/* 공지사항 상세 */}
      <NoticeMetaContainer
        noticeInfoData={noticeInfoData}
        id={id}
        adminRole={adminRole}
        isLoading={isLoadingResolved}
        isError={isErrorResolved}
      />

      {/* 하단 리스트 */}
      <NoticeListContainer searchParams={searchParams} adminRole={adminRole} />
    </>
  );
};

export default Page;
