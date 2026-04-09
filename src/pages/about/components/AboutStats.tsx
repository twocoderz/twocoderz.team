export default function AboutStats() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start gap-p4">
        <h4 className="text-md font-bold text-black-80">Team experts</h4>
        <h1 className="text-7xl text-black-80 font-bold">11</h1>
      </div>
      <div className="flex flex-col items-start gap-p4">
        <h4 className="text-md font-bold text-black-80">
          In the industry since
        </h4>
        <h1 className="text-7xl text-black-80 font-bold">2023</h1>
      </div>
      <div className="flex flex-col items-start gap-p4">
        <h4 className="text-md font-bold text-black-80">Projects completed</h4>
        <h1 className="text-7xl text-black-80 font-bold">26+</h1>
      </div>
    </div>
  );
}
