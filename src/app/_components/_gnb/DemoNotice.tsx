import Link from "next/link";

const DemoNotice = () => {
  return (
    <div className="w-full min-h-[32px] flex items-center justify-center border-t border-b border-slate-200 px-4">
      <p className="text-[12px] leading-[16px] text-slate-700 tracking-[-0.01em] text-center">
        본 사이트는 포트폴리오용 데모 페이지입니다. 실제 서비스는 운영하지
        않으며, GitHub 리포지토리는{" "}
        <Link
          href="https://github.com/MT-TEAM-Org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 font-medium hover:underline"
        >
          여기
        </Link>
        에서 확인하실 수 있습니다.
      </p>
    </div>
  );
};

export default DemoNotice;
