import { useState, useEffect } from "react";
import { CommonsubHeading } from '../common/CommonHeading';
import contactConversation from '../../asstes/images/webp/contact-us/contactConversation.png';
import robotsvg from '../../asstes/images/svg/robot.svg';
import CommonBtn from "../common/CommonBtn";

const ContactWithFoxvision = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        subject: "",
        number: "",
        email: "",
        message: "",
        box: false,
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
        subject: "",
        number: "",
        email: "",
        message: "",
        box: "",
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'number') {
            // Allow only digits and restrict to 10 characters
            if (!/^\d*$/.test(value) || value.length > 10) {
                return;
            }
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            subject: /^\S+/,
            number: /^\d{10}$/,
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: /^\S+/,
        };
        const errors = {};
        if (!regex.name.test(formData.name)) {
            errors.name = "Name is invalid.";
        }
        if (!regex.lastname.test(formData.lastname)) {
            errors.lastname = "Last Name is invalid.";
        }
        if (!regex.subject.test(formData.subject)) {
            errors.subject = "Subject is invalid.";
        }
        if (!regex.number.test(formData.number)) {
            errors.number = "Number is invalid.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        if (!regex.message.test(formData.message)) {
            errors.message = "Message is invalid.";
        }
        if (!formData.box) {
            errors.box = "You must agree to the terms of services and privacy policy.";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };

    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            lastname: "",
            subject: "",
            number: "",
            email: "",
            message: "",
            box: false,
        });
        setFormErrors({
            name: "",
            lastname: "",
            subject: "",
            number: "",
            email: "",
            message: "",
            box: "",
        });
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".success-popup")) {
                handlePopupClose();
            }
        };
        if (showSuccessPopup) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showSuccessPopup]);

    return (
        <div className='pt-[126px]'>
            <div className='container xl:max-w-[1164px] px-3 mx-auto'>
                <div className='flex flex-wrap flex-row justify-between'>
                    <div className='lg:w-[43%] w-full'>
                        <CommonsubHeading className="lg:text-start !capitalize" subheading="Contact With FoxVision" />
                        <h2
                            className='font-semibold font-montserrat text-center lg:text-start text-4xl md:text-5xl xl:text-6xxl !leading-md text-darkblue mb-5'>Let's Start a Conversation</h2>
                        <div className='flex justify-center items-center lg:justify-start'>
                            <img src={contactConversation} alt="contactConversation" className='sm:max-w-[483px] xl:h-[349px] w-full' />
                        </div>
                    </div>
                    <div className='lg:w-[53%] w-full mt-[40px] lg:mt-0'>
                        <form className="lg:mt-[10px]" onSubmit={handleSubmit}>
                            <div className='flex sm:flex-row flex-col sm:gap-4'>
                                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-[14px]" >
                                    <input required className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                        type="text"
                                        placeholder="First Name"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {formErrors.name && (
                                        <p className="error-message font-plusJkarta">{formErrors.name}</p>
                                    )}
                                </div>
                                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-[14px]" >
                                    <input required className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                        type="text"
                                        placeholder="Last Name"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {formErrors.lastname && (
                                        <p className="error-message font-plusJkarta">{formErrors.lastname}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex sm:flex-row flex-col sm:gap-4">
                                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-[14px]">
                                    <input required className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                        type="text"
                                        placeholder="Subject"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {formErrors.subject && (
                                        <p className="error-message font-plusJkarta">{formErrors.subject}</p>
                                    )}
                                </div>
                                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-[14px]" >
                                    <input required className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                        type="number"
                                        placeholder="Mobile Number"
                                        id="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        maxLength={10}
                                    />
                                    {formErrors.number && (
                                        <p className="error-message font-plusJkarta">{formErrors.number}</p>
                                    )}
                                </div>
                            </div>
                            <div className="w-full mb-3 sm:mb-[14px]" >
                                <input required className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                    type="text"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                {formErrors.email && (
                                    <p className="error-message font-plusJkarta">{formErrors.email}</p>
                                )}
                            </div>
                            <div className="w-full mb-3 sm:mb-[14px] lg:mb-[18px]">
                                <textarea required className="resize-none text-base !text-black h-[159px] placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border-solid border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                    type="text"
                                    placeholder="Tell us more about your projects"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    cols="20"
                                    value={formData.message}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                {formErrors.message && (
                                    <p className="error-message font-plusJkarta">{formErrors.message}</p>
                                )}
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <div className="w-full lg:max-w-[302px] max-w-[402px] mb-[18px] border border-solid border-offGrey bg-extraLightgrey rounded-[6px] p-[8px_12px_7px_13px]">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <input required className="custom_checkbox cursor-pointer text-base !bg-grey w-[22px] h-[22px] font-normal border-[2px] border-solid border-black opacity-70 p-3 outline-none rounded"
                                                type="checkbox"
                                                id="box"
                                                name="box"
                                                checked={formData.box}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="box" className="text-black cursor-pointer font-poppins opacity-70 text-sm sm:text-base font-normal ">
                                                I’m not a robot
                                            </label>
                                        </div>
                                        {formErrors.box && (
                                            <p className="error-message font-poppins ">{formErrors.box}</p>
                                        )}
                                        <div>
                                            <img src={robotsvg} alt="robotsvg" className="mx-auto w-[49px] h-[45px]" />
                                            <p className='font-normal !text-[8px] text-lightGrey '>Privacy - Terms</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:justify-start justify-center">
                                <CommonBtn type="submit" className="md:!px-[99px]" btnName="Send Message" />
                            </div>
                        </form>
                        {showSuccessPopup && (
                            <div className="success-popup fixed top-[50%] left-[50%] h-[200px] sm:h-[280px] md:h-[350px] w-full max-w-[300px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] bg-white border border-solid border-darkpurple p-[20px] sm:p-[40px] rounded  shadow-[0px_0px_10px_0px_#0000001A] flex justify-center items-center flex-col translate-x-[-50%] translate-y-[-50%] z-[50]">
                                <p className="mb-[40px] text-darkblue text-xl sm:text-3xl font-semibold font-poppins text-center leading-normal">Message send successfully!</p>
                                <div className="flex justify-center items-center">
                                    <div className='w-full'>
                                        <CommonBtn onClick={handlePopupClose} className="lg:!px-[99px]" btnName="close" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactWithFoxvision;