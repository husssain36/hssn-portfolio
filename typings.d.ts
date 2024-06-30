interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: reference;
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    name: string;
    phoneNumber: string;
    role: string;
    profilePic: Image;
    heroImage: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
    progress: number;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
    progress: number;
}

export interface Project extends SanityBody {
    _type: "project";
    projectImage: Image;
    projectTitle: string;
    summary: string;
    technologies: Technology[];
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    technologies: Technology[];
    points: string[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    };
    description: string;
    slug: {
        current: string;
    }
    mainImage: 
    {
        asset: {
            url : string
        };
    };
    body: [object];
}