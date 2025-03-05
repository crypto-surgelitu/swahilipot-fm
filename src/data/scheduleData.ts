export interface Show {
    id: string;
    title: string;
    host: string;
    description: string;
    image: string;
    category: string;
    days: string[];
    startTime: string;
    endTime: string;
    featuredGuests?: string[];
    tags?: string[];
}

export interface ScheduleDay {
    name: string;
    shows: Show[];
}

export const allShows: Show[] = [
    {
        id: "the-breakfast-club",
        title: "The Breakfast Club",
        host: "Miriam Angil, Emmanuel Gona, Salim Barissa",
        description: "Wake up with Alex Rivera as he brings you the latest hits, traffic updates, and engaging discussions to kickstart your day.",
        image: "/show-banners/breakfast-club.png",
        category: "Morning Show",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "06:00",
        endTime: "10:00",
        tags: ["Talk", "Music", "News"]
    },
    {
        id: "kick-off",
        title: "Kick Off",
        host: "Japheth Makanaki, Salim Barissa",
        description: "Unwind during your lunch break with soothing melodies and light conversation with host Samantha Lee.",
        image: "/show-banners/kickoff.png",
        category: "Sports",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        startTime: "10:00",
        endTime: "11:00",
        tags: ["News"]
    },
    {
        id: "swahilipot-cafe",
        title: "Swahilipot Cafe",
        host: "Dorcas Uwiyera, DJ Kams",
        description: "Join Morgan Chen for lively discussions, celebrity interviews, and the hottest tracks to brighten up your lunch break.",
        image: "/show-banners/swahilipot-cafe.png",
        category: "Talk Show",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "11:00",
        endTime: "14:00",
        featuredGuests: ["Local celebrities", "Artists"],
        tags: ["Talk", "Music", "Entertainment"]
    },
    {
        id: "swahilipot-aroma",
        title: "Swahilipot Aroma",
        host: "Munga Sauti Teule, Shufaa Yakut",
        description: "Wind down your day with Jamie Williams' selection of chill tracks and relaxed conversation.",
        image: "/show-banners/swahilipot-aroma.png",
        category: "Food",
        days: ["Saturday"],
        startTime: "11:00",
        endTime: "14:00",
        tags: ["Culinary", "Entertainment"]
    },
    {
        id: "mikuki-ya-maneno",
        title: "Mikuki ya Maneno",
        host: "Malenga001, Cardiac Poet",
        description: "Navigate through traffic with Michael Johnson's mix of traffic updates, news headlines, and the best music to keep you company on your commute.",
        image: "/show-banners/mikuki-ya-maneno.png",
        category: "Entertainment",
        days: ["Saturday"],
        startTime: "8:00",
        endTime: "11:00",
        tags: ["Poetry", "News", "Music"]
    },
    {
        id: "kick-off",
        title: "Kick Off",
        host: "Japheth Makanaki, Salim Barissa",
        description: "Unwind during your lunch break with soothing melodies and light conversation with host Samantha Lee.",
        image: "/show-banners/kickoff.png",
        category: "Sports",
        days: ["Saturday"],
        startTime: "15:00",
        endTime: "19:00",
        tags: ["News"]
    },
    {
        id: "swahilipot-drive-show",
        title: "Swahilipot Drive Show",
        host: "Munga Sauti Teule, CJ Bawazir",
        description: "Beat the afternoon slump with upbeat tracks, fun games, and listener call-ins with the energetic Jordan Taylor.",
        image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=800&auto=format&fit=crop",
        category: "Drive Show",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        startTime: "15:00",
        endTime: "19:00",
        tags: ["Pop", "Interactive", "Fun"]
    },
    {
        id: "music-sessions",
        title: "Music Sessions",
        host: "DJs",
        description: "Ease into Sunday with Marcus King's selection of acoustic tracks, folk music, and live in-studio performances.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=1080&w=800&auto=format&fit=crop",
        category: "Music",
        days: ["Sunday"],
        startTime: "11:00",
        endTime: "14:00",
        tags: ["Acoustic", "Folk", "Live Music"]
    }
];

// Helper function to organize shows by day
export const getScheduleByDay = (): ScheduleDay[] => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    return days.map(day => {
        const dayShows = allShows
            .filter(show => show.days.includes(day))
            .sort((a, b) => a.startTime.localeCompare(b.startTime));
            
        return {
            name: day,
            shows: dayShows
        };
    });
};

// Get all categories for filtering
export const getAllCategories = (): string[] => {
    const categories = new Set<string>();
    allShows.forEach(show => categories.add(show.category));
    return Array.from(categories).sort();
};

// Get all tags for filtering
export const getAllTags = (): string[] => {
    const tags = new Set<string>();
    allShows.forEach(show => {
        if (show.tags) {
            show.tags.forEach(tag => tags.add(tag));
        }
    });
    return Array.from(tags).sort();
};
