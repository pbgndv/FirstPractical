const Image = ({ srcWebp, srcDefault, alt, className, about }) => {
     return (
          <picture className={className} about={about}>
               <source srcSet={srcWebp} type="image/webp" />
               <img src={srcDefault} alt={alt} />
          </picture>
     );
};

export default Image;
