import { memo } from "react";
import ApproachIntro from "../../../components/AboutComps/ApproachComps/ApproachIntro";
import ChildhoodMatters from "../../../components/AboutComps/ApproachComps/ChildhoodMatters";
import HolisticDevelopment from "../../../components/AboutComps/ApproachComps/HolisticDevelopment";
import PlayCreativity from "../../../components/AboutComps/ApproachComps/PlayCreativity";
import RelationshipsMatter from "../../../components/AboutComps/ApproachComps/RelationshipsMatter";
import SafeEnvironment from "../../../components/AboutComps/ApproachComps/SafeEnvironment";
import UniqueChildren from "../../../components/AboutComps/ApproachComps/UniqueChildren";

/* Section order and background rhythm:
   ApproachIntro   — dark navy (hero)
   ChildhoodMatters — white
   RelationshipsMatter — #faf8f4 warm
   UniqueChildren  — dark navy
   HolisticDevelopment — white
   PlayCreativity  — #faf8f4 warm
   SafeEnvironment — dark navy (closing CTA)
*/

const Approach = () => (
  <div className="min-h-screen" style={{ background: "#faf8f4" }}>
    <ApproachIntro />
    <ChildhoodMatters />
    <RelationshipsMatter />
    <UniqueChildren />
    <HolisticDevelopment />
    <PlayCreativity />
    <SafeEnvironment />
  </div>
);

Approach.displayName = "Approach";
export default memo(Approach);
