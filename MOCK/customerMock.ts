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

import { NoticeInfoItemType } from "@/app/(route)/customer/_types/NoticeInfoItemType";
import { FeedbackInfoType } from "@/app/(route)/customer/(route)/feedback/_types/FeedbackInfoType";

// Mock Notice Detail Data
export const NOTICE_INFO_MOCK: NoticeInfoItemType = {
  noticeId: 1,
  publicId: "admin",
  nickname: "관리자",
  clientIp: "127.0.0.1",
  title: "서비스 업데이트 안내",
  content: "<p>안녕하세요, <strong>PlayHive</strong> 입니다.</p><p>새로운 기능이 업데이트되었습니다.</p>",
  imgUrl: "",
  recommendCount: 10,
  commentCount: 5,
  viewCount: 100,
  createdAt: "2024-03-25T10:00:00.000Z",
  modifiedAt: "2024-03-25T10:00:00.000Z",
  isRecommended: false,
  link: "",
  nextId: 2,
  previousId: 0,
};

// Mock Feedback Detail Data
export const FEEDBACK_INFO_MOCK: FeedbackInfoType = {
  clientIp: "127.0.0.1",
  commentCount: 2,
  content: "<p>게시판 로딩 속도가 느립니다.</p><p>개선 부탁드립니다.</p>",
  createdAt: "2024-03-26T14:30:00.000Z",
  imgUrl: "",
  improvementId: 1,
  isRecommended: false,
  link: "",
  modifiedAt: "2024-03-26T14:30:00.000Z",
  nextId: 2,
  nickname: "유저1",
  previousId: 0,
  publicId: "user1",
  recommendCount: 3,
  status: "RECEIVED",
  title: "게시판 기능 개선 요청",
  viewCount: 50,
};
