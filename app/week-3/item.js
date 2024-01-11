export default function Item({name}, {quantity}, {category}){
    return(
        <div>
            <li className="bg-gray-200 p-4 mb-4 rounded-md shadow-md">
                <div className="font-bold text-lg">{name}</div>
                <div className="text-gray-700">{quantity}</div>
                <div className="text-gray-700">{category}</div>
            </li>
        </div>
    );

}