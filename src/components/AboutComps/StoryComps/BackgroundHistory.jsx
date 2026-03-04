import { memo } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const TIMELINE = [
  {
    num: "01",
    title: "Early Beginnings",
    body: "Our story began with a commitment to community-led childcare in Cardiff, working hand-in-hand with families to create nurturing learning environments rooted in trust and warmth.",
    accent: "text-primary-300",
  },
  {
    num: "02",
    title: "Flying Start Programme",
    body: "We became a leading provider in the Welsh Government&rsquo;s Flying Start initiative, delivering essential early years education to thousands of children across Cardiff — and building deep community roots.",
    accent: "text-teal-400",
  },
  {
    num: "03",
    title: "Into Private Childcare",
    body: "Drawing on years of public-sector experience, we opened our first private nursery at Rhydlafar — bringing the same community spirit and care into a dedicated, purpose-designed space.",
    accent: "text-primary-300",
  },
  {
    num: "04",
    title: "Three Nurseries, One Vision",
    body: "Today Little Haven runs three thriving settings in Rhydlafar, Pentyrch, and Radyr. Each location holds the same values: curiosity, warmth, and a genuine love for childhood.",
    accent: "text-teal-400",
  },
];

/* ── BackgroundHistory ───────────────────────────────────────────── */
const BackgroundHistory = () => (
  <section className="py-20 sm:py-28" style={{ background: "#faf8f4" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="max-w-2xl mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-teal-300 flex-shrink-0" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-teal-600">
            Our Journey
          </span>
        </div>
        <h2
          className="font-display font-semibold text-neutral-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
        >
          How we got<br />
          <span className="text-teal-600 italic">to where we are.</span>
        </h2>
        <p className="font-sans text-neutral-500 text-lg leading-relaxed">
          Over two decades of early years education, community service, and a passion for getting it
          right for every child and family.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          aria-hidden="true"
          className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-neutral-200 hidden sm:block"
        />

        <div className="space-y-10">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className="flex gap-6 sm:gap-10"
            >
              {/* Step marker */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-white border border-neutral-100 shadow-soft flex items-center justify-center flex-shrink-0 z-10">
                  <span
                    className={`font-display font-semibold leading-none ${item.accent}`}
                    style={{ fontSize: "1.25rem" }}
                  >
                    {item.num}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-3.5 pb-2">
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p
                  className="font-sans text-neutral-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

BackgroundHistory.displayName = "BackgroundHistory";
export default memo(BackgroundHistory);
