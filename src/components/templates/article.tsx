const Article = ({ className, children, ...props }: { className?: string; children?: string }) => {
    return <div>{children}</div>;
};

export default Article;
