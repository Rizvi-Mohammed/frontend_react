import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

import { AppWrap } from '../../wrapper';
import MotionWrap from '../../wrapper/MotionWrap';
import { urlFor, client } from '../../client';

import './Testimonial.scss'


const Testimonial = () => {
//   const[brands, setBrands] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const[currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//   const query = '*[_type == "testimonals"]';
//   const brandsQuery = '*[_type == "brands"]';

//   client.fetch(query).then((data) => {
//     setTestimonials(data);
//   });

//   client.fetch(brandsQuery).then((data) => {
//     setBrands(data);
//   });
// }, []);

// const handleClick = (index) => {
//   setCurrentIndex(index);
// }

//   return (
//     <>
//    {/* <h1> {testimonials.length} </h1> */}
     
//     {testimonials.length && (
//       <>
//       <div className="app__testimonial-item app__flex">
//         <img src={urlFor(testimonials[currentIndex].imageurl)} alt='testimonial' />
//         <div className="app__testimonial-content">
//           <p className="p-text">{testimonials[currentIndex].feedback}</p>
//           <div>
//             <h4 className="bold-text">
//               {testimonials[currentIndex].name}
//             </h4>
//             <h5 className="p-text">{testimonials[currentIndex].company}</h5>
//           </div>
//           </div>
//           </div>

//         <div className="app__testimonial-btns app__flex">
//           <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
//           <HiChevronLeft />
//           </div>
        

//          <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
//           <HiChevronRight />
//           </div>
//         </div>

        
      
//       </>
//     )}  

//     <div className="app__testimonials-brands app__flex">
//       {brands.map((brand) => (
//         <motion.div
//         whileInView={{opacity: [0,1]}}
//         transition={{duration: 0.5, type:'tween'}}
//         key={brand._id}
//         >
//           <img src={urlFor(brand.imgUrl)} alt={brand.name} />
//         </motion.div>
//       ))}
//     </div>


//     </>
//   )
 }

export default AppWrap(Testimonial, 'testimonial', 'app__testimonial');