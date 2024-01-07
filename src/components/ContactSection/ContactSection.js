import * as React from "react";

const ContactSection = React.forwardRef((_props, ref) => {
  return (
    <section ref={ref} id="contact" className="container h-screen">
      <div className="relative flex items-center">
        <span className="flex-shrink mx-4 text-2xl">Get in touch</span>
        <div className="flex-grow border mt-2 border-gray-400"></div>
      </div>
      <p className="p-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales
        malesuada felis, ut suscipit tellus lobortis at. Duis vitae arcu vel
        nisl ullamcorper eleifend eget ut dui. Cras varius efficitur ultrices.
        Nullam sed felis neque. Nam eget ligula sed augue interdum mattis et a
        nisi. Quisque ex tellus, fermentum sed blandit hendrerit, luctus in
        lectus. Pellentesque quis sodales neque, vitae fringilla ante. Nam
        tincidunt nisl vel libero porttitor pretium. Ut non magna arcu.
      </p>
    </section>
  );
});

export default ContactSection;
