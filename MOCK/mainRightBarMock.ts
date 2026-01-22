import type { GameEventDataType } from "@/app/(route)/main/_types/EventType";
import type { NewsListWithPageInfo } from "@/app/(route)/main/_types/NewsDataProps";
import { NEWS_LIST_DATA_MOCK } from "@mock/newsListMock";

/**
 * MainRightBar 게임 이벤트 목업 (useGetGameEvent 응답)
 */
export const GAME_EVENT_MOCK: GameEventDataType = {
  content: [
    {
      id: 1,
      thumbImg: "https://picsum.photos/seed/event1/68/68",
      title: "2024 서머 시즌 이벤트",
      description: "시즌 패스 구매 시 특별 보상 지급",
      period: "2024.06.01 ~ 2024.08.31",
      link: "https://example.com/event1",
      exposureDate: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    },
    {
      id: 2,
      thumbImg: "https://picsum.photos/seed/event2/68/68",
      title: "신규 챔피언 출시 기념",
      description: "신규 챔피언 구매 시 스킨 무료 제공",
      period: "2024.06.15 ~ 2024.07.15",
      link: "https://example.com/event2",
      exposureDate: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    },
    {
      id: 3,
      thumbImg: "https://picsum.photos/seed/event3/68/68",
      title: "랭크 게임 승리 이벤트",
      description: "랭크 게임 승리 시 추가 포인트 지급",
      period: "2024.06.20 ~ 2024.07.20",
      link: "https://example.com/event3",
      exposureDate: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    },
    {
      id: 4,
      thumbImg: "https://picsum.photos/seed/event4/68/68",
      title: "프리미엄 패스 할인",
      description: "프리미엄 패스 30% 할인 이벤트",
      period: "2024.07.01 ~ 2024.07.31",
      link: "https://example.com/event4",
      exposureDate: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    },
    {
      id: 5,
      thumbImg: "https://picsum.photos/seed/event5/68/68",
      title: "커뮤니티 이벤트",
      description: "게시글 작성 시 추첨을 통한 경품 지급",
      period: "2024.07.10 ~ 2024.08.10",
      link: "https://example.com/event5",
      exposureDate: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(),
    },
  ],
  pageInfo: {
    currentPage: 1,
    totalPage: 1,
    totalElement: 5,
  },
};

/**
 * MainRightBar 뉴스 목업 (useGetMainRightBarNewsData 응답)
 * NEWS_LIST_DATA_MOCK에서 5개 추출
 */
export const MAIN_RIGHT_BAR_NEWS_MOCK: NewsListWithPageInfo = {
  content: NEWS_LIST_DATA_MOCK.content.slice(0, 5).map((item) => ({
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
  })),
  pageInfo: {
    currentPage: 1,
    totalPage: 1,
    totalElements: 5,
    startIndex: 1,
  },
};
