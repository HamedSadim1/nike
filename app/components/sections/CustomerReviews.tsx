import { reviews, customerReviewsContent } from "@/constants";
import { ReviewCard } from "../cards";
import { SectionHeading, SectionLayout } from "../ui";

const CustomerReviews = () => {
  return (
    <SectionLayout>
      <SectionHeading
        titlePrefix={customerReviewsContent.titlePrefix}
        titleHighlight={customerReviewsContent.titleHighlight}
        titleSuffix={customerReviewsContent.titleSuffix}
        alignCenter
        as="h3"
      />
      <p className="font-montserrat text-slate-gray m-auto mt-4 max-w-lg text-center text-lg leading-7">
        {customerReviewsContent.description}
      </p>

      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default CustomerReviews;
