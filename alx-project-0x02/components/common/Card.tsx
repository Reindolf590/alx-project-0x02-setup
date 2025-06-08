import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
  return (
    <div className="rounded-2xl shadow-md p-6 bg-white border border-gray-200 hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
      
    </div>
  )
}

export default Card
