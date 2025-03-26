import React from 'react'
import Image from "./Image";


function comment() {
  return (
    <div className="p-4 bg-gray-200 rounded-xl mb-8">
        <div className="flex items-center gap-4">
        <Image
            src="userImg.jpeg"
            className="w-10 h-10 rounded-full object-cover"
            w="40"
          />
          <span className="font-medium">John Doe</span>
          <span className="text-sm text-gray-500">
          2 days ago
        </span>
        </div>
        <div className='mt-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat quo natus dicta distinctio modi inventore, ad totam veritatis nam atque reprehenderit. Provident quia quidem natus repellendus reprehenderit corporis id?</p>
        </div>
    </div>
  )
}

export default comment;