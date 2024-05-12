// import React, { useState } from 'react'
// import classes from './Movie.module.css';


// export default function Form() 
// {
//     const [title,setTitle] = useState('');
//     const [open,setOpen] = useState('');
//     const [date,setDate] = useState('');

//     const titleHandel =(event)=>
//         {
           
//             // console.log(event.target.value);
//             setTitle(event.target.value)
//         }

//         const openHandel =(event)=>
//             {
//                 // console.log(event.target.value);
//                 setOpen(event.target.value)
//             }

//             const dateHandel =(event)=>
//                 {
//                     // console.log(event.target.value);
//                     setDate(event.target.value)
//                 }

//                 const submitHandel = (event)=>
//                     {
//                         event.preventDefault()
//                         console.log("title",title);
//                         console.log("open",open);
//                         console.log("date",date);
//                     }
    
//   return (
//     <>
//     {/* <div >Form</div> */}
//     {/* <section className={classes.movie}>
        
//     </section> */}


//     <form onSubmit={submitHandel}>
//     <div>    
//     <label>Title</label>
//     <input 
//     type='text'
//     value={title}
//     onChange = {titleHandel}
//     />
//     </div>
//     <div>
//     <label>Opening Text</label>
//     <textarea value={open} 
//     onChange={openHandel}
//     ></textarea>
//     </div>
//     <div>
//     <label>Date</label>
//     <input type='text'
//     value={date}
//     onChange={dateHandel}
//     />
//     </div>
//     <div>
//         <button type='submit'>Add Movie</button>
//     </div>
//     {/* <textarea name="comment" form="usrform">Enter text here...</textarea> */}
//     </form>
//     </>
//   )
// }


import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        title: '',
        open: '',
        date: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(event.target)
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input 
                    type='text'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Opening Text</label>
                <textarea 
                    name='open' 
                    value={formData.open} 
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Date</label>
                <input 
                    type='text'
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type='submit'>Add Movie</button>
            </div>
        </form>
    );
}
