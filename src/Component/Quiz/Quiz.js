import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Option from '../Option/Option';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ quiz }) => {
    const { correctAnswer, options, question } = quiz;
    console.log(options);
    const notify = () => toast(correctAnswer)

    return (
        <div className='border-2 w-full  p-3 space-y-3 bg-cyan-100 border-cyan-200'>
            <ToastContainer></ToastContainer>
            <div className='flex justify-center items-center relative'>
                <h2 className='text-2xl mx-5'>{question}</h2>
                <div className='absolute right-0'>
                    <FontAwesomeIcon icon={faEye} className='cursor-pointer ' onClick={notify}></FontAwesomeIcon>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 mx-2 '>
                {options.map((option, index) => <Option key={index} option={option} correctAnswer={correctAnswer}></Option>)}

            </div>
        </div>
    );
};

export default Quiz;