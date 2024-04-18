import { DataProps } from "@/types";

const ResumeTitle = ({ resumeTitle }: Pick<DataProps, "resumeTitle">) => {
  return (
    <div className="bg-[black] h-2 sticky top-0 md:static md:h-20 flex justify-center items-center">
      <span className="text-5xl hidden md:block font-semibold text-white">{resumeTitle.title}</span>
    </div>
  );
};

export default ResumeTitle;
