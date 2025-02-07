export default function Impact() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-5xl font-bold text-center">
        OUR IMPACT
        <span className="text-xl text-red-500 pl-3 block md:inline">
          2020-2025
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-8 gap-24">
        <StatCard number="8358+" subtitle="Beneficiaries" />
        <StatCard number="850+" subtitle="Scholarships" />
        <StatCard number="350+" subtitle="Trainings" />
        <StatCard number="250+" subtitle="Opportunities" />
      </div>
    </section>
  );
}

interface StatCardProps {
  number: string;
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, subtitle }) => {
  return (
    <div className="text-center p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
      <h2 className="text-6xl md:text-7xl font-bold text-transparent stroke-text">
        {number}
      </h2>
      <p className="text-white text-xl md:text-2xl uppercase mt-2">
        {subtitle}
      </p>
    </div>
  );
};
