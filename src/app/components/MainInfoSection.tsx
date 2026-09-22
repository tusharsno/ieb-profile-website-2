// import MessageSection from "./MessageSection";
// import QuickInfo from "./QuickInfo";
// import VisionPriorities from "./VisionPriorities";

// export default function MainInfoSection() {
//   return (
//     <section
//       className="
//         w-full
//         bg-[#f4f8fb]
//         py-3
//         lg:py-[14px]
//       "
//     >
//       <div
//         className="
//           mx-auto
//           grid w-full
//           max-w-[1320px]
//           grid-cols-1
//           items-stretch
//           gap-4
//           px-4 sm:px-5

//           lg:grid-cols-[260px_minmax(0,1fr)_350px]
//           lg:gap-[26px]
//           lg:px-0
//         "
//       >
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
      aria-label="Profile information"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eef6fc 0%, #f6fafd 45%, #eef6fc 100%)",
      }}
    >
      {/* Top subtle border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #bfd9ec 20%, #4fa3d8 50%, #bfd9ec 80%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      {/* Container */}
      <div className="mx-auto w-full max-w-[1320px] px-4 py-8 sm:px-5 sm:py-10 md:px-6 lg:px-8 lg:py-12 xl:px-10">
        <div
          className="
            grid w-full
            grid-cols-1
            items-stretch
            gap-5
            sm:gap-6
            md:grid-cols-2
            md:gap-6
            lg:grid-cols-[260px_minmax(0,1fr)_350px]
            lg:gap-6
            xl:grid-cols-[280px_minmax(0,1fr)_380px]
            xl:gap-7
          "
        >
          {/* Column 1 — QuickInfo */}
          <div className="md:col-span-1">
            <QuickInfo />
          </div>

          {/* Column 2 — MessageSection (spans full on tablet) */}
          <div className="md:col-span-2 lg:col-span-1">
            <MessageSection />
          </div>

          {/* Column 3 — VisionPriorities */}
          <div className="md:col-span-2 lg:col-span-1">
            <VisionPriorities />
          </div>
        </div>
      </div>

      {/* Bottom subtle border with gold */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #bfd9ec 20%, #e8a020 50%, #bfd9ec 80%, transparent 100%)",
          opacity: 0.5,
        }}
      />
    </section>
  );
}