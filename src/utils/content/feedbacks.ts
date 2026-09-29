import { FeedbackType } from "@/src/types/feedback";
import { v4 as uuidv4 } from "uuid";

export const Feedbacks: FeedbackType[] = [
    {
        _id: uuidv4(),
        rating: 5,
        comment: "Lorem ipsum dolor sit amet consectetur. Tellus sem ultrices risus nam ipsum ac enim. Rutrum libero vestibulum enim enim purus nulla cursus. Velit egestas ipsum in id massa.",
        user: {
            name: "Carlos M.",
            avatarUrl: "/feedbacks/users/carlos.jpg"
        }
    },
    {
        _id: uuidv4(),
        rating: 5,
        comment: "Lorem ipsum dolor sit amet consectetur. Tellus sem ultrices risus nam ipsum ac enim. Rutrum libero vestibulum enim enim purus nulla cursus. Velit egestas ipsum in id massa.",
        user: {
            name: "Fernanda L.",
            avatarUrl: "/feedbacks/users/fernanda.jpg"
        }
    },
    {
        _id: uuidv4(),
        rating: 5,
        comment: "Lorem ipsum dolor sit amet consectetur. Tellus sem ultrices risus nam ipsum ac enim. Rutrum libero vestibulum enim enim purus nulla cursus. Velit egestas ipsum in id massa.",
        user: {
            name: "Gabrielle S.",
            avatarUrl: "/feedbacks/users/gabrielle.jpg"
        }
    }
]
