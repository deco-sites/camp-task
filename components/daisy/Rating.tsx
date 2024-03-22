export interface Props {
  rating?: number;
  maxRating: number;
}

export default function Rating(props: Props) {
  const { rating, maxRating } = props;
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div class="rating">
      {stars.map((star, idx) => {
        return (
          <input
            type="radio"
            name="rating-1"
            class="mask mask-star-2 bg-orange-400"
            readOnly={true}
            checked={idx + 1 === rating}
          />
        );
      })}
    </div>
  );
}
