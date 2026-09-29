type FeedbackUserType = {
    name: string;
    avatarUrl?: string;
}

export type FeedbackType = {
    _id: string;
    rating: number;
    comment: string;
    user: FeedbackUserType;
}