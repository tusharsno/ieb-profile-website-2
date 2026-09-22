// import QuickInfo from "./QuickInfo";
// import MessageSection from "./MessageSection";
// import VisionPriorities from "./VisionPriorities";

// export default function MainInfoSection() {
//   return (
//     <section className="w-full bg-[#f8fafc] py-5">
//       <div className="max-w-7xl mx-auto px-6 flex gap-4 items-stretch">
//         <QuickInfo />
//         <MessageSection />
//         <VisionPriorities />
//       </div>
//     </section>
//   );
// }

import MessageSection from "./MessageSection";
import QuickInfo from "./QuickInfo";
import VisionPriorities from "./VisionPriorities";

export default function MainInfoSection() {
  return (
    <section
      className="
        w-full
        bg-[#f4f8fb]
        py-3
        lg:py-[14px]
      "
    >
      <div
        className="
          mx-auto
          grid w-full
          max-w-[1320px]
          grid-cols-1
          items-stretch
          gap-4
          px-4 sm:px-5

          lg:grid-cols-[260px_minmax(0,1fr)_350px]
          lg:gap-[26px]
          lg:px-0
        "
      >
        <QuickInfo />
        <MessageSection />
        <VisionPriorities />
      </div>
    </section>
  );
}