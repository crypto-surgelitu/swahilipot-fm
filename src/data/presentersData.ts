export interface Presenter {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    socialLinks?: {
      youtube: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
      website?: string;
    };
    showIds?: string[]; // References to shows the presenters host
  }
  
  export const presenters: Presenter[] = [
    {
      id: "miriam-angil",
      name: "Miriam Angil",
      role: "Morning Host",
      image: "https://placehold.co/400",
      bio: "Alex Rivera is the energetic voice that wakes up the city every weekday morning. With over a decade of experience in radio broadcasting, Alex brings a perfect blend of humor, insights, and the latest hits to start your day right. Known for his engaging interviews and authentic personality, Alex has become a staple in morning routines across the region. When not behind the microphone, he enjoys hiking, cooking, and volunteering at local community events.",
      // socialLinks: {
      //   twitter: "https://twitter.com/alexrivera",
      //   instagram: "https://instagram.com/alexrivera",
      // },
      showIds: ["the-breakfast-club"]
    },
    {
      id: "salim-barissa",
      name: "Salim Barissa",
      role: "Morning Host, Sports Analyst",
      image: "https://placehold.co/400",
      bio: "Samantha Lee brings a wealth of musical knowledge to Wavelength Radio as our Music Director and midday host. With her finger constantly on the pulse of the music industry, Samantha curates our station's distinctive sound. Her soothing voice and thoughtful commentary provide the perfect accompaniment to your workday. Samantha holds a degree in Music Business and has previously worked with several major record labels. A classically trained pianist, she also champions emerging artists through our 'Midday Discovery' segment.",
      showIds: ["the-breakfast-club", "kick-off"]
    },
    {
      id: "emmanuel-gona",
      name: "Emmanuel Gona",
      role: "Morning Host",
      image: "https://placehold.co/400",
      bio: "Morgan Chen hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. With a background in journalism and psychology, Morgan has a unique ability to connect with guests from all walks of life and draw out fascinating stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside the studio, Morgan is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.",
      // socialLinks: {
      //   twitter: "https://twitter.com/morgantalkshow",
      //   website: "https://morganchenmedia.com"
      // },
      showIds: ["the-breakfast-club"]
    },
    {
      id: "japheth-makanaki",
      name: "Japheth Makanaki",
      role: "Sports Analyst and Host",
      image: "https://placehold.co/400",
        bio: "Morgan Chen hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. With a background in journalism and psychology, Morgan has a unique ability to connect with guests from all walks of life and draw out fascinating stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside the studio, Morgan is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.",
        // socialLinks: {
        //   twitter: "https://twitter.com/morgantalkshow",
        //   website: "https://morganchenmedia.com"
        // },
        showIds: ["the-breakfast-club"]
      },
      {
        id: "japheth-makanaki",
        name: "Japheth Makanaki",
        role: "Sports Analyst and Host",
        image: "https://placehold.co/400",
        bio: "Morgan Chen hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. With a background in journalism and psychology, Morgan has a unique ability to connect with guests from all walks of life and draw out fascinating stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside the studio, Morgan is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.",
        // socialLinks: {
        //   twitter: "https://twitter.com/morgantalkshow",
        //   website: "https://morganchenmedia.com"
        // },
        showIds: ["kick-off"]
      },
      {
        id: "dorcas-uwiyera",
        name: "Dorcas Uwiyera",
        role: "Talk Show Host",
        image: "https://placehold.co/400",
        bio: "Morgan Chen hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. With a background in journalism and psychology, Morgan has a unique ability to connect with guests from all walks of life and draw out fascinating stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside the studio, Morgan is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.",
        // socialLinks: {
        //   twitter: "https://twitter.com/morgantalkshow",
        //   website: "https://morganchenmedia.com"
        // },
        showIds: ["swahilipot-cafe"]
      },
      {
        id: "dj-kams",
        name: "DJ Kams",
        role: "Show DJ",
        image: "https://placehold.co/400",
        bio: "Morgan Chen hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. With a background in journalism and psychology, Morgan has a unique ability to connect with guests from all walks of life and draw out fascinating stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside the studio, Morgan is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.",
        socialLinks: {
          youtube: "https://www.youtube.com/@vdjkams", 
        },
        showIds: ["swahilipot-cafe"]
      },
      {
        id: "munga-sauti-teule",
        name: "Munga Sauti Teule",
        role: "Drive Show Host",
        image: "https://placehold.co/400",
        bio: "Morgan Chen hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. With a background in journalism and psychology, Morgan has a unique ability to connect with guests from all walks of life and draw out fascinating stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside the studio, Morgan is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.",
        // socialLinks: {
        //   twitter: "https://twitter.com/morgantalkshow",
        //   website: "https://morganchenmedia.com"
        // },
        showIds: ["swahilipot-drive-show", "swahilipot-aroma"]
      },
      {
        id: "cj-bawazir",
        name: "CJ Bawazir",
        role: "Drive Show Host",
        image: "https://placehold.co/400",
        bio: "Morgan Chen hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. With a background in journalism and psychology, Morgan has a unique ability to connect with guests from all walks of life and draw out fascinating stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside the studio, Morgan is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.",
        // socialLinks: {
        //   twitter: "https://twitter.com/morgantalkshow",
        //   website: "https://morganchenmedia.com"
        // },
        showIds: ["swahilipot-drive-show"]
      },
      {
        id: "dj-spinking",
        name: "DJ Spinking",
        role: "Show DJ",
        image: "https://placehold.co/400",
        bio: "Morgan Chen hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. With a background in journalism and psychology, Morgan has a unique ability to connect with guests from all walks of life and draw out fascinating stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside the studio, Morgan is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.",
        socialLinks: {
          youtube: "https://www.youtube.com/@Djspinking",
        },
        showIds: ["swahilipot-drive-show"]
      }
      
  ];
  
  export const getPresenterById = (id: string): Presenter | undefined => {
    return presenters.find(presenter => presenter.id === id);
  };
  
  export const getPresentersByShowId = (showId: string): Presenter[] => {
    return presenters.filter(presenter => presenter.showIds?.includes(showId));
  };