export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISources {
    status: string;
    sources: ISource[];
}

export interface IArticle {
    source: {
        name: string;
        id: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INews {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export type Callback<T> = { (data: T): void };
