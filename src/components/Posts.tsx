import React from 'react';

export const Posts: React.FC = (props) => {
  
  const { data: { allMdx: { nodes } } } = props;

  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node: any) => {
          const { frontmatter: { title, slug, date, description } } = node;
          return (
            <div 
              className="transition duration-500 ease-in-out bg-theme-5 rounded-md h-24 m-4 hover:bg-green-700 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 hover:-translate-x-1"
              onClick={(e) => {
                e.preventDefault();
                window.location.href=slug;
              }}
              key={`blog-post-${title}`}
            ><a href={slug}>
              <div className="text-xl">{title}</div>
              <div className="text-md">{description}</div>
              <div className="text-md text-gray-400">{date ? `Published ${date}` : ''}</div>
            </a></div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;