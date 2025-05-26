import { testimonials } from "./data.js";
import Testimonial from "./Testimonial.jsx";

function App() {
  const { Daniel, Jonathan, Jeanette, Patrick, Kira } = testimonials;

  return (
    <div className=" min-h-screen flex items-center">
      <main className="max-w-4/5 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-15">
        <Testimonial
          className="bg-purple-500 md:col-span-2"
          nameclass="text-white"
          badgeclass="text-purple-50"
          headingclass="text-white"
          contentclass="text-purple-50"
          image={Daniel.image}
          name={Daniel.name}
          heading={Daniel.heading}
          content={Daniel.content}
        />
        <Testimonial
          className="bg-grey-500"
          nameclass="text-white"
          badgeclass="text-grey-200"
          headingclass="text-white"
          contentclass="text-grey-100"
          image={Jonathan.image}
          name={Jonathan.name}
          heading={Jonathan.heading}
          content={Jonathan.content}
        />
        <Testimonial
          className="bg-white"
          nameclass="text-grey-500"
          badgeclass="text-grey-400"
          headingclass="text-grey-500"
          contentclass="text-grey-400"
          image={Jeanette.image}
          name={Jeanette.name}
          heading={Jeanette.heading}
          content={Jeanette.content}
        />
        <Testimonial
          className="bg-dark-blue md:col-span-2"
          nameclass="text-white"
          badgeclass="text-white"
          headingclass="text-grey-200"
          contentclass="text-grey-100"
          image={Patrick.image}
          name={Patrick.name}
          heading={Patrick.heading}
          content={Patrick.content}
        />
        <Testimonial
          className="bg-white md:col-span-2 lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:col-start-4"
          nameclass="text-grey-500"
          badgeclass="text-grey-400"
          headingclass="text-grey-500"
          contentclass="text-grey-400"
          image={Kira.image}
          name={Kira.name}
          heading={Kira.heading}
          content={Kira.content}
        />
      </main>
    </div>
  );
}

export default App;
