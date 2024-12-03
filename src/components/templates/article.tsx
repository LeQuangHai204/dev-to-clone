const Article = ({ className, children, ...props }: { className?: string; children?: string }) => {
    return <div className={className}>{children}</div>;
};

export default Article;
