// Teams data
export const teams = [
  { id: 1, name: "Team 1", logo: "/images/team-logo.png", wins: 0, draws: 0, losses: 0, points: 0 },
  { id: 2, name: "Team 2", logo: "/images/team-logo.png", wins: 0, draws: 0, losses: 0, points: 0 },
  { id: 3, name: "Team 3", logo: "/images/team-logo.png", wins: 0, draws: 0, losses: 0, points: 0 },
  { id: 4, name: "Team 4", logo: "/images/team-logo.png", wins: 0, draws: 0, losses: 0, points: 0 },
  { id: 5, name: "Team 5", logo: "/images/team-logo.png", wins: 0, draws: 0, losses: 0, points: 0 },
  { id: 6, name: "Team 6", logo: "/images/team-logo.png", wins: 0, draws: 0, losses: 0, points: 0 },
  { id: 7, name: "Team 7", logo: "/images/team-logo.png", wins: 0, draws: 0, losses: 0, points: 0 },
  { id: 8, name: "Team 8", logo: "/images/team-logo.png", wins: 0, draws: 0, losses: 0, points: 0 }
];

// Players data with stats - 5 players per position for weekly leaders
export const players = [
  // Quarterbacks (5)
  { id: 1, name: "Player 1", number: 1, position: "QB", image: "/images/player-qb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, touchdowns: 0, passingYards: 0, completions: 0, interceptions: 0, rating: 0 } },
  { id: 7, name: "Player 7", number: 7, position: "QB", image: "/images/player-qb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, touchdowns: 0, passingYards: 0, completions: 0, interceptions: 0, rating: 0 } },
  { id: 13, name: "Player 13", number: 13, position: "QB", image: "/images/player-qb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, touchdowns: 0, passingYards: 0, completions: 0, interceptions: 0, rating: 0 } },
  { id: 21, name: "Player 21", number: 21, position: "QB", image: "/images/player-qb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, touchdowns: 0, passingYards: 0, completions: 0, interceptions: 0, rating: 0 } },
  { id: 27, name: "Player 27", number: 27, position: "QB", image: "/images/player-qb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, touchdowns: 0, passingYards: 0, completions: 0, interceptions: 0, rating: 0 } },
  
  // Wide Receivers (5)
  { id: 2, name: "Player 2", number: 2, position: "WR", image: "/images/player-wr.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, receptions: 0, receivingYards: 0, touchdowns: 0, targets: 0, avgYards: 0 } },
  { id: 8, name: "Player 8", number: 8, position: "WR", image: "/images/player-wr.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, receptions: 0, receivingYards: 0, touchdowns: 0, targets: 0, avgYards: 0 } },
  { id: 14, name: "Player 14", number: 14, position: "WR", image: "/images/player-wr.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, receptions: 0, receivingYards: 0, touchdowns: 0, targets: 0, avgYards: 0 } },
  { id: 22, name: "Player 22", number: 22, position: "WR", image: "/images/player-wr.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, receptions: 0, receivingYards: 0, touchdowns: 0, targets: 0, avgYards: 0 } },
  { id: 28, name: "Player 28", number: 28, position: "WR", image: "/images/player-wr.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, receptions: 0, receivingYards: 0, touchdowns: 0, targets: 0, avgYards: 0 } },
  
  // Cornerbacks (5)
  { id: 3, name: "Player 3", number: 3, position: "CB", image: "/images/player-cb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } },
  { id: 9, name: "Player 9", number: 9, position: "CB", image: "/images/player-cb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } },
  { id: 15, name: "Player 15", number: 15, position: "CB", image: "/images/player-cb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } },
  { id: 23, name: "Player 23", number: 23, position: "CB", image: "/images/player-cb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } },
  { id: 29, name: "Player 29", number: 29, position: "CB", image: "/images/player-cb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } },
  
  // Rushers (5)
  { id: 4, name: "Player 4", number: 4, position: "R", image: "/images/player-r.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, flagPulls: 0, tackles: 0, interceptions: 0, passDeflections: 0, sacks: 0 } },
  { id: 10, name: "Player 10", number: 10, position: "R", image: "/images/player-r.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, flagPulls: 0, tackles: 0, interceptions: 0, passDeflections: 0, sacks: 0 } },
  { id: 16, name: "Player 16", number: 16, position: "R", image: "/images/player-r.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, flagPulls: 0, tackles: 0, interceptions: 0, passDeflections: 0, sacks: 0 } },
  { id: 24, name: "Player 24", number: 24, position: "R", image: "/images/player-r.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, flagPulls: 0, tackles: 0, interceptions: 0, passDeflections: 0, sacks: 0 } },
  { id: 30, name: "Player 30", number: 30, position: "R", image: "/images/player-r.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, flagPulls: 0, tackles: 0, interceptions: 0, passDeflections: 0, sacks: 0 } },
  
  // Running Backs (5)
  { id: 5, name: "Player 5", number: 5, position: "RB", image: "/images/player-rb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, rushingYards: 0, touchdowns: 0, carries: 0, avgYards: 0, fumbles: 0 } },
  { id: 11, name: "Player 11", number: 11, position: "RB", image: "/images/player-rb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, rushingYards: 0, touchdowns: 0, carries: 0, avgYards: 0, fumbles: 0 } },
  { id: 17, name: "Player 17", number: 17, position: "RB", image: "/images/player-rb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, rushingYards: 0, touchdowns: 0, carries: 0, avgYards: 0, fumbles: 0 } },
  { id: 25, name: "Player 25", number: 25, position: "RB", image: "/images/player-rb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, rushingYards: 0, touchdowns: 0, carries: 0, avgYards: 0, fumbles: 0 } },
  { id: 31, name: "Player 31", number: 31, position: "RB", image: "/images/player-rb.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, rushingYards: 0, touchdowns: 0, carries: 0, avgYards: 0, fumbles: 0 } },
  
  // Safeties (5)
  { id: 6, name: "Player 6", number: 6, position: "S", image: "/images/player-s.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } },
  { id: 12, name: "Player 12", number: 12, position: "S", image: "/images/player-s.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } },
  { id: 18, name: "Player 18", number: 18, position: "S", image: "/images/player-s.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } },
  { id: 26, name: "Player 26", number: 26, position: "S", image: "/images/player-s.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } },
  { id: 32, name: "Player 32", number: 32, position: "S", image: "/images/player-s.png", videoUrl: "https://vimeo.com/139714818", stats: { gamesPlayed: 0, tackles: 0, interceptions: 0, passDeflections: 0, forcedFumbles: 0, sacks: 0 } }
];

// Matches data
export const matches = [
  { id: 1, team1: { name: "Team 1", logo: "/images/team-logo.png", score: 0, result: null, scorers: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"] }, team2: { name: "Team 2", logo: "/images/team-logo.png", score: 0, result: null, scorers: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"] }, date: "December 15, 2025", time: "8:00 PM GMT+0", venue: "Euro Arena", isCompleted: true },
  { id: 2, team1: { name: "Team 3", logo: "/images/team-logo.png", score: 0 }, team2: { name: "Team 4", logo: "/images/team-logo.png", score: 0 }, date: "December 20, 2026", time: "9:30 AM GMT+0", venue: "New Euro Arena", league: "World Cup League", isCompleted: false },
  { id: 3, team1: { name: "Team 5", logo: "/images/team-logo.png", score: 0 }, team2: { name: "Team 6", logo: "/images/team-logo.png", score: 0 }, date: "December 25, 2026", time: "7:00 PM GMT+0", venue: "Stadium Arena", league: "Premier League", isCompleted: false },
  { id: 4, team1: { name: "Team 7", logo: "/images/team-logo.png", score: 0 }, team2: { name: "Team 8", logo: "/images/team-logo.png", score: 0 }, date: "January 5, 2026", time: "6:00 PM GMT+0", venue: "City Stadium", league: "Champions Cup", isCompleted: false },
  { id: 5, team1: { name: "Team 1", logo: "/images/team-logo.png", score: 0 }, team2: { name: "Team 3", logo: "/images/team-logo.png", score: 0 }, date: "January 12, 2026", time: "3:00 PM GMT+0", venue: "Metro Stadium", league: "MTL Elite League", isCompleted: false },
  { id: 6, team1: { name: "Team 2", logo: "/images/team-logo.png", score: 0 }, team2: { name: "Team 5", logo: "/images/team-logo.png", score: 0 }, date: "January 19, 2026", time: "5:00 PM GMT+0", venue: "Downtown Arena", league: "MTL Elite League", isCompleted: false },
  { id: 7, team1: { name: "Team 4", logo: "/images/team-logo.png", score: 0 }, team2: { name: "Team 6", logo: "/images/team-logo.png", score: 0 }, date: "January 26, 2026", time: "4:00 PM GMT+0", venue: "Elite Field", league: "MTL Elite League", isCompleted: false }
];

// Blog posts data
export const blogPosts = [
  { id: 1, title: "Romolu to stay at Real Nadrid?", excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", image: "/images/img_1.jpg", author: { name: "Admin", avatar: null }, date: "May 19, 2020", category: "Sports" },
  { id: 2, title: "Kai Nets Double To Secure Comfortable Away Win", excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", image: "/images/img_3.jpg", author: { name: "Admin", avatar: null }, date: "May 19, 2020", category: "Sports" },
  { id: 3, title: "Dogba set for Juvendu return?", excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", image: "/images/img_2.jpg", author: { name: "Admin", avatar: null }, date: "May 19, 2020", category: "Sports" },
  { id: 4, title: "Transfer Window Updates", excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", image: "/images/img_1.jpg", author: { name: "John Smith", avatar: "/images/person_1.jpg" }, date: "May 20, 2020", category: "Transfers" },
  { id: 5, title: "Champions League Preview", excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", image: "/images/img_3.jpg", author: { name: "Jane Doe", avatar: "/images/person_1.jpg" }, date: "May 21, 2020", category: "Champions League" },
  { id: 6, title: "Youth Academy Stars Rising", excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.", image: "/images/img_2.jpg", author: { name: "Mike Johnson", avatar: "/images/person_1.jpg" }, date: "May 22, 2020", category: "Youth" }
];

// Videos data
export const videos = [
  { id: 1, title: "Defense Highlights", thumbnail: "/images/video-1.png", url: "https://vimeo.com/139714818" },
  { id: 2, title: "Offense Highlights", thumbnail: "/images/video-2.png", url: "https://vimeo.com/139714818" },
  { id: 3, title: "Finals", thumbnail: "/images/video-3.png", url: "https://vimeo.com/139714818" }
];
