import type { NewsListType } from "@/app/(route)/news/_types/newsListItemType";
import { NEWS_LIST_DATA_MOCK } from "@mock/newsListMock";

/**
 * 뉴스 목록 목업에서 id별 상세 데이터 맵 생성
 * nextId, previousId, recommend 추가 (상세 페이지용)
 */
const detailMockMap = ((): Map<number, NewsListType> => {
  const map = new Map<number, NewsListType>();
  const list = NEWS_LIST_DATA_MOCK.content;

  list.forEach((item, index) => {
    const prev = list[index - 1];
    const next = list[index + 1];
    map.set(item.id, {
      ...item,
      recommend: false,
      previousId: prev?.id,
      nextId: next?.id,
    });
  });

  return map;
})();

/**
 * 뉴스 상세 목업 조회 (id 1~20)
 * API getNewsItemInfo 응답과 동일한 NewsListType 반환
 */
export function getNewsDetailMock(id: string): NewsListType | null {
  const numId = Number(id);
  if (!Number.isInteger(numId) || numId < 1 || numId > 20) return null;
  return detailMockMap.get(numId) ?? null;
}

