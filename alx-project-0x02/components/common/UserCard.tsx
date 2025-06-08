import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="rounded-lg shadow-md p-4 bg-white ">
            <h2 className="text-lg font-bold mb-1">{name}</h2>
            <p className="text-sm text-gray-700 mb-1">{email}</p>
            <p className="text-sm text-gray-600">{address.street}, {address.city}, {address.zipcode}</p>
        </div>
    )
}

export default UserCard
