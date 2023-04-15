export interface Question {
    id: number;
    name: string;
    description: string;
    answers: Answer[];
}

export interface Answer {
    id: number;
    content: string;
}
