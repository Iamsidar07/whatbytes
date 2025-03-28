import Image from "next/image";
import ScoreUpdateModal from "./UpdateScoreModal";

export default function SkillCard() {
  return (
    <section className="p-4 sm:p-6 rounded-lg border border-neutral-200 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
      <div className="flex items-start gap-2">
        <Image
          src={"/html.png"}
          alt="Html"
          width={2048}
          height={2048}
          className="w-12 h-12"
        />
        <div className="">
          <h2 className="text-lg text-primary-dark font-semibold capitalize">
            Hyper Text markup language
          </h2>
          <p className="text-sm mt-1 text-neutral-500">
            {" "}
            Questions: 08 | Duration: 15 Mins | Sumitted on 5 June 2021
          </p>
        </div>
      </div>
      <ScoreUpdateModal/>
    </section>
  );
}
