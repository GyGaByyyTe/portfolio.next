export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="animate-pulse">
        <div className="h-8 w-32 bg-gray-200 rounded mb-8" />

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="h-[400px] bg-gray-200" />

          <div className="p-8">
            <div className="h-10 w-3/4 bg-gray-200 rounded mb-4" />
            
            <div className="flex flex-wrap gap-2 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-20 bg-gray-200 rounded-full" />
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-32 bg-gray-200 rounded" />
              <div className="h-12 w-32 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 