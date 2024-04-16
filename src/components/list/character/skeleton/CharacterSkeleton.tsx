const arrForSkeleton = Array.from(Array(10), (_, index) => ({ id: index }));

function CharacterSkeleton() {
  return (
    <div
      role="status"
      className="animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow"
    >
      {arrForSkeleton.map(({ id }) => (
        <div className="flex items-center justify-between py-2" key={id}>
          <div className="flex">
            <div className="size-24 rounded-xl bg-gray-300" />
            <div>
              <div className="ml-4 mt-2 h-3 w-32 rounded-full bg-gray-200" />
              <div className="ml-4 mt-3 h-2 w-32 rounded-full bg-gray-200" />
              <div className="ml-4 mt-3 h-2 w-32 rounded-full bg-gray-200" />
              <div className="ml-4 mt-3 h-2 w-32 rounded-full bg-gray-200" />
            </div>
          </div>
          <div>
            <div className="mt-2 h-2 w-12 rounded-full bg-gray-300" />
            <div className="mt-2 h-2 w-12 rounded-full bg-gray-300" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default CharacterSkeleton;
