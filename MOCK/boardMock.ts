/**
 * 게시판 목업 데이터
 * boardType: FOOTBALL, BASEBALL, ESPORTS
 * categoryType: FREE, QUESTION, ISSUE, VERIFICATION, TIP
 */

// 게시판 목록 아이템 타입
export interface BoardListItem {
  id: number;
  boardType: string;
  categoryType: string;
  title: string;
  createdIp: string;
  thumbnail: string;
  publicId: string;
  nickname: string;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  isNew: boolean;
  isHot: boolean;
}

// 게시판 상세 데이터 타입
export interface BoardDetailData {
  id: number;
  boardType: string;
  categoryType: string;
  title: string;
  content: string;
  viewCount: number;
  commentCount: number;
  recommendCount: number;
  isRecommended: boolean;
  nextId?: number;
  previousId?: number;
  publicId: string;
  nickname: string;
  clientIp: string;
  createDate: string;
  link?: string;
  thumbnail?: string;
}

// 게시판 목록 데이터 타입
export interface BoardListData {
  content: BoardListItem[];
  pageInfo: {
    currentPage: number;
    totalPage: number;
    totalElement: number;
  };
  noticeList?: any[];
}

/**
 * boardType과 categoryType에 따른 게시판 목록 목업
 */
export function getBoardListMock(
  boardType: string,
  categoryType: string
): BoardListData {
  const baseId = getBaseId(boardType, categoryType);
  const categoryName = getCategoryName(categoryType);

  return {
    content: Array.from({ length: 10 }, (_, index) => ({
      id: baseId + index + 1,
      boardType: boardType.toUpperCase(),
      categoryType: categoryType.toUpperCase(),
      title: `${getBoardName(boardType)} ${categoryName} 게시글 ${index + 1}`,
      createdIp: "192.168.1.1",
      thumbnail: index % 3 === 0 ? `https://picsum.photos/seed/${baseId + index}/400/300` : "",
      publicId: `user${baseId + index}`,
      nickname: `사용자${baseId + index}`,
      commentCount: Math.floor(Math.random() * 50),
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * (index + 1)).toISOString(),
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * (index + 1)).toISOString(),
      isNew: index < 3,
      isHot: index < 2,
    })),
    pageInfo: {
      currentPage: 1,
      totalPage: 3,
      totalElement: 30,
    },
    noticeList: [],
  };
}

/**
 * boardId에 따른 게시판 상세 목업
 */
export function getBoardDetailMock(boardId: string): { data: BoardDetailData } | null {
  const numId = Number(boardId);
  if (!Number.isInteger(numId) || numId < 1) return null;

  // boardId로부터 boardType과 categoryType 추정 (간단한 로직)
  const boardType = numId < 1000 ? "FOOTBALL" : numId < 2000 ? "BASEBALL" : "ESPORTS";
  const categoryType = getCategoryTypeFromId(numId);

  const categoryName = getCategoryName(categoryType);
  const boardName = getBoardName(boardType);

  return {
    data: {
      id: numId,
      boardType: boardType,
      categoryType: categoryType,
      title: `${boardName} ${categoryName} 게시글 상세 - ${boardId}`,
      content: `<p>이것은 ${boardName} ${categoryName} 카테고리의 게시글 상세 내용입니다.</p>
        <p>게시글 ID: ${boardId}</p>
        <p>여러 줄의 내용이 들어갈 수 있습니다. 실제 게시글처럼 다양한 내용을 포함할 수 있습니다.</p>
        <p>이미지나 링크도 포함할 수 있습니다.</p>
        <img src="https://picsum.photos/seed/${boardId}/800/600" alt="게시글 이미지" />`,
      viewCount: Math.floor(Math.random() * 1000) + 100,
      commentCount: Math.floor(Math.random() * 50),
      recommendCount: Math.floor(Math.random() * 100),
      isRecommended: false,
      nextId: numId + 1,
      previousId: numId > 1 ? numId - 1 : undefined,
      publicId: `user${numId}`,
      nickname: `사용자${numId}`,
      clientIp: "192.168.1.1",
      createDate: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      link: "",
      thumbnail: `https://picsum.photos/seed/${boardId}/400/300`,
    },
  };
}

// 유틸 함수들
function getBaseId(boardType: string, categoryType: string): number {
  const boardOffset: Record<string, number> = {
    FOOTBALL: 1000,
    BASEBALL: 2000,
    ESPORTS: 3000,
  };
  const categoryOffset: Record<string, number> = {
    FREE: 0,
    QUESTION: 100,
    ISSUE: 200,
    VERIFICATION: 300,
    TIP: 400,
  };
  return (
    (boardOffset[boardType.toUpperCase()] || 0) +
    (categoryOffset[categoryType.toUpperCase()] || 0)
  );
}

function getCategoryTypeFromId(id: number): string {
  const remainder = id % 1000;
  if (remainder < 100) return "FREE";
  if (remainder < 200) return "QUESTION";
  if (remainder < 300) return "ISSUE";
  if (remainder < 400) return "VERIFICATION";
  return "TIP";
}

function getCategoryName(categoryType: string): string {
  const map: Record<string, string> = {
    FREE: "자유",
    QUESTION: "질문",
    ISSUE: "이슈",
    VERIFICATION: "리뷰",
    TIP: "플레이 팁",
  };
  return map[categoryType.toUpperCase()] || categoryType;
}

function getBoardName(boardType: string): string {
  const map: Record<string, string> = {
    FOOTBALL: "축구",
    BASEBALL: "야구",
    ESPORTS: "E스포츠",
  };
  return map[boardType.toUpperCase()] || boardType;
}
