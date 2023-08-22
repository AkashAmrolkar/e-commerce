import { Link } from "react-router-dom"

const Categories = ({prdData}) => {
  return (
    
    <Link to={`/products/category/${prdData}`} className="w-full block h-full">
      <div className="bg-white shadow-md border-white rounded-lg text-center py-8 text-2xl font-medium hover:border-orange-600 hover:text-orange-600 hover:scale-105 transition-all">
        {prdData}
      </div>
    </Link>
    
  )
}

export default Categories