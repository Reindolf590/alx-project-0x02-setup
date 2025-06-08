import { PostProps } from "@/interfaces";

const Card: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="rounded-lg shadow-md p-4 bg-white ">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-600">{content}</p>
            <span className="text-sm text-gray-500">Posted by User {userId}</span>
        </div>
    )
}

export default Card
