export default function Tag(
  { name }: { name: string },
  { key }: { key: string }
) {
  return (
    <p className="mt-1 space-x-1 truncate py-2 text-sm text-gray-500">
      <span
        key={key}
        className="inline-block rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-800 hover:cursor-pointer hover:bg-gray-300"
      >
        {name}
      </span>
    </p>
  );
}
