import type { NewsItemType } from "@/app/(route)/news/_types/newsItemType";
import { NEWS_LIST_DATA_MOCK } from "@mock/newsListMock";

/**
 * 메인 페이지 큰 뉴스 목업 (useGetNewsDataList VIEW order, size 1)
 * 조회수 기준 상위 1건
 */
export const MAIN_BIG_NEWS_MOCK: NewsItemType[] = (() => {
  const sorted = [...NEWS_LIST_DATA_MOCK.content].sort(
    (a, b) => (b.viewCount ?? 0) - (a.viewCount ?? 0)
  );
  const [first] = sorted;
  return first
    ? [
        {
          id: first.id,
          title: first.title,
          category: first.category,
          thumbImg: first.thumbImg,
          postDate: first.postDate,
          content: first.content,
          source: first.source ?? "네이버 스포츠",
          viewCount: first.viewCount ?? 0,
          commentCount: first.commentCount ?? 0,
          recommendCount: first.recommendCount ?? 0,
        },
      ]
    : [];
})();

/**
 * 메인 페이지 뉴스 목록 목업 (useGetNewsDataList 기본 params, size 5)
 * 최신순 5건
 */
export const MAIN_NEWS_MOCK: NewsItemType[] = NEWS_LIST_DATA_MOCK.content
  .slice(0, 5)
  .map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    thumbImg: item.thumbImg,
    postDate: item.postDate,
    content: item.content,
    source: item.source ?? "네이버 스포츠",
    viewCount: item.viewCount ?? 0,
    commentCount: item.commentCount ?? 0,
    recommendCount: item.recommendCount ?? 0,
  }));

