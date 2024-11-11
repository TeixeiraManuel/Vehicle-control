interface CardProps {
  carIcon: React.ReactNode;
  settingsIcon: React.ReactNode;
  title: string;
  description: string;
  state: boolean;
  iconState: React.ReactNode;
}
export function CardVehicleInformation({
  carIcon,
  settingsIcon,
  title,
  description,
  state,
  iconState,
}: CardProps) {
  return (
    <div className="m-6 shadow-[0_3px_8px_rgba(0,0,0,0.24)] bg-white rounded-xl w-48 h-44 p-2">
      <div className="flex items-start justify-between my-2">
        <div className="bg-blue-500 text-white rounded-full p-1">{carIcon}</div>
        <div>{settingsIcon}</div>
      </div>
      <div className="my-1">
        <h1>{title}</h1>
        <p className="text-gray-600">{description}</p>
        <p className={`${state ? "text-green-500" : "text-red-500"} my-1`}>
          {state ? "Active" : "Inactive"}
        </p>
      </div>
      <div
        className={`flex flex-row items-end justify-end ${
          state ? "text-green-500" : "text-red-500"
        }`}
      >
        {iconState}
      </div>
    </div>
  );
}
