import type { SearchListType, SearchListPageInfoType } from "@/app/(route)/total-search/_types/searchType";

export const TOTAL_SEARCH_MOCK: {
  content: SearchListType[];
  pageInfo: SearchListPageInfoType;
} = {
  content: [
    {
      id: 1,
      boardType: "FOOTBALL",
      categoryType: "FREE",
      title: "프리미어리그 이번 시즌 우승 경쟁 치열하네요",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      nickname: "축구팬",
      createdIp: "127.0.0.1",
      commentCount: 15,
      recommendCount: 30,
      isHot: true,
      isNew: true,
      publicId: "user1",
      thumbnail: "",
      boardCommentSearchList: {
        commentId: 101,
        comment: "맨시티가 결국 우승할 듯...",
        imageUrl: "",
      },
    },
    {
      id: 2,
      boardType: "BASEBALL",
      categoryType: "ISSUE",
      title: "오늘자 KBO 명장면 모음",
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60).toISOString(),
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60).toISOString(),
      nickname: "야구광",
      createdIp: "192.168.0.1",
      commentCount: 42,
      recommendCount: 100,
      isHot: true,
      isNew: false,
      publicId: "user2",
      thumbnail: "https://www.koreabaseball.com/file/team/KIA/logo_2024.png",
    },
    {
      id: 3,
      boardType: "ESPORTS",
      categoryType: "TIP",
      title: "롤 라인전 꿀팁 공유합니다",
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24).toISOString(),
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24).toISOString(),
      nickname: "페이커팬",
      createdIp: "10.0.0.1",
      commentCount: 5,
      recommendCount: 12,
      isHot: false,
      isNew: false,
      publicId: "user3",
      thumbnail: "",
    },
  ],
  pageInfo: {
    currentPage: 1,
    totalElement: 3,
    totalPage: 1,
  },
};
