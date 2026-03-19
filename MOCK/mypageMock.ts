// MOCK/mypageMock.ts

export const MYPAGE_DATA_MOCK = {
  data: {
    role: "USER",
    totalVisitCount: 42,
    createdPostCount: 15,
    createdCommentCount: 30,
    createdInquiryCount: 5,
    img: "",
    nickname: "유저닉네임",
    registeredAt: "2024-01-01",
    registrationMethod: "LOCAL",
  }
};

export const MY_COMMENT_LIST_MOCK = {
  data: {
    list: {
      content: [
        {
          postResponse: {
            commentType: "BOARD",
            id: 1,
            thumbnail: "",
            title: "목업 게시글 1",
            boardType: "BASEBALL",
            categoryType: "FREE",
            createdIp: "127.0.0.1",
            publicId: "user1",
            nickname: "유저1",
            commentCount: 5,
            createDate: new Date().toISOString(),
            lastModifiedDate: new Date().toISOString(),
            isHot: false,
          },
          commentResponse: {
            commentId: 101,
            createdIp: "127.0.0.1",
            publicId: "user1",
            nickname: "유저1",
            commenterImg: "",
            imageUrl: "",
            comment: "목업 댓글입니다.",
            recommendCount: 2,
            mentionedPublicId: "",
            mentionedNickname: "",
            createDate: new Date().toISOString(),
            lastModifiedDate: new Date().toISOString(),
            replyList: [],
            recommended: false,
            admin: false,
          }
        }
      ],
      pageInfo: {
        currentPage: 1,
        totalElement: 1,
        totalPage: 1,
      }
    }
  }
};

export const MY_POST_LIST_MOCK = {
  data: {
    list: {
      content: [
        {
          id: 1,
          boardType: "BASEBALL",
          categoryType: "FREE",
          title: "내가 쓴 게시글 1",
          createdIp: "127.0.0.1",
          thumbnail: "",
          publicId: "user1",
          nickname: "유저1",
          commentCount: 5,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isNew: true,
          isHot: false,
        }
      ],
      pageInfo: {
        currentPage: 1,
        totalElement: 1,
        totalPage: 1,
      }
    }
  }
};

export const INQUIRIES_LIST_MOCK = {
  data: {
    list: {
      content: [
        {
          id: 1,
          title: "문의내역 1",
          createdIp: "127.0.0.1",
          thumbnail: "",
          publicId: "user1",
          nickname: "유저1",
          commentCount: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isNew: true,
          isHot: false,
        }
      ],
      pageInfo: {
        currentPage: 1,
        totalElement: 1,
        totalPage: 1,
      }
    }
  }
};

export const INQUIRIES_DETAIL_MOCK = {
  data: {
    clientIp: "127.0.0.1",
    commentCount: 1,
    content: "문의내용 상세입니다.",
    createdAt: new Date().toISOString(),
    inquiryId: "1",
    nickname: "유저1",
    publicID: "user1",
    nextId: null,
    previousId: null,
  }
};

export const USER_INFO_MOCK = {
  data: {
    email: "user@example.com",
    tel: "01012345678",
    nickname: "유저닉네임",
    birthDate: "980101",
    genderType: "M" as const,
    imageUrl: "",
  }
};
