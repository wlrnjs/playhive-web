import { NoticeContentType, NoticePageInfoType } from "@/app/(route)/customer/_types/NoticeItemType";
import { FeedbackContentType, FeedbackPageInfoType } from "@/app/(route)/customer/_types/FeedbackItemType";

// Mock Notice Data List
export const NOTICE_LIST_MOCK: {
  content: NoticeContentType[];
  pageInfo: NoticePageInfoType;
} = {
  content: [
    {
      id: 1,
      title: "서비스 업데이트 안내",
      thumbnail: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      nickname: "관리자",
      publicId: "admin",
      commentCount: 0,
      recommendCount: 0,
      commentSearchList: { commentId: 0, comment: "", imageUrl: "" },
    },
    {
      id: 2,
      title: "정기 점검 사전 안내",
      thumbnail: "",
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24).toISOString(),
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24).toISOString(),
      nickname: "관리자",
      publicId: "admin",
      commentCount: 0,
      recommendCount: 0,
      commentSearchList: { commentId: 0, comment: "", imageUrl: "" },
    },
    {
      id: 3,
      title: "개인정보 처리방침 변경 안내",
      thumbnail: "",
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 48).toISOString(),
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 48).toISOString(),
      nickname: "관리자",
      publicId: "admin",
      commentCount: 0,
      recommendCount: 0,
      commentSearchList: { commentId: 0, comment: "", imageUrl: "" },
    },
  ],
  pageInfo: {
    currentPage: 1,
    totalElement: 3,
    totalPage: 1,
  },
};

// Mock Feedback Data List
export const FEEDBACK_LIST_MOCK: {
  content: FeedbackContentType[];
  pageInfo: FeedbackPageInfoType;
} = {
  content: [
    {
      id: 1,
      title: "게시판 기능 개선 요청",
      thumbnail: "",
      createdIp: "127.0.0.1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      nickname: "유저1",
      publicId: "user1",
      status: "RECEIPT",
      commentCount: 2,
      recommendCount: 0,
      improvementCommentSearchList: { commentId: 0, comment: "", imageUrl: "" }
    },
    {
      id: 2,
      title: "모바일 화면 깨짐 현상 제보",
      thumbnail: "",
      createdIp: "127.0.0.1",
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 12).toISOString(),
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 12).toISOString(),
      nickname: "유저2",
      publicId: "user2",
      status: "CHECK",
      commentCount: 0,
      recommendCount: 0,
      improvementCommentSearchList: { commentId: 0, comment: "", imageUrl: "" }
    },
    {
      id: 3,
      title: "새로운 카테고리 추가 건의",
      thumbnail: "",
      createdIp: "127.0.0.1",
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24).toISOString(),
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 24).toISOString(),
      nickname: "유저3",
      publicId: "user3",
      status: "COMPLETE",
      commentCount: 5,
      recommendCount: 0,
      improvementCommentSearchList: { commentId: 0, comment: "", imageUrl: "" }
    },
  ],
  pageInfo: {
    currentPage: 1,
    totalElement: 3,
    totalPage: 1,
  },
};
