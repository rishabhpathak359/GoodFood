// const Contact=()=>{
//     return(
//         <div className="contact">
//         <h1>Contact Us</h1>
//         <h2>This is a Contact Us Page</h2>
//        </div>
//     );
// };
// export default Contact;
import { useFormik } from 'formik';
import Body from './Body';
import About from './About';
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
       <About/>
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default Contact;