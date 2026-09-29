import { FeedbackType } from "@/src/types/feedback";
import { Icons } from "../UI/Icons";
import Image from "next/image";

export const Card = ({ feedback }: { feedback: FeedbackType }) => {
  return (
    <article className="flex h-full min-h-83 w-full flex-col items-start rounded-xl border border-blue-100 bg-off-white-100 p-6 text-start shadow-md sm:p-8">
      <div className="flex items-center justify-start mb-4">
        {Array.from({ length: feedback.rating }).map((_, index) => (
          <Icons.Star key={index} width={20} height={20} fill="#FBBF24" />
        ))}
      </div>
      <p className="mb-8 text-brown-100 italic font-dm-sans font-normal text-base">
        &quot;{feedback.comment}&quot;
      </p>

      <div className="flex items-center justify-start gap-3 mt-auto">
        {feedback.user.avatarUrl && (
          <Image
            src={feedback.user.avatarUrl}
            alt={feedback.user.name}
            width={48}
            height={48}
            unoptimized
            className="rounded-full"
          />
        )}

        <div className="flex flex-col items-start justify-start gap-1">
          <p className="font-dm-sans font-bold text-brown-200 text-base">
            {feedback.user.name}
          </p>
          <div className="flex items-center justify-start gap-1 text-xs text-greyish-green-200 font-dm-sans">
            <Icons.VerifiedBadge width={13} height={13} fill="#536255" />
            <span>Cliente Verificado</span>
          </div>
        </div>
      </div>
    </article>
  );
};
