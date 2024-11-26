export default () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center text-2xl">
            <span className="h-8 w-8 animate-spin rounded-[50%] border-4 border-b-purple-600 border-t-purple-600"></span>
            <span className="ml-4 text-gray-600">Loading ...</span>
        </div>
    );
};

// loading.tsx only replace page.tsx while loading
// the layout.tsx and other wrapper components remains interative !
