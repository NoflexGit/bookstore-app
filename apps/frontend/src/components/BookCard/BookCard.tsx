import Button from '../shared/Button';

export interface BookCardProps {
  title: string;
  author: string;
  img: string;
  price?: number;
}

export function BookCard({ title, img, author, price = 0 }: BookCardProps) {
  return (
    <article className="relative mt-14 mb-6 rounded-xl bg-white px-6 pt-48 pb-6 shadow">
      <div className="absolute inset-x-6 -top-14 flex justify-center rounded-md bg-gradient-to-r from-indigo-50 to-indigo-100 py-6">
        <img className="h-44" src={img} alt={title} />
      </div>
      <h3 className="text-md font-medium">{title}</h3>
      <div className="text-xs text-slate-700">{author}</div>
      <div className="my-4 text-2xl font-medium text-indigo-600 transition-colors">${price}</div>
      <Button>Add to cart</Button>
    </article>
  );
}

export default BookCard;
