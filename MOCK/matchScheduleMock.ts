import type { MatchScheduleResponse } from "@/services/match-controller/getMatchSchedule";

export const MATCH_SCHEDULE_MOCK: MatchScheduleResponse = {
  data: {
    list: [
      {
        id: 1,
        homeTeam: {
          id: 101,
          name: "Tottenham Hotspur",
          logo: "https://resources.premierleague.com/premierleague/badges/t6.svg",
          category: "FOOTBALL",
        },
        awayTeam: {
          id: 102,
          name: "Manchester United",
          logo: "https://resources.premierleague.com/premierleague/badges/t1.svg",
          category: "FOOTBALL",
        },
        place: "Tottenham Hotspur Stadium",
        category: "FOOTBALL",
        startTime: new Date(new Date().getTime() + 1000 * 60 * 60 * 2).toISOString(), // 2 hours later
        leagueName: "Premier League",
        groupId: 1,
      },
      {
        id: 2,
        homeTeam: {
          id: 201,
          name: "KIA Tigers",
          logo: "https://www.koreabaseball.com/file/team/KIA/logo_2024.png",
          category: "BASEBALL",
        },
        awayTeam: {
          id: 202,
          name: "Samsung Lions",
          logo: "https://www.koreabaseball.com/file/team/SS/logo_2024.png",
          category: "BASEBALL",
        },
        place: "Gwangju-Kia Champions Field",
        category: "BASEBALL",
        startTime: new Date(new Date().getTime() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        leagueName: "KBO League",
        groupId: 2,
      },
      {
        id: 3,
        homeTeam: {
          id: 301,
          name: "T1",
          logo: "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Ft1-full-on-dark.png",
          category: "ESPORTS",
        },
        awayTeam: {
          id: 302,
          name: "Gen.G",
          logo: "https://am-a.akamaihd.net/image?resize=60:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2Fgeng-2021-full-on-dark.png",
          category: "ESPORTS",
        },
        place: "LoL Park",
        category: "ESPORTS",
        startTime: new Date(new Date().getTime() + 1000 * 60 * 60 * 24).toISOString(), // Tomorrow
        leagueName: "LCK Summer",
        groupId: 3,
      },
      {
        id: 4,
        homeTeam: {
          id: 103,
          name: "Arsenal",
          logo: "https://resources.premierleague.com/premierleague/badges/t3.svg",
          category: "FOOTBALL",
        },
        awayTeam: {
          id: 104,
          name: "Chelsea",
          logo: "https://resources.premierleague.com/premierleague/badges/t8.svg",
          category: "FOOTBALL",
        },
        place: "Emirates Stadium",
        category: "FOOTBALL",
        startTime: new Date(new Date().getTime() + 1000 * 60 * 60 * 5).toISOString(),
        leagueName: "Premier League",
        groupId: 1,
      },
    ],
  },
};
