"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import useGetMatchSchedule from "@/_hooks/fetcher/match-controller/useGetMatchSchedule";
import EmptyMatchBoard from "../_components/EmptyMatchBoard";
import MatchDetailSkeleton from "../_components/matchSkeleton";
import { MATCH_SCHEDULE_MOCK } from "@mock/matchScheduleMock";

export default function MatchTypePage({
  params,
}: {
  params: Promise<{ matchType: string }>;
}) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const { matchType } = unwrappedParams;
  const useMock = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

  const {
    data: scheduleResponse,
    isLoading,
    isError,
  } = useGetMatchSchedule(matchType);

  const scheduleData = useMock ? MATCH_SCHEDULE_MOCK.data.list : (scheduleResponse?.data?.list || []);
  const isScheduleLoading = useMock ? false : isLoading;
  const isScheduleError = useMock ? false : isError;

  useEffect(() => {
    if (!isScheduleLoading && scheduleData.length > 0) {
      const firstMatchId = scheduleData[0].id;
      router.replace(`/matchBroadcast/${matchType}/${firstMatchId}`);
    }
  }, [isScheduleLoading, scheduleData, matchType, router]);

  if (isScheduleLoading) {
    return (
      <div className="flex justify-center items-center py-5">
        <MatchDetailSkeleton />
      </div>
    );
  } else if (isScheduleError || scheduleData.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <EmptyMatchBoard />
      </div>
    );
  }

  return <div className="flex justify-center items-center"></div>;
}
