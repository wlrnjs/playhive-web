import { Metadata } from "next";
import React from "react";
import getNewsItemInfo from "@/services/news/GetNewsItemInfo";
import NewsInfo from "./_components/NewsInfo";
import { createMetadata } from "@/lib/generateMetadata";
import { getNewsDetailMock } from "@mock/newsDetailMock";

const useNewsMock = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; newsCategoryType: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  if (useNewsMock) {
    const mockDetail = getNewsDetailMock(resolvedParams.id);
    if (mockDetail) {
      return createMetadata({
        title: mockDetail.title,
        content: mockDetail.content,
        thumbUrl: mockDetail.thumbImg,
        fallbackTitle: "뉴스 상세 페이지",
        fallbackDescription: "뉴스 상세 내용",
        stripHtmlContent: false,
        keywords: ["플레이하이브", "뉴스"],
      });
    }
  }

  try {
    const newsDetail = await getNewsItemInfo({
      id: resolvedParams.id,
      openGraph: true,
    });

    return createMetadata({
      title: newsDetail.title,
      content: newsDetail.content,
      thumbUrl: newsDetail.thumbImg,
      fallbackTitle: "뉴스 상세 페이지",
      fallbackDescription: "뉴스 상세 내용",
      stripHtmlContent: false,
      keywords: newsDetail.keywords || ["플레이하이브", "뉴스"],
    });
  } catch {
    return createMetadata({
      title: null,
      content: null,
      thumbUrl: null,
      fallbackTitle: "뉴스 상세 페이지",
      fallbackDescription: "뉴스 정보를 불러오는 중 오류가 발생했습니다.",
      stripHtmlContent: false,
      keywords: ["플레이하이브", "뉴스"],
    });
  }
}

const Page = ({
  params,
}: {
  params: Promise<{ newsCategoryType: string; id: string }>;
}) => {
  return <NewsInfo params={params} />;
};

export default Page;
