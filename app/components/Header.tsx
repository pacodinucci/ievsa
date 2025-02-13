import { montserrat } from "@/lib/fonts";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center">
      <h1 className={`${montserrat.className} text-3xl font-semibold`}>
        {label}
      </h1>
      {/* <p className="text-muted-foreground text-sm">{label}</p> */}
    </div>
  );
};
