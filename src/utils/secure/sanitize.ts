// XSS 방지 유틸 함수

import DOMPurify from "dompurify";

export const cleanContent = (content: string | undefined | null) => {
  if (!content) return "";

  // 브라우저 환경에서만 동작하도록 처리
  if (typeof window === "undefined") {
    // 서버 환경인 경우 JSDOM을 사용해 DOMPurify 생성
    // (서버에서 실행될 때 에러를 방지하기 위함)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { JSDOM } = require("jsdom");
    const window = new JSDOM("").window;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const purify = DOMPurify(window);
    return purify.sanitize(content);
  }

  return DOMPurify.sanitize(content);
};