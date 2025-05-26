function Testimonial({
  image,
  name,
  heading,
  content,
  className = "",
  nameclass = "",
  badgeclass = "",
  headingclass = "",
  contentclass = "",
}) {
  return (
    <section
      className={`p-7 rounded-xl shadow-2xl drop-shadow-grey-500 ${className}`}
    >
      <div className="flex items-center gap-4 mb-3">
        <img className="rounded-full w-7" src={image} />
        <div>
          <p
            className={`font-Barlow text-sm/[1.1] font-medium tracking-normal mb-1 ${nameclass}`}
          >
            {name}
          </p>
          <p
            className={`font-Barlow text-xs/[1.1] font-medium tracking-normal ${badgeclass}`}
          >
            Verified Graduate
          </p>
        </div>
      </div>
      <h2
        className={`font-Barlow text-xl/[1.2] font-semibold tracking-normal my-5 ${headingclass}`}
      >
        {heading}
      </h2>
      <p
        className={`font-Barlow text-sm/[1.4] font-medium tracking-normal ${contentclass}`}
      >
        {content}
      </p>
    </section>
  );
}

export default Testimonial;
