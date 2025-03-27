interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon,
  color = 'bg-primary/10 text-primary'
}: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`w-14 h-14 ${color} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text">{description}</p>
    </div>
  );
};

export default FeatureCard; 